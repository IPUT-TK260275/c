"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 配列リテラルが評価されるたびに配列が生成されることを理解する例
// （複数の変数で別々の配列を参照する場合）
{
    let a = [1, 10, 100]; // 配列リテラルが評価されて配列が生成される
    let b = [1, 10, 100]; // 配列リテラルが評価されて配列が生成される
    Lib.print("a: ");
    Lib.print(a);
    Lib.print("\n");
    Lib.print("b: ");
    Lib.print(b);
    Lib.print("\n");
    a[0] = 2; // 変数 a が参照している配列の第0要素を2に更新する．
    Lib.print("a[0] = 2;\n");
    Lib.print("a: ");
    Lib.print(a);
    Lib.print("\n");
    Lib.print("b: ");
    Lib.print(b);
    Lib.print("\n");
}
