"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let m = Number(Lib.input());
    let n = Number(Lib.input());
    Lib.print("---\n");
    Lib.print((12 * m) % n === 0);
    Lib.print("\n");
}
