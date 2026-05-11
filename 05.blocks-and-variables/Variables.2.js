"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 変数 a に割り当てる値を 1 ずつ増やす
{
    let a;           // 変数 a の宣言文．これ以降は変数 a が使える
    a = 0;           // 変数 a への値の割り当て文
    Lib.print(a);    // 変数 a の値の参照式
    Lib.print("\n");
    // ここから同じ3行の繰り返し
    // この時点で変数 a の値は 0
    a = a + 1;       // a + 1 の値つまり 1 を改めて変数 a に割り当てる
    Lib.print(a);
    Lib.print("\n");
    // この時点で変数 a の値は 1
    a = a + 1;       // a + 1 の値つまり 2 を改めて変数 a に割り当てる
    Lib.print(a);
    Lib.print("\n");
    // この時点で変数 a の値は 2
    a = a + 1;       // a + 1 の値つまり 3 を改めて変数 a に割り当てる
    Lib.print(a);
    Lib.print("\n");
    
    // この時点で変数 a の値は 3
    a = a + 1;       // a + 1 の値つまり 4 を改めて変数 a に割り当てる
    Lib.print(a);
    Lib.print("\n");
}