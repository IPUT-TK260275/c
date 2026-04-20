"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 数値の比較演算式の例
{
    // 等しい
    Lib.print("1 === 1");
    Lib.print("   >>   ");
    Lib.print(1 === 1);
    Lib.print("\n");
    Lib.print("1 === 2");
    Lib.print("   >>   ");
    Lib.print(1 === 2);
    Lib.print("\n");
    // 等しくない
    Lib.print("1 !== 1");
    Lib.print("   >>   ");
    Lib.print(1 !== 1);
    Lib.print("\n");
    Lib.print("1 !== 2");
    Lib.print("   >>   ");
    Lib.print(1 !== 2);
    Lib.print("\n");
    // 小なり
    Lib.print("2 < 1");
    Lib.print("   >>   ");
    Lib.print(2 < 1);
    Lib.print("\n");
    Lib.print("1 < 1");
    Lib.print("   >>   ");
    Lib.print(1 < 1);
    Lib.print("\n");
    Lib.print("1 < 2");
    Lib.print("   >>   ");
    Lib.print(1 < 2);
    Lib.print("\n");
    // 小なりイコール
    Lib.print("2 <= 1");
    Lib.print("   >>   ");
    Lib.print(2 <= 1);
    Lib.print("\n");
    Lib.print("1 <= 1");
    Lib.print("   >>   ");
    Lib.print(1 <= 1);
    Lib.print("\n");
    Lib.print("1 <= 2");
    Lib.print("   >>   ");
    Lib.print(1 <= 2);
    Lib.print("\n");
    // 大なり
    Lib.print("2 > 1");
    Lib.print("   >>   ");
    Lib.print(2 > 1);
    Lib.print("\n");
    Lib.print("1 > 1");
    Lib.print("   >>   ");
    Lib.print(1 > 1);
    Lib.print("\n");
    Lib.print("1 > 2");
    Lib.print("   >>   ");
    Lib.print(1 > 2);
    Lib.print("\n");
    // 大なりイコール
    Lib.print("2 >= 1");
    Lib.print("   >>   ");
    Lib.print(2 >= 1);
    Lib.print("\n");
    Lib.print("1 >= 1");
    Lib.print("   >>   ");
    Lib.print(1 >= 1);
    Lib.print("\n");
    Lib.print("1 >= 2");
    Lib.print("   >>   ");
    Lib.print(1 >= 2);
    Lib.print("\n");
}
