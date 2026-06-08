"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    Lib.print("---\n");
    let cnt = 0;
    let odd_number = 1;
    while (cnt < a) {
        Lib.print(odd_number);
        Lib.print("\n");
        cnt = cnt + 1;
        odd_number = odd_number + 2;
    }
}
