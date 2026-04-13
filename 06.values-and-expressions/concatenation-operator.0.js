"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
/* 結合演算の例 */
{
    let a = "Hello";
    let b = "Goodbye";

    // 結合演算
    let c = a + b;
    /*!
     * 名前 c には結合演算によって生成される文字列
     * "HelloGoodbye" が割り当てられる．
    !*/

    Lib.print("a: ");
    Lib.print(a);
    Lib.print("\n");

    Lib.print("b: ");
    Lib.print(b);
    Lib.print("\n");

    Lib.print("c: ");
    Lib.print(c);
    Lib.print("\n");

    // 3つ以上の文字列の結合
    Lib.print(b + ", old me. " + a + ", new me!\n");
}