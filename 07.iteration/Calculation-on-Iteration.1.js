"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let cnt = 0;
    while (cnt < 5) {
        Lib.print(cnt * cnt);
        Lib.print("\n");
        cnt = cnt + 1;
    }
}
