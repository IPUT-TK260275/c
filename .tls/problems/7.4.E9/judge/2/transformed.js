"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    Lib.print("---\n");
    let cnt = 0;
    let s = "";
    while (cnt < a) {
        if (cnt % 2 === 0) {
            s = s + "1";
        }
        else {
            s = s + "0";
        }
        cnt = cnt + 1;
    }
    Lib.print(s);
    Lib.print("\n");
}
