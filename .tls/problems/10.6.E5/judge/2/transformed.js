"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = JSON.parse(Lib.input());
    let n = Number(Lib.input());
    let length = Lib.length(a);
    let found = false;

    let i = 0;
    while (i < length) {
        if (a[i] === n) {
            found = true;
        }
        i = i + 1;
    }

    Lib.print("---\n");
    Lib.print(found);
    Lib.print("\n");
}
