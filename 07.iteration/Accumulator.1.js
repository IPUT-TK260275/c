"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let cnt = 1;
    let sum = 0;
    while (cnt <= 9) {
        sum = sum + cnt;
        cnt = cnt + 1;
    }
    Lib.print(sum);
    Lib.print("\n");
}
