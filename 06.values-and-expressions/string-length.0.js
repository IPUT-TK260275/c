"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
/*
 * # Lib.length 関数の例
 *
 * 文字列が入力される．
 * 入力された文字列が8文字以上であれば true を，
 * そうでなければ false を印字する．
 */
{
    Lib.print("Enter a new password of length > 7): ");
    let password = Lib.input();

    // 文字列 password の長さ
    let length = Lib.length(password);

    Lib.print(length > 7);
    Lib.print("\n");
}