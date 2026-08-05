"use strict";
const fs = require("fs");
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let input = fs.readFileSync(0, "utf8");
    let lines = input.split(/\r?\n/);
    if (Lib.length(lines) > 0 && lines[Lib.length(lines) - 1] === "") {
        Lib.splice(lines, Lib.length(lines) - 1, 1);
    }

    let query = lines[Lib.length(lines) - 1];
    let words = [];
    let meanings = [];
    let i = 0;
    while (i < Lib.length(lines) - 1 && lines[i] !== "") {
        Lib.push(words, lines[i]);
        Lib.push(meanings, lines[i + 1]);
        i = i + 2;
    }

    let answer = "NOT FOUND";
    i = 0;
    while (i < Lib.length(words)) {
        if (words[i] === query) {
            answer = meanings[i];
        }
        i = i + 1;
    }

    Lib.print("---\n");
    Lib.print(answer);
    Lib.print("\n");
}
