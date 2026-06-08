"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    Lib.print("---\n");
    let cnt = 1;
    let factorial = 1;
    while (cnt <= a) {
        factorial = factorial * cnt;
        Lib.print(factorial);
        Lib.print("\n");
        cnt = cnt + 1;
    }
}
