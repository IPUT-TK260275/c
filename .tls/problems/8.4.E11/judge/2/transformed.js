"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let n = Number(Lib.input());
    let cnt = 1;
    let max = 0;
    while (cnt <= n) {
        let a = Number(Lib.input());
        if (cnt === 1 || a > max) {
            max = a;
        }
        cnt = cnt + 1;
    }

    Lib.print("---\n");
    Lib.print(max);
    Lib.print("\n");
}
