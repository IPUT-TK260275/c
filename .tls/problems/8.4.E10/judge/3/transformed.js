"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let num_odd = 0;
    let a = Number(Lib.input());
    while (a !== 0) {
        if (a % 2 === 1) {
            num_odd = num_odd + 1;
        }
        a = Number(Lib.input());
    }

    Lib.print("---\n");
    Lib.print(num_odd);
    Lib.print("\n");
}
