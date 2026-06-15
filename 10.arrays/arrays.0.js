"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 配列リテラルと要素参照式の例
{
    let a = [1, 10, 100]; // 長さ3の配列
    Lib.print("a is the list ");
    Lib.print(a);         // 配列 a の印字（Lib.printが適当に印字してくれます）
    Lib.print(".\n");
    Lib.print("a[0]: ");
    Lib.print(a[0]);      // 配列 a の第0要素（最初の要素）
    Lib.print("\n");
    Lib.print("a[1]: ");
    Lib.print(a[1]);      // 配列 a の第1要素
    Lib.print("\n");
    Lib.print("a[2]: ");
    Lib.print(a[2]);      // 配列 a の第2要素（最後の要素）
    Lib.print("\n");
}
