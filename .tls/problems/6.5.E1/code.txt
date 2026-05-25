"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    Lib.print("---\n");
    if (a < 0) {
        Lib.print("NEGATIVE\n");
    } else {
        Lib.print("NONNEGATIVE\n");
    }
}
