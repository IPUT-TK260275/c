"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    Lib.print("---\n");
    let cond1 = Lib.slice(a, 0, 2) === "TK";
    let sub = Lib.slice(a, 2, 8);
    let cond2 = sub >= "000000" && sub <= "999999";
    Lib.print( cond1 && cond2 );
    Lib.print("\n");
}
