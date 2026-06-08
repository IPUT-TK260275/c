"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 入力データの個数 n を入力した後に n 個の整数を入力する例
// 入力された n 個の整数の総和を印字する．
{
    Lib.print("Input the number of input data: ");
    let n = Number(Lib.input()); // 入力データの個数
    let sum = 0; // この後に入力される n 個の整数の総和を保持する変数
    let cnt = 1; // カウンタ (1 → 2 → ... -> n)
    while (cnt <= n) {   // 変数 cnt の値が n 以下である間は繰り返す．
        Lib.print("[");
        Lib.print(cnt);
        Lib.print("] Input a number: ");
        let a = Number(Lib.input());
        sum = sum + a;
        Lib.print("The sum of #1 to #");
        Lib.print(cnt);
        Lib.print(": ");
        Lib.print(sum);
        Lib.print("\n");
        cnt = cnt + 1;   // 変数 cnt の値を1増やす．
    }
}
