"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 宣言された直後の変数の値は undefined
{
    let a;          // 変数 a の宣言文．これ以降で変数 a が使えるようになる
    Lib.print(a);   // 宣言されたばかりの変数 a の値は undefined であり，それが印字される
    Lib.print("\n");
}