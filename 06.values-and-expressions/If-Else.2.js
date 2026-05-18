"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// if文の例
{
    Lib.print("(probability?) ");
    let probability = Number(Lib.input());   // 降水確率
    let message = "You don't need an umbrella.";   // 印字する文字列
    if (probability >= 20) {
        message = "You need an umbrella.";
    }
    Lib.print(message);
    Lib.print("\n");
}
