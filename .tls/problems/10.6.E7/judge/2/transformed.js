"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = [];
    let n = Number(Lib.input());
    while (n !== 0) {
        Lib.push(a, n);
        n = Number(Lib.input());
    }

    Lib.print("---\n");
    let i = Lib.length(a) - 1;
    while (i >= 0) {
        Lib.print(a[i]);
        Lib.print("\n");
        i = i - 1;
    }
}
