"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 値の割り当て文
{
    let a;          // この時点の変数 a の値は undefined
    Lib.print(a);   // undefined
    Lib.print("\n");     
    a = 1;          // 変数 a の値が undefined から 1 に更新される
    Lib.print(a);   // 1 が印字される
    Lib.print("\n");     
    a = 2;          // 変数 a の値が 1 から 2 に更新される
    Lib.print(a);   // 2 が印字される
    Lib.print("\n");     
    a = 3;          // 変数 a の値が 2 から 3 に更新される
    Lib.print(a);   // 3 が印字される
    Lib.print("\n");     
}