"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    let m = Number(Lib.input());
    let b = Number(Lib.input());
    let n = Number(Lib.input());
    Lib.print("---\n");
    Lib.print(a * m + b * n <= 500 && m + n <= 10);
    Lib.print("\n");
}
