"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
/*
 * # Lib.indexOf 関数の例
 *
 * 姓と名を半角空白区切りで並べた文字列が入力される （例. "Naoko Yamada"）．
 * 入力された文字列の半角空白の前と後の文字列，つまり姓と名をそれぞれ取得して
 * 次の形式で印字する:
 * "Hello, 《姓》 sensei. Can I call you 《名》?"
 */
{
    Lib.print("Enter your full name: (e.g. \"Naoko Yamada\"): ");
    // 姓と名をローマ字で半角空白区切りで入力するものとする
    let name = Lib.input();

    // 文字列 name の長さ
    let length = Lib.length(name);

    // 姓と名の間の半角空白のインデクス
    let index_space = Lib.indexOf(name, " ", 0);

    // 姓 （0 文字目から index_space - 1 文字目まで）
    let first_name = Lib.slice(name, 0, index_space);

    // 名 （index_space + 1 文字目から length - 1 文字目まで）
    let last_name = Lib.slice(name, index_space + 1, length);

    Lib.print("Hello, " + last_name + " sensei.");     
    Lib.print(" Can I call you " + first_name + "?\n");
}