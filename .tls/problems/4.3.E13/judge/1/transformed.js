"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    Lib.print("---\n");
    Lib.print(Lib.slice(a, 0, 3) + Lib.slice(a, 4, 8) + Lib.slice(a, 9, 13));
    Lib.print("\n");
}
