"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    Lib.print("---\n");
    Lib.print(Math.floor(a / 3600));
    Lib.print("\n");
    Lib.print(Math.floor((a % 3600) / 60));
    Lib.print("\n");
    Lib.print(a % 60);
    Lib.print("\n");
}
