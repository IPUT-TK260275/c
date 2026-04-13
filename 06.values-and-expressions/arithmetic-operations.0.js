"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
/* 主な算術演算式の例 */
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

    // 参考： 整除算（余りを考える整数の割り算）の商の求め方
    // 整除で p 割る d の結果が q 余り r であるとき，
    // p = dq + r が成り立っている． q は商と呼ばれる．
    // 移項すると q = (p - r) / d となる．
    // この式が商を求める計算方法である．
    // 例えば 30 割る 7 の商を求めるときには 30 から 30 % 7 を引いた後に 7 で割る．
    Lib.print("(30 - 30 % 7) / 7");
    Lib.print("   >>   ");
    Lib.print((30 - 30 % 7) / 7);   // 30 割る 7 の商，つまり 4．
    Lib.print("\n");

    // 整除算（余りを考える整数の割り算）の商と余りのまとめ
    Lib.print("30 ÷ 7 = ");
    Lib.print((30 - 30 % 7) / 7);   // 30 割る 7 の商，つまり 4．
    Lib.print(" 余り ");
    Lib.print(30 % 7);   // 30 割る 7 の余り，つまり 2．
    Lib.print("\n");

    // 特殊な例： 正の数を 0 で割ると正の無限大 Infinity となる
    Lib.print("1 / 0");
    Lib.print("   >>   ");
    Lib.print(1 / 0);
    Lib.print("\n");

    // 特殊な例： 負の数を 0 で割ると負の無限大 -Infinity となる
    Lib.print("-2 / 0");
    Lib.print("   >>   ");
    Lib.print(-2 / 0);
    Lib.print("\n");

    // 特殊な例： 0 を 0 で割った値は考えられないので NaN （Not a Number） となる
    Lib.print("0 / 0");
    Lib.print("   >>   ");
    Lib.print(0 / 0);
    Lib.print("\n");

    /*?
     * （発展： 詳しく知りたい人向けのメモ）
     * Infinity も NaN も数値の一種ではあるので，加減乗除の算術演算を行うことができます．
     * これらの特殊な数値に算術演算を行うとどんな値になるのかを試してみましょう． 
     * 例えば Infinity - 1 や Infinity * (-2)，NaN / 3 はどんな値になるでしょうか？
    ?*/
}