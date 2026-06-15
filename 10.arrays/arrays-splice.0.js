"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 部分配列を取得する例
{
    let x = ["a", "b", "c", "d", "e", "f", "g"];
    Lib.print("x: ");
    Lib.print(x);
    Lib.print("\n");
    // 配列 x の第2要素から要素3つ分を削除する
    Lib.splice(x, 2, 3);
    Lib.print("x: ");
    Lib.print(x);
    Lib.print("\n");
}
