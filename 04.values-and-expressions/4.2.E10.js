"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let d = Number(Lib.input());
    Lib.print("---\n");
    Lib.print(d === 4 || d === 5 || d === 11 || d === 12 || d === 18 || d === 19 || d === 25 || d === 26);
    Lib.print("\n");
}
