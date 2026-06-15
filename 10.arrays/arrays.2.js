"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 配列の要素への値の割り当て文の例
{
    let a = [1, 10, 100]; // 長さ3の配列
    Lib.print("a: ");
    Lib.print(a);         // 配列 a の印字
    Lib.print(".\n");
    a[0] = 2;    // 配列 a の第 0 要素の値を 2 に更新する．
    Lib.print("a[0] updated.\n");
    Lib.print("a: ");
    Lib.print(a);
    Lib.print(".\n");
    a[1] = 20;   // 配列 a の第 1 要素の値を 20 に更新する．
    Lib.print("a[1] updated.\n");
    Lib.print("a: ");
    Lib.print(a);
    Lib.print(".\n");
    a[2] = 200;  // 配列 a の第 2 要素の値を 200 に更新する．
    Lib.print("a[2] updated.\n");
    Lib.print("a: ");
    Lib.print(a);
    Lib.print(".\n");
}
