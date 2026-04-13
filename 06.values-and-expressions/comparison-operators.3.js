"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 2つの整数 a, b が入力される．
// a と b の少なくともどちらか一方が 10 未満であれば true，そうでなければ false を印字する．
{
    Lib.print("Input the value of a: ");
    let a = Number(Lib.input());
    Lib.print("Input the value of b: ");
    let b = Number(Lib.input());

    // a < 10 または b < 10 のときには true を，そうでなければ false を印字する．
    Lib.print(a < 10 || b < 10);
    Lib.print("\n");
}