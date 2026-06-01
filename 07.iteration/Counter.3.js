"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let cnt = 5;
    while (cnt >= 0) {
        Lib.print(cnt);
        Lib.print("\n");
        cnt = cnt - 1;
    }
}
