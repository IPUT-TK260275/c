"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 2つの整数 a, b が入力される．
// a が b よりも大きければ true，そうでなければ false を印字する．
{
    Lib.print("Input the value of a: ");
    let a = Number(Lib.input());
    Lib.print("Input the value of b: ");
    let b = Number(Lib.input());
    // a < b のときには true を，そうでなければ false を印字する．
    Lib.print(a < b);
    Lib.print("\n");
}
