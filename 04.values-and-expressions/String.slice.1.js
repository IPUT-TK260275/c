"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
/*
 * # Lib.slice 関数の例
 *
 * 英大文字2つの後に数字6つが並ぶ長さ8文字の文字列が入力される （例. "TK987654"）．
 * 最初の英大文字2つの後に続く6桁の数字を印字する．
 */
{
    Lib.print("Enter your Student ID (e.g. \"TK987654\"): ");
    let id = Lib.input();
    let number_part = Lib.slice(id, 2, 8);
    Lib.print(number_part + "\n");     
}
