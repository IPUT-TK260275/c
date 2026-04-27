"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
/*
 * # Lib.charAt 関数の例
 *
 * 文字列が入力される．
 * その文字列の最初の文字と最後の文字がともに '*' であれば true を，
 * そうでなければ false を印字する．
 */
{
    Lib.print("Enter a message: ");
    let message = Lib.input();
    // 文字列 message の長さ
    let length = Lib.length(message);
    // 最初の文字 （0 文字目）
    let the_first = Lib.charAt(message, 0);
    // 最後の文字 （length - 1 文字目）
    let the_last = Lib.charAt(message, length - 1);
    Lib.print((the_first === "*") && (the_last === "*"));
    Lib.print("\n");
}
