"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    let b = Number(Lib.input());
    let c = Number(Lib.input());
    Lib.print("---\n");
    Lib.print(a !== b && b !== c && a !== c);
    Lib.print("\n");
}
