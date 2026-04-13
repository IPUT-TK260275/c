"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input Your First Name: ");
    let first_name = Lib.input();   // 名を文字列として読み取る
    Lib.print("Input Your Last Name: ");
    let last_name = Lib.input();    // 姓を文字列として読み取る
    Lib.print("Hello, ");
    Lib.print(first_name);   // 名を印字する
    Lib.print(" ");
    Lib.print(last_name);    // 姓を印字する
    Lib.print("!\n");
}