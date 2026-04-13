"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 数値への型変換の例
{
    // 真理値を数値に変換
    Lib.print("Number(false)   >>   ");
    Lib.print(Number(false));
    Lib.print("\n");
    Lib.print("Number(true)   >>   ");
    Lib.print(Number(true));
    Lib.print("\n");
    // 文字列を数値に変換
    Lib.print("Number(\"230\") + Number(\"4.56\")   >>   ");
    Lib.print(Number("230") + Number("4.56"));
    Lib.print("\n");
    Lib.print("Number(\"abc\")   >>   ");
    Lib.print(Number("abc"));
    Lib.print("\n");
}