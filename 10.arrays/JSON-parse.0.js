"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 配列リテラルを表す文字列を入力して配列を生成する例（演習用）
{
    Lib.print("Enter an array: ");
    let a = JSON.parse(Lib.input());
    Lib.print("a: ");
    Lib.print(a);
    Lib.print("\n");
}
