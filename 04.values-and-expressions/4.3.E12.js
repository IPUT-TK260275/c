"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    Lib.print("---\n");
    let idx1 = Lib.indexOf(a, "/*", 0);
    let idx2 = Lib.indexOf(a, "*/", idx1);
    Lib.print(Lib.slice(a, idx1, idx2 + 2));
    Lib.print("\n");
}
