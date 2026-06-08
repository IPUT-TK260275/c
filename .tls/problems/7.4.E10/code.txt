"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    Lib.print("---\n");
    let cnt = 1;
    let sum = 0;
    while (cnt <= a) {
        sum = sum + cnt * cnt;
        cnt = cnt + 1;
    }
    Lib.print(sum);
    Lib.print("\n");
}
