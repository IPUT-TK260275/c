"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 変数初期化文
{
    let a = 0;
    Lib.print(a);
    Lib.print("\n");
    let b = 1;
    Lib.print(b);
    Lib.print("\n");
    let c = a + b;
    Lib.print(c);
    Lib.print("\n");
}