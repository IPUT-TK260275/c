"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    Lib.print("---\n");
    let idx1 = Lib.indexOf(a, "(", 0);
    let idx2 = Lib.indexOf(a, ")", idx1);
    Lib.print(idx1);
    Lib.print("\n");
    Lib.print(idx2);
    Lib.print("\n");
}
