"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    Lib.print("---\n");
    Lib.print( (a - a % 3600) / 3600 );
    Lib.print("\n");
    Lib.print( ((a % 3600) - (a % 3600) % 60) / 60 );
    Lib.print("\n");
    Lib.print( a % 60 );
    Lib.print("\n");
}
