"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    Lib.print("---\n");
    let cnt = 2;
    let num = 0;
    while (cnt <= a) {
        if (a % cnt === 0) {
            num = num + 1;
        }
        cnt = cnt + 1;
    }
    Lib.print(num);
    Lib.print("\n");
}
