"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 3つの整数が入力される．
// 2番目の整数が他の2つの整数よりも大きければ true，そうでなければ false を印字する．
{
    Lib.print("Input the value of a: ");
    let a = Number(Lib.input());
    Lib.print("Input the value of b: ");
    let b = Number(Lib.input());
    Lib.print("Input the value of c: ");
    let c = Number(Lib.input());
    // a < b かつ b > c のときには true を，そうでなければ false を印字する．
    Lib.print((a < b) && (b > c));
    Lib.print("\n");
}
