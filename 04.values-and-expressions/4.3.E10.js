"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    Lib.print("---\n");
    Lib.print( Lib.indexOf(a, "(", 0) );
    Lib.print("\n");
    Lib.print( Lib.indexOf(a, ")", 0) );
    Lib.print("\n");
}
