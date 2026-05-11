"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    let b = Number(Lib.input());
    Lib.print("---\n");
    Lib.print( a + (b - b % 3) / 3 < 7 );
    Lib.print("\n");
}
