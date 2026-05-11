"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 変数宣言文，値の割り当て文，値の参照式
{
    let a;           // 変数 a の宣言文．これ以降は変数 a が使える
    a = 0;           // 変数 a への値の割り当て文
    Lib.print(a);    // 変数 a の値の参照式
    Lib.print("\n");
    let b;           // 変数 b の宣言文．これ以降は変数 b が使える
    b = 1;           // 変数 b への値の割り当て文
    Lib.print(b);    // 変数 b の値の参照式
    Lib.print("\n");
    let c;           // 変数 c の宣言文．これ以降は変数 c が使える
    c = a + b;       // 変数 c への値の割り当て文．変数 a, b の値の参照式
    Lib.print(c);    // 変数 c の値の参照式
    Lib.print("\n");
    // ここから同じ5行の4回の繰り返し
    a = b;
    b = c;
    c = a + b;
    Lib.print(c);
    Lib.print("\n");
    a = b;
    b = c;
    c = a + b;
    Lib.print(c);
    Lib.print("\n");
    a = b;
    b = c;
    c = a + b;
    Lib.print(c);
    Lib.print("\n");
    a = b;
    b = c;
    c = a + b;
    Lib.print(c);
    Lib.print("\n");
}