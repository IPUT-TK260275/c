"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
/* 算術演算式におけるかっこの省略と演算の優先順位 */
{
    // 左にかっこのついた加減算
    Lib.print("(1 - 2) + 3");
    Lib.print("   >>   ");
    Lib.print((1 - 2) + 3);
    Lib.print("\n");

    // 右にかっこのついた加減算
    Lib.print("1 - (2 + 3)");
    Lib.print("   >>   ");
    Lib.print(1 - (2 + 3));
    Lib.print("\n");

    // かっこなしで加減算が複数並ぶときは左側から計算される
    Lib.print("1 - 2 + 3");
    Lib.print("   >>   ");
    Lib.print(1 - 2 + 3);
    Lib.print("\n");

    // 左にかっこのついた乗除算
    Lib.print("(-4 / 5) * 10");
    Lib.print("   >>   ");
    Lib.print((-4 / 5) * 10);
    Lib.print("\n");

    // 右にかっこのついた乗除算
    Lib.print("-4 / (5 * 10)");
    Lib.print("   >>   ");
    Lib.print(-4 / (5 * 10));
    Lib.print("\n");

    // かっこなしで乗除算が複数並ぶときは左側から計算される
    Lib.print("-4 / 5 * 10");
    Lib.print("   >>   ");
    Lib.print(-4 / 5 * 10);
    Lib.print("\n");

    // 左にかっこのついた加算と乗算
    Lib.print("(1 + 2) * 3");
    Lib.print("   >>   ");
    Lib.print((1 + 2) * 3);
    Lib.print("\n");

    // 右にかっこのついた加算と乗算
    Lib.print("1 + (2 * 3)");
    Lib.print("   >>   ");
    Lib.print(1 + (2 * 3));
    Lib.print("\n");

    // かっこなしで加減算と乗除算が並ぶときは乗除算を先に計算する
    Lib.print("1 + 2 * 3");
    Lib.print("   >>   ");
    Lib.print(1 + 2 * 3);
    Lib.print("\n");
}