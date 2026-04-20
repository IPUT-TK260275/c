"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    Lib.print("---\n");
    Lib.print(Math.sqrt(a / Math.PI));
    Lib.print("\n");
}
