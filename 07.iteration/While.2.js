"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Enter a nonnegative integer: ");
    let a = Number(Lib.input());
    let cnt = 0;
    while (cnt <= a) {
        Lib.print(cnt);
        Lib.print("\n");
        cnt = cnt + 1;
    }
}
