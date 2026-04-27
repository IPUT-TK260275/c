"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 制御文字の例
{
    // 改行文字
    Lib.print("Hello, Future.\nGoodbye, Past.\n");
    Lib.print("\n");
    // タブ文字
    Lib.print("ID\tName\tGrade\tCourse\tDept\n240001\tAlice\t2\tAI\tIT\n250002\tBob\t1\t\tDE\n");
    Lib.print("\n");
    // バックスペース文字
    Lib.print("Ha\bello, Wae\b\borld!");
    Lib.print("\n");
}
