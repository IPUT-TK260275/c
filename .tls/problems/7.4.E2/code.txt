"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    Lib.print("---\n");
    let cnt = 2 * a;
    while (cnt >= a) {
        Lib.print(cnt);
        Lib.print("\n");
        cnt = cnt - 1;
    }
}
