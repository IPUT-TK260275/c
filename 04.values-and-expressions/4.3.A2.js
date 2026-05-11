"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    Lib.print("---\n");
    let firstComma = Lib.indexOf(a, ",", 0);
    let secondComma = Lib.indexOf(a, ",", firstComma + 1);
    Lib.print( Lib.slice(a, 0, firstComma) );
    Lib.print("\n");
    Lib.print( Lib.slice(a, firstComma + 1, secondComma) );
    Lib.print("\n");
    Lib.print( Lib.slice(a, secondComma + 1, Lib.length(a)) );
    Lib.print("\n");
}
