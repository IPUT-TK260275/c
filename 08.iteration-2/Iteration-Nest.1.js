"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// while 文の例
// 変数 a に数値を割り当てた上で，a 個の * を1行に印字する:
{
    let a = Number(Lib.input());   // 印字したい文字数
    let cnt = 1;         // 何文字目かを表すカウンタ (1 → 2 → ... -> a)
    while (cnt <= a) {   // 変数 cnt の値がa以下である間は繰り返す．
        Lib.print("*");  // * を1文字印字する．
        cnt = cnt + 1;   // 変数 cnt の値を1増やす．
    }
    Lib.print("\n");
}
