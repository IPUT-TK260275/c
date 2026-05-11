"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    Lib.print("---\n");
    Lib.print( Lib.charAt(a, (Lib.length(a) - 1) / 2) );
    Lib.print("\n");
}
