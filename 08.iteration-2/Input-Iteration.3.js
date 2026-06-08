"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 入力データの個数 n を入力した後に n 個の整数を空白区切りで1行で入力する例
// 入力された n 個の整数の総和を印字する．
{
    Lib.print("Input the number of input data: ");
    let n = Number(Lib.input()); // 入力データの個数
    Lib.print("Input ");
    Lib.print(n);
    Lib.print(" number(s) on a single line (separeted by spaces):\n");
    let data_line = Lib.input();   // n 個の整数が空白区切りで並んだ文字列
    let length_data_line = Lib.length(data_line);
    let sum = 0; // この後に入力される n 個の整数の総和を保持する
    let i = 0;   // 文字列 data_line の中で次に空白を探し始めるindex
    let cnt = 1; // カウンタ (1 → 2 → ... -> n)
    while (cnt <= n) {   // 変数 cnt の値が n 以下である間は繰り返す．
        // i 文字目以降に初めて現れる空白のindexをjとする
        // (ただし空白が見つからなければ文字列 data_line の長さをjとする)
        let j = Lib.indexOf(data_line, " ", i);
        if (j === -1) {
            j = length_data_line;
        }
        // cnt 番目の整数が書かれた部分文字列を取得する．
        let k_string = Lib.slice(data_line, i, j);
        let k = Number(k_string);   // cnt 番目の整数

        sum = sum + k;
        i = j + 1;  // iの値をj+1 (次に空白を探し始めるindex) に更新する．
        Lib.print("[");
        Lib.print(cnt);
        Lib.print("] ");
        Lib.print(k);
        Lib.print("\n");
        Lib.print("The sum of #1 to #");
        Lib.print(cnt);
        Lib.print(": ");
        Lib.print(sum);
        Lib.print("\n");
        cnt = cnt + 1;   // 変数 cnt の値を1増やす．
    }
}
