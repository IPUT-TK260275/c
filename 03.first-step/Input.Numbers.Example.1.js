"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input the value of x: ");
    let x = Number(Lib.input());   // 数値を読み取って x という名前を付ける
    Lib.print("Input the value of y: ");
    let y = Number(Lib.input());   // 数値を読み取って y という名前を付ける
    Lib.print("x + y = ");
    Lib.print(x + y);   // x + y の値を印字する
    Lib.print("\n");
}