"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 数値リテラルの例
{
    // 数値リテラル（整数）
    Lib.print(1);
    Lib.print("\n");     
    // 数値リテラル（負の数）
    Lib.print(-23);
    Lib.print("\n");
    // 数値リテラル（小数）
    Lib.print(4.56);
    Lib.print("\n");
    // 通常は使わない特殊な数値リテラル Infinity （無限大∞）
    // （例えば 1 / 0 などの意図しない計算の結果として生じる値）
    Lib.print(Infinity);
    Lib.print("\n");
    // 通常は使わない特殊な数値リテラル NaN （Not a Number： 数として意味のない値）
    // （例えば 0 / 0 などの意図しない計算の結果として生じる値）
    Lib.print(NaN);
    Lib.print("\n");
}
