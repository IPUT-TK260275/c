"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    let m = Number(Lib.input());
    let b = Number(Lib.input());
    let n = Number(Lib.input());
    Lib.print("---\n");
    Lib.print(5000 - (a * m + b * n));
    Lib.print("\n");
}
