"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let cnt = 0;
    while (cnt < 4) {
        Lib.print(cnt);
        Lib.print("\n");
        cnt = cnt + 1;
    }
}
