"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 論理演算式の例
{
    // 否定 (NOT: 真偽の反転)
    Lib.print("!false");
    Lib.print("   >>   ");
    Lib.print(!false);
    Lib.print("\n");
    Lib.print("!true");
    Lib.print("   >>   ");
    Lib.print(!true);
    Lib.print("\n");
    // 連言 (AND: true を返すのは true && true のみ)
    Lib.print("false && false");
    Lib.print("   >>   ");
    Lib.print(false && false);
    Lib.print("\n");
    Lib.print("false && true");
    Lib.print("   >>   ");
    Lib.print(false && true);
    Lib.print("\n");
    Lib.print("true && false");
    Lib.print("   >>   ");
    Lib.print(true && false);
    Lib.print("\n");
    Lib.print("true && true");
    Lib.print("   >>   ");
    Lib.print(true && true);
    Lib.print("\n");
    // 選言 (OR: false を返すのは false || false のみ)
    Lib.print("false || false");
    Lib.print("   >>   ");
    Lib.print(false || false);
    Lib.print("\n");
    Lib.print("false || true");
    Lib.print("   >>   ");
    Lib.print(false || true);
    Lib.print("\n");
    Lib.print("true || false");
    Lib.print("   >>   ");
    Lib.print(true || false);
    Lib.print("\n");
    Lib.print("true || true");
    Lib.print("   >>   ");
    Lib.print(true || true);
    Lib.print("\n");
}
