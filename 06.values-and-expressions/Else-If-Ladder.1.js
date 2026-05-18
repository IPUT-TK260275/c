"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// else-if のはしごの例
{
    Lib.print("(points?) ");   // 評定点 （0以上100以下）
    let points = Number(Lib.input());
    // 入力された評定点に基づいて成績 (S, A, B, C, D or R) を印字する．
    if (points >= 90) {
        Lib.print("S");
    }
    else if (points >= 80) {
        Lib.print("A");
    }
    else if (points >= 70) {
        Lib.print("B");
    }
    else if (points >= 60) {
        Lib.print("C");
    }
    else {
        Lib.print("D or R");
    }
    Lib.print("\n");
}
