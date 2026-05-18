"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    let b = Number(Lib.input());
    let c = Number(Lib.input());
    Lib.print("---\n");
    if (a > b) {
        let tmp = a;
        a = b;
        b = tmp;
    }
    if (b > c) {
        let tmp = b;
        b = c;
        c = tmp;
    }
    if (a > b) {
        let tmp = a;
        a = b;
        b = tmp;
    }
    Lib.print(a);
    Lib.print(" ");
    Lib.print(b);
    Lib.print(" ");
    Lib.print(c);
    Lib.print("\n");
}
