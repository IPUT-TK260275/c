"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = JSON.parse(Lib.input());
    let hasLine = false;

    let i = 0;
    while (i < 3) {
        if (a[i][0] === "O" && a[i][1] === "O" && a[i][2] === "O") {
            hasLine = true;
        }
        if (a[0][i] === "O" && a[1][i] === "O" && a[2][i] === "O") {
            hasLine = true;
        }
        i = i + 1;
    }
    if (a[0][0] === "O" && a[1][1] === "O" && a[2][2] === "O") {
        hasLine = true;
    }
    if (a[0][2] === "O" && a[1][1] === "O" && a[2][0] === "O") {
        hasLine = true;
    }

    Lib.print("---\n");
    Lib.print(hasLine);
    Lib.print("\n");
}
