"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let k = Number(Lib.input());
    Lib.print("---\n");

    let cnt = 1;
    while (cnt <= k) {
        Lib.print(k);
        if (cnt < k) {
            Lib.print(",");
        }
        cnt = cnt + 1;
    }
    Lib.print("\n");
}
