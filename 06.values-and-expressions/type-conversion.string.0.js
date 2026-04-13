"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 文字列への型変換の例
{
    // 数値を文字列に変換
    Lib.print("String(12) + String(345)   >>   ");
    Lib.print(String(12) + String(345));
    Lib.print("\n");
    // 真理値を文字列に変換
    Lib.print("String(false)   >>   ");
    Lib.print(String(false));
    Lib.print("\n");
    Lib.print("String(true)   >>   ");
    Lib.print(String(true));
    Lib.print("\n");
}