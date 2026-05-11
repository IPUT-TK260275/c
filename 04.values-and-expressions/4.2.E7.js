"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    let n = Number(Lib.input());
    Lib.print("---\n");
    Lib.print(a * n > 2000);
    Lib.print("\n");
}
