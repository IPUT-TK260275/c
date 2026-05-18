"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let price = Number(Lib.input());
    let number = Number(Lib.input());
    let total = price * number;
    Lib.print("---\n");
    if (total >= 2000) {
        total = total + 230;
    }
    else {
        total = total + 460;
    }
    Lib.print(total);
    Lib.print("\n");
}
