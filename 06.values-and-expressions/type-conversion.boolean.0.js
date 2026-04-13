"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 真理値への型変換の例
{
    // 数値を真理値に変換
    Lib.print("Boolean(0)   >>   ");
    Lib.print(Boolean(0));
    Lib.print("\n");
    Lib.print("Boolean(12)   >>   ");
    Lib.print(Boolean(12));
    Lib.print("\n");
    // 文字列を真理値に変換
    Lib.print("Boolean(\"\")   >>   ");
    Lib.print(Boolean(""));
    Lib.print("\n");
    Lib.print("Boolean(\"abc\")   >>   ");
    Lib.print(Boolean("abc"));
    Lib.print("\n");
}