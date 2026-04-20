"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 算術演算式の例
{
    // 符号の反転
    Lib.print("-(1 + 2)");
    Lib.print("   >>   ");
    Lib.print(-(1 + 2));
    Lib.print("\n");
    // 加算
    Lib.print("1 + 2");
    Lib.print("   >>   ");
    Lib.print(1 + 2);
    Lib.print("\n");
    // 減算
    Lib.print("1 - 2");
    Lib.print("   >>   ");
    Lib.print(1 - 2);
    Lib.print("\n");
    // 乗算
    Lib.print("-4 * 5");
    Lib.print("   >>   ");
    Lib.print(-4 * 5);
    Lib.print("\n");
    // 除算
    Lib.print("-4 / 5");
    Lib.print("   >>   ");
    Lib.print(-4 / 5);
    Lib.print("\n");
    // 整除算（余りを考える整数の割り算）の余り
    Lib.print("30 % 7");
    Lib.print("   >>   ");
    Lib.print(30 % 7);   // 30 割る 7 の余り，つまり 2．
    Lib.print("\n");
    // 整除算の商
    // n を d で整除するときの商は (n - n % d) / d で求められる．
    Lib.print("(30 - 30 % 7) / 7");
    Lib.print("   >>   ");
    Lib.print((30 - 30 % 7) / 7);   // 30 割る 7 の商，つまり 4．
    Lib.print("\n");
    // 特殊な数値 Infinity： 正の数を 0 で割ると正の無限大 Infinity となる
    Lib.print("1 / 0");
    Lib.print("   >>   ");
    Lib.print(1 / 0);
    Lib.print("\n");
    // 特殊な数値 -Infinity： 負の数を 0 で割ると負の無限大 -Infinity となる
    Lib.print("-2 / 0");
    Lib.print("   >>   ");
    Lib.print(-2 / 0);
    Lib.print("\n");
    // 特殊な例 NaN： 0 を 0 で割った値は考えられないので NaN （Not a Number） となる
    Lib.print("0 / 0");
    Lib.print("   >>   ");
    Lib.print(0 / 0);
    Lib.print("\n");
}
