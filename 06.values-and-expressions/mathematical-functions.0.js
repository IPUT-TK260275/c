"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
/* 主な数学関数 */
{
    // 絶対値を返す関数 Math.abs
    Lib.print("Math.abs(-3)");
    Lib.print("   >>   ");
    Lib.print(Math.abs(-3));   // -3 の絶対値 3 が印字される
    Lib.print("\n");

    // ルート（非負の平方根： square root） を返す関数 Math.sqrt
    // ルート2
    Lib.print("Math.sqrt(2)");
    Lib.print("   >>   ");
    Lib.print(Math.sqrt(2));
    Lib.print("\n");
    // ルート-2 （存在しない）を得ようとすると結果は NaN になる．
    Lib.print("Math.sqrt(-2)");
    Lib.print("   >>   ");
    Lib.print(Math.sqrt(-2));
    Lib.print("\n");

    // 累乗 (power) を返す関数 Math.pow
    // Math.pow(x, y) は x の y 乗を表す．
    Lib.print("Math.pow(2, 3)");
    Lib.print("   >>   ");
    Lib.print(Math.pow(2, 3));
    Lib.print("\n");

    // 小数点以下切り捨て関数 Math.floor
    // Math.floor(x) は，x 以下の整数のうち最大のものを表す．
    Lib.print("Math.floor(3.14)");
    Lib.print("   >>   ");
    Lib.print(Math.floor(3.14));
    Lib.print("\n");
    Lib.print("Math.floor(-3.14)");
    Lib.print("   >>   ");
    Lib.print(Math.floor(-3.14));
    Lib.print("\n");

    // 小数点以下切り上げ関数 Math.ceil
    // Math.ceil(x) は，x 以上の整数のうち最小のものを表す．
    Lib.print("Math.ceil(3.14)");
    Lib.print("   >>   ");
    Lib.print(Math.ceil(3.14));
    Lib.print("\n");
    Lib.print("Math.ceil(-3.14)");
    Lib.print("   >>   ");
    Lib.print(Math.ceil(-3.14));
    Lib.print("\n");

    // （発展） 三角関数 Math.sin, Math.cos, Math.tan と円周率を表す Math.PI
    Lib.print("Math.PI");
    Lib.print("   >>   ");
    Lib.print(Math.PI);
    Lib.print("\n");
    Lib.print("Math.sin(Math.PI / 6)");
    Lib.print("   >>   ");
    Lib.print(Math.sin(Math.PI / 6));
    Lib.print("\n");
    Lib.print("Math.cos(Math.PI * 5 / 6)");
    Lib.print("   >>   ");
    Lib.print(Math.cos(Math.PI * 5 / 6));
    Lib.print("\n");
    Lib.print("Math.tan(Math.PI / 4))");
    Lib.print("   >>   ");
    Lib.print(Math.tan(Math.PI / 4));
    Lib.print("\n");

    // （発展） 対数関数 Math.log と自然対数の底（e）を表す Math.E
    Lib.print("Math.E");
    Lib.print("   >>   ");
    Lib.print(Math.E);
    Lib.print("\n");
    Lib.print("Math.log(Math.E * Math.E)");
    Lib.print("   >>   ");
    Lib.print(Math.log(Math.E * Math.E));
    Lib.print("\n");
}