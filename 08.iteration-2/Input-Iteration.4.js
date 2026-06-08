"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 入力データの個数 n を入力した後にデータ行を n 行入力する．
// 各データ行はカンマ区切りで
// 《学籍番号》，《氏名》，《国語の点数》，《数学の点数》，《英語の点数》の5要素からなる．
// データ行が入力されるたびに，その生徒の3教科合計得点を1行で印字する．
// また，n件のデータ行の入力の完了後には3教科合計得点の最大値 m を
// MAX: 《m》
// の形式で1行で印字する（《m》のところにmの値を書く）．
{
    Lib.print("Input the number of input data: ");
    let n = Number(Lib.input()); // 入力データの個数
    let m = 0; // 入力されるn件の成績データのうちの3教科合計得点の最大値を保持する
    let line_number = 1;
    while (line_number <= n) {
        Lib.print("[");
        Lib.print(line_number);
        Lib.print("] Input ID,NAME,JAPANESE,MATH,ENGLISH:\n");
        let data_line = Lib.input();   // 5 個の要素がカンマ区切りで並んだ文字列
        let length_data_line = Lib.length(data_line);

        let sum = 0; // このデータ行の3教科合計得点を保持する
        let i = 0;   // 文字列 data_line の中で次にカンマを探し始めるindex
        let cnt = 1; // カウンタ (1 → 2 → ... -> 5)
        while (cnt <= 5) {   // 変数 cnt の値が 5 以下である間は繰り返す．
            // i 文字目以降に初めて現れるカンマのindexをjとする
            // (ただしカンマが見つからなければ文字列 data_line の長さをjとする)
            let j = Lib.indexOf(data_line, ",", i);
            if (j === -1) {
                j = length_data_line;
            }

            // 読み取った値が国語,数学,英語の得点のデータであるなら
            // （つまり3,4,5番目の要素であるなら）
            if (3 <= cnt && cnt <= 5) {
                // cnt 番目の要素が書かれた部分文字列を取得する．
                let k_string = Lib.slice(data_line, i, j); // cnt 番目の文字列
                let k = Number(k_string);   // cnt番目の文字列を数値に変換した値
                sum = sum + k;
            }
            i = j + 1;  // iの値をj+1 (次にカンマを探し始めるindex) に更新する．
            cnt = cnt + 1;   // 変数 cnt の値を1増やす．
        }
        Lib.print(sum);
        Lib.print("\n");
        if (sum > m) {
            // これまでに見つかっている3教科合計得点の最大値mよりもsumが大きいなら
            // その値でmを更新しておく．
            m = sum;
        }
        line_number = line_number + 1;
    }
    Lib.print("MAX: ");
    Lib.print(m);
    Lib.print("\n");
}
