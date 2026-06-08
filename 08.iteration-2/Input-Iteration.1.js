"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 入力終了を意味する値 0 が入力されるまで正の整数を読み取り続ける例
// 正の整数が入力されるたびに，それまで入力された正の整数の総和を印字する．
{
    let input_message = "Input a positive integer (or 0 for exit): ";
    let sum = 0;
    Lib.print(input_message);
    let n = Number(Lib.input());
    while (n !== 0) { // n が入力終了を意味する 0 と等しくない間は繰り返す．
        sum = sum + n;
        Lib.print("sum: " + String(sum) + "\n");
        Lib.print(input_message);
        n = Number(Lib.input());
    }
}
