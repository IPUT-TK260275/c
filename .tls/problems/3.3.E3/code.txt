"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let price_apple = 210;
    let price_orange = 100;
    let price_banana = 180;

    let a = price_apple * 3 + price_orange * 2;
    let b = price_orange * 1 + price_banana * 3;
    let c = price_apple * 5 + price_orange * 4 + price_banana * 3;

    Lib.print("Alice: ");
    Lib.print(a);
    Lib.print(" yen\n");

    Lib.print("Bob: ");
    Lib.print(b);
    Lib.print(" yen\n");

    Lib.print("Carol: ");
    Lib.print(c);
    Lib.print(" yen\n");
}