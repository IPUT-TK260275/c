"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = JSON.parse(Lib.input());
    let length = Lib.length(a);

    Lib.print("---\n");
    Lib.print(a[length - 1]);
    Lib.print("\n");
}
