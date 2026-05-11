"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    Lib.print("---\n");
    let half = Math.floor(Lib.length(a) / 2);
    Lib.print(Lib.slice(a, 0, half) === Lib.slice(a, half, Lib.length(a)));
    Lib.print("\n");
}
