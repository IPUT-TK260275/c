"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 配列の配列が使われる実用的な計算の一例です．
{
    // 各学生の成績データ（[学籍番号, 氏名, 国語の点, 数学の点, 英語の点]の配列） の配列
    let scores = [
        ["tk259999", "Alice", 95, 80, 65],
        ["tk259998", "Bob", 85, 90, 85],
        ["tk259997", "Carol", 90, 85, 70],
        ["tk259996", "Dave", 80, 75, 75],
    ];
    let len_scores = Lib.length(scores);
    let i = 0;
    while (i < len_scores) {
        let score = scores[i];
        let id = score[0];
        let name = score[1];
        let japanese = score[2];
        let math = score[3];
        let english = score[4];
        let total = japanese + math + english;
        Lib.print(id);
        Lib.print(" (");
        Lib.print(name);
        Lib.print("): Total ");
        Lib.print(total);
        Lib.print("\n");
        Lib.print("  Japanese: ");
        Lib.print(japanese);
        Lib.print("\n");
        Lib.print("  Math: ");
        Lib.print(math);
        Lib.print("\n");
        Lib.print("  English: ");
        Lib.print(english);
        Lib.print("\n");
        i = i + 1;
    }
}
