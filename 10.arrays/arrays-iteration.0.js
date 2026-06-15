"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 配列上での反復の例．各要素の値をインデクスとともに印字する．
{
    let x = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
    let length = Lib.length(x);
    Lib.print("x: ");
    Lib.print(x);
    Lib.print("\n");
    let i = 0;
    while (i < length) {
        Lib.print(i);
        Lib.print(": ");
        Lib.print(x[i]);
        Lib.print("\n");
        i = i + 1;
    }
}
