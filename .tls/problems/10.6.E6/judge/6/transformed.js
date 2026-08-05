"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = JSON.parse(Lib.input());
    let length = Lib.length(a);
    let sorted = true;

    let i = 1;
    while (i < length) {
        if (a[i - 1] > a[i]) {
            sorted = false;
        }
        i = i + 1;
    }

    Lib.print("---\n");
    Lib.print(sorted);
    Lib.print("\n");
}
