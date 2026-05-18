"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// if-else文の例
{
    Lib.print("(probability?) ");
    let probability = Number(Lib.input());   // 降水確率
    let message;   // 印字する文字列を割り当てるための変数
    if (probability >= 20) {
        message = "You need an umbrella.";
    }
    else {
        message = "You don't need an umbrella.";
    }

    Lib.print(message);
    Lib.print("\n");
}
