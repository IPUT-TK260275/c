"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    Lib.print("---\n");
    Lib.print(Math.floor(198 * a * 1.1));
    Lib.print("\n");
}
