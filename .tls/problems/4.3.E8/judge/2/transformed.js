"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    Lib.print("---\n");
    Lib.print(Lib.slice(a, 0, 3) + "-" + Lib.slice(a, 3, 7));
    Lib.print("\n");
}
