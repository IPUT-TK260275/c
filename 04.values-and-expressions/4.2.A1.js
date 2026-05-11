"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    let b = Number(Lib.input());
    let c = Number(Lib.input());
    Lib.print("---\n");
    Lib.print( a*a + b*b === c*c || b*b + c*c === a*a || c*c + a*a === b*b );
    Lib.print("\n");
}
