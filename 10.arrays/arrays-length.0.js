"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 配列の長さを取得する例
{
    let a = [1, 10, 100, 1000];
    let length = Lib.length(a);  // 配列 a の長さ (4)
    Lib.print("a: ");
    Lib.print(a);
    Lib.print("\n");
    Lib.print("length: ");
    Lib.print(length);
    Lib.print("\n");
    Lib.print("The last element a[");
    Lib.print(length - 1);     // 配列 a の最後の要素のインデクス (3)
    Lib.print("]: ");
    Lib.print(a[length - 1]);  // 配列 a の最後の要素 (1000)
    Lib.print("\n");
}
