"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    let b = Number(Lib.input());
    Lib.print("---\n");
    if (a <= b) {
        Lib.print(a);
        Lib.print(" ");
        Lib.print(b);
    }
    else {
        Lib.print(b);
        Lib.print(" ");
        Lib.print(a);
    }
    Lib.print("\n");
}
