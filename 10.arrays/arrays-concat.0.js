"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 配列を連結して新たな配列を生成する例
{
    let a = [1, 10, 100];
    Lib.print("a: ");
    Lib.print(a);
    Lib.print("\n");
    let b = [1000, 10000];
    Lib.print("b: ");
    Lib.print(b);
    Lib.print("\n");
    let c = Lib.concat(a, b);  // 配列 a と b を連結したものを生成する
    Lib.print("c: ");
    Lib.print(c);
    Lib.print("\n");
    Lib.print("a: ");
    Lib.print(a);              // 配列 a に変化はない
    Lib.print("\n");
    Lib.print("b: ");
    Lib.print(b);              // 配列 b に変化はない
    Lib.print("\n");
}
