"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const {spawnSync} = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const run = (filename, lines) => {
    const directory = fs.mkdtempSync(path.join(os.tmpdir(), "my-shop-app-test-"));
    const inputPath = path.join(directory, "input.txt");
    const outputPath = path.join(directory, "output.txt");
    const errorPath = path.join(directory, "error.txt");
    fs.writeFileSync(inputPath, lines.join("\n") + "\n");
    const input = fs.openSync(inputPath, "r");
    const output = fs.openSync(outputPath, "w");
    const error = fs.openSync(errorPath, "w");
    try {
        const result = spawnSync(process.execPath, [path.join(__dirname, filename)], {
            stdio: [input, output, error],
            encoding: "utf8",
            timeout: 3000,
        });
        fs.closeSync(output);
        fs.closeSync(error);
        return {
            status: result.status,
            stdout: fs.readFileSync(outputPath, "utf8"),
            stderr: fs.readFileSync(errorPath, "utf8"),
        };
    }
    finally {
        fs.closeSync(input);
        try { fs.closeSync(output); } catch {}
        try { fs.closeSync(error); } catch {}
        fs.rmSync(directory, {recursive: true});
    }
};

for (const filename of ["my-shop-app.1.js", "my-shop-app.2.js"]) {
    test(`${filename}: search filters and sorts by price`, () => {
        const result = run(filename, ["search", "a", "price", "exit"]);
        assert.equal(result.status, 0, result.stderr);
        const banana = result.stdout.indexOf("[2] banana, 120 yen, Yellow!");
        const apple = result.stdout.indexOf("[1] apple, 180 yen, Red!");
        const strawberry = result.stdout.indexOf("[3] strawberry, 380 yen, Sweet!");
        assert.ok(banana >= 0 && banana < apple && apple < strawberry);
    });

    test(`${filename}: search validates the sort item and sorts descriptions`, () => {
        const result = run(filename, ["search", "a", "id", "description", "exit"]);
        assert.equal(result.status, 0, result.stderr);
        assert.match(result.stdout, /Enter a valid sort item\./);
        const apple = result.stdout.indexOf("[1] apple");
        const strawberry = result.stdout.indexOf("[3] strawberry");
        const banana = result.stdout.indexOf("[2] banana");
        assert.ok(apple >= 0 && apple < strawberry && strawberry < banana);
    });

    test(`${filename}: search sorts by name`, () => {
        const result = run(filename, ["search", "a", "name", "exit"]);
        assert.equal(result.status, 0, result.stderr);
        const apple = result.stdout.indexOf("[1] apple");
        const banana = result.stdout.indexOf("[2] banana");
        const strawberry = result.stdout.indexOf("[3] strawberry");
        assert.ok(apple >= 0 && apple < banana && banana < strawberry);
    });

    test(`${filename}: add validates fields and assigns the next id`, () => {
        const result = run(filename, ["add", "", "melon", "1.5", "500", "", "Green!", "show", "exit"]);
        assert.equal(result.status, 0, result.stderr);
        assert.match(result.stdout, /Enter a valid name\./);
        assert.match(result.stdout, /'1\.5' is not an integer\./);
        assert.match(result.stdout, /Enter a description\./);
        assert.match(result.stdout, /\[4\] melon, 500 yen, Green!/);
    });

    test(`${filename}: update retries invalid ids and replaces product fields`, () => {
        const result = run(filename, ["update", "99", "2", "orange", "250", "Orange!", "show", "exit"]);
        assert.equal(result.status, 0, result.stderr);
        assert.match(result.stdout, /Enter a valid ID\./);
        const list = result.stdout.slice(result.stdout.lastIndexOf("--- PRODUCT LIST ---"));
        assert.match(list, /\[2\] orange, 250 yen, Orange!/);
        assert.doesNotMatch(list, /banana/);
    });

    test(`${filename}: delete retries invalid ids and removes one product`, () => {
        const result = run(filename, ["delete", "x", "1", "show", "exit"]);
        assert.equal(result.status, 0, result.stderr);
        assert.match(result.stdout, /Enter a valid ID\./);
        const list = result.stdout.slice(result.stdout.lastIndexOf("--- PRODUCT LIST ---"));
        assert.doesNotMatch(list, /\[1\] apple/);
        assert.match(list, /\[2\] banana/);
    });

    test(`${filename}: invalid commands are rejected and exit says goodbye`, () => {
        const result = run(filename, ["unknown", "exit"]);
        assert.equal(result.status, 0, result.stderr);
        assert.match(result.stdout, /'unknown' is an invalid command\./);
        assert.match(result.stdout, /Bye!/);
    });
}
