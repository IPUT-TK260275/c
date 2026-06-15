"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 配列の配列の各要素で反復を行う例です．
// 反復の入れ子を利用します．
{
    let a = [
        ["あ", "い", "う", "え", "お"],
        ["か", "き", "く", "け", "こ"],
        ["さ", "し", "す", "せ", "そ"],
    ];
    Lib.print("a: ");
    Lib.print(a);
    Lib.print("\n");
    let len_a = Lib.length(a);
    let i = 0;
    while (i < len_a) {
        let ai = a[i];
        let len_ai = Lib.length(ai);

        let j = 0;
        while (j < len_ai) {
            Lib.print("a[");
            Lib.print(i);
            Lib.print("][");
            Lib.print(j);
            Lib.print("]: ");
            Lib.print(a[i][j]);
            Lib.print("\n");
            j = j + 1;
        }
        i = i + 1;
    }
}
