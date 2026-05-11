"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let d = Number(Lib.input());
    Lib.print("---\n");
    let rem = d % 7;
    Lib.print(rem === 4 || rem === 5);
    Lib.print("\n");
}
