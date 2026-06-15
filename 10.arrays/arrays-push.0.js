"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 配列に要素を追加する例
{
    let a = [1, 10, 100, 1000];
    Lib.print("a: ");
    Lib.print(a);
    Lib.print("\n");
    // 配列 a の末尾に 10000 を追加する．
    Lib.push(a, 10000);
    Lib.print("10000 pushed.\n");
    Lib.print("a: ");
    Lib.print(a);
    Lib.print("\n");
}
