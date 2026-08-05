"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = JSON.parse(Lib.input());
    let length = Lib.length(a);

    Lib.print("---\n");
    let i = 0;
    while (i < length) {
        Lib.print(a[i] * a[i]);
        Lib.print("\n");
        i = i + 1;
    }
}
