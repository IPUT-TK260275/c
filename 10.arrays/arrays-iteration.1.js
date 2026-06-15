"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 配列上での反復の例．各要素の値の総和を印字する．
{
    let x = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
    let length = Lib.length(x);
    Lib.print("x: ");
    Lib.print(x);
    Lib.print("\n");
    let sum = 0;
    let i = 0;
    while (i < length) {
        sum = sum + x[i];
        Lib.print(i);
        Lib.print(": ");
        Lib.print(x[i]);
        Lib.print(", sum: ");
        Lib.print(sum);
        Lib.print("\n");
        i = i + 1;
    }
}
