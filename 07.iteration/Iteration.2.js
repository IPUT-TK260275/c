"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let cnt = 0;
    let odd_number = 999;
    while (cnt < 6) {
        Lib.print(odd_number);
        Lib.print("\n");
        cnt = cnt + 1;
        odd_number = odd_number - 2;
    }
}
