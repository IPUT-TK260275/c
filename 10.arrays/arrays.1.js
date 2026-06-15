"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 配列リテラルと要素参照式の例
// 1以上30以下の整数 d を入力する．2025年6月d日の曜日を印字する．
{
    Lib.print("Input d: ");
    let d = Number(Lib.input());
    let days = [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
    ];
    Lib.print("June ");
    Lib.print(d);
    Lib.print(", 2025 is a ");
    Lib.print(days[d % 7]);
    Lib.print(".\n");
}
