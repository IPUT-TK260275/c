"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const {spawn} = require("node:child_process");
const http = require("node:http");
const path = require("node:path");
const querystring = require("node:querystring");

let server;

const request = (method, target, data) => new Promise((resolve, reject) => {
    const body = data === undefined ? "" : querystring.stringify(data);
    const req = http.request({
        hostname: "127.0.0.1",
        port: 3000,
        path: target,
        method,
        headers: method === "POST" ? {
            "Content-Type": "application/x-www-form-urlencoded",
            "Content-Length": Buffer.byteLength(body),
        } : {},
    }, (res) => {
        let content = "";
        res.setEncoding("utf8");
        res.on("data", (chunk) => { content += chunk; });
        res.on("end", () => resolve(content));
    });
    req.on("error", reject);
    req.end(body);
});

const get = (target) => request("GET", target);
const post = (data) => request("POST", "/", data);
const assertTableOrder = (body, names) => {
    let previous = -1;
    for (const name of names) {
        const current = body.indexOf(`<td>${name}</td>`);
        assert.ok(current > previous, `expected ${name} after index ${previous}`);
        previous = current;
    }
};

test.before(async () => {
    server = spawn(process.execPath, [path.join(__dirname, "my-shop-app.web.js")], {
        stdio: ["ignore", "pipe", "pipe"],
    });
    await new Promise((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error("server startup timed out")), 3000);
        server.once("error", reject);
        server.stderr.once("data", (chunk) => reject(new Error(chunk.toString())));
        server.stdout.on("data", (chunk) => {
            if (chunk.toString().includes("Server running")) {
                clearTimeout(timer);
                resolve();
            }
        });
    });
});

test.after(() => {
    if (server !== undefined) { server.kill(); }
});

test("web app supports all six product sort orders", async () => {
    assertTableOrder(await get("/?order=id_desc"), ["strawberry", "banana", "apple"]);
    assertTableOrder(await get("/?order=id_asc"), ["apple", "banana", "strawberry"]);
    assertTableOrder(await get("/?order=name_desc"), ["strawberry", "banana", "apple"]);
    assertTableOrder(await get("/?order=name_asc"), ["apple", "banana", "strawberry"]);
    assertTableOrder(await get("/?order=price_desc"), ["strawberry", "apple", "banana"]);
    assertTableOrder(await get("/?order=price_asc"), ["banana", "apple", "strawberry"]);
});

test("web app adds, updates, and deletes a product", async () => {
    let body = await post({action: "add", name: "melon", price: "500", description: "Green!"});
    assert.match(body, /<td>4<\/td><td>melon<\/td><td>&yen;500<\/td><td>Green!<\/td>/);
    body = await post({action: "update", id: "4", name: "watermelon", price: "600", description: "Big!"});
    assert.match(body, /<td>4<\/td><td>watermelon<\/td><td>&yen;600<\/td><td>Big!<\/td>/);
    body = await post({action: "delete", id: "4"});
    assert.doesNotMatch(body, /watermelon/);
});

test("web app ignores updates and deletes for missing ids", async () => {
    await post({action: "update", id: "99", name: "x", price: "1", description: "x"});
    await post({action: "delete", id: "99"});
    const body = await get("/?order=id_asc");
    assertTableOrder(body, ["apple", "banana", "strawberry"]);
    assert.doesNotMatch(body, /<td>x<\/td>/);
});
