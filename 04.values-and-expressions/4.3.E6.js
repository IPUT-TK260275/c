"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    Lib.print("---\n");
    Lib.print(Lib.charAt(a, Math.floor(Lib.length(a) / 2)));
    Lib.print("\n");
}
