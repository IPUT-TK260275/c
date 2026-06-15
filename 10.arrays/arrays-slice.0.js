"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 部分配列を取得する例
{
    let x = ["a", "b", "c", "d", "e"];
    Lib.print("x: ");
    Lib.print(x);
    Lib.print("\n");
    let x13 = Lib.slice(x, 1, 3);  // 配列 x の第1要素から第3-1要素の部分配列を生成
    Lib.print("x13: ");
    Lib.print(x13);
    Lib.print("\n");
    let x14 = Lib.slice(x, 1, 4);  // 配列 x の第1要素から第4-1要素の部分配列を生成
    Lib.print("x14: ");
    Lib.print(x14);
    Lib.print("\n");
    Lib.print("x: ");
    Lib.print(x);   // もとの配列 x に変化はない．
    Lib.print("\n");
}
