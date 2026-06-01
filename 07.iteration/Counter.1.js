"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let cnt = 100;
    while (cnt <= 104) {
        Lib.print(cnt);
        Lib.print("\n");
        cnt = cnt + 1;
    }
}
