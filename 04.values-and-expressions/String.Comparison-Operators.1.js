"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 文字列の比較演算式の例
{
    // 等しい
    Lib.print("\"apple\" === \"apple\"   >>   ");
    Lib.print("apple" === "apple");
    Lib.print("\n");
    Lib.print("\"apple\" === \"banana\"   >>   ");
    Lib.print("apple" === "banana");
    Lib.print("\n");
    // 等しくない
    Lib.print("\"apple\" !== \"apple\"   >>   ");
    Lib.print("apple" !== "apple");
    Lib.print("\n");
    Lib.print("\"apple\" !== \"banana\"   >>   ");
    Lib.print("apple" !== "banana");
    Lib.print("\n");
    // 小なり
    Lib.print("\"banana\" < \"apple\"   >>   ");
    Lib.print("banana" < "apple");
    Lib.print("\n");
    Lib.print("\"apple\" < \"apple\"   >>   ");
    Lib.print("apple" < "apple");
    Lib.print("\n");
    Lib.print("\"apple\" < \"banana\"   >>   ");
    Lib.print("apple" < "banana");
    Lib.print("\n");
    Lib.print("\"apple\" < \"application\"   >>   ");
    Lib.print("apple" < "application");
    Lib.print("\n");
    Lib.print("\"apple\" < \"app\"   >>   ");
    Lib.print("apple" < "app");
    Lib.print("\n");
    // 小なりイコール
    Lib.print("\"banana\" <= \"apple\"   >>   ");
    Lib.print("banana" <= "apple");
    Lib.print("\n");
    Lib.print("\"apple\" <= \"apple\"   >>   ");
    Lib.print("apple" <= "apple");
    Lib.print("\n");
    Lib.print("\"apple\" <= \"banana\"   >>   ");
    Lib.print("apple" <= "banana");
    Lib.print("\n");
    // 大なり
    Lib.print("\"banana\" > \"apple\"   >>   ");
    Lib.print("banana" > "apple");
    Lib.print("\n");
    Lib.print("\"apple\" > \"apple\"   >>   ");
    Lib.print("apple" > "apple");
    Lib.print("\n");
    Lib.print("\"apple\" > \"banana\"   >>   ");
    Lib.print("apple" > "banana");
    Lib.print("\n");
    Lib.print("\"apple\" > \"application\"   >>   ");
    Lib.print("apple" > "application");
    Lib.print("\n");
    Lib.print("\"apple\" > \"app\"   >>   ");
    Lib.print("apple" > "app");
    Lib.print("\n");
    // 大なりイコール
    Lib.print("\"banana\" >= \"apple\"   >>   ");
    Lib.print("banana" >= "apple");
    Lib.print("\n");
    Lib.print("\"apple\" >= \"apple\"   >>   ");
    Lib.print("apple" >= "apple");
    Lib.print("\n");
    Lib.print("\"apple\" >= \"banana\"   >>   ");
    Lib.print("apple" >= "banana");
    Lib.print("\n");
}
