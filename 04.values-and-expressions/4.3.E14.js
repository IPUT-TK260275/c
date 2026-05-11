"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    Lib.print("---\n");
    let isTK = Lib.slice(a, 0, 2) === "TK";
    let b = Lib.slice(a, 2, 8);
    let isDig1 = Lib.charAt(b, 0) >= "0" && Lib.charAt(b, 0) <= "9";
    let isDig2 = Lib.charAt(b, 1) >= "0" && Lib.charAt(b, 1) <= "9";
    let isDig3 = Lib.charAt(b, 2) >= "0" && Lib.charAt(b, 2) <= "9";
    let isDig4 = Lib.charAt(b, 3) >= "0" && Lib.charAt(b, 3) <= "9";
    let isDig5 = Lib.charAt(b, 4) >= "0" && Lib.charAt(b, 4) <= "9";
    let isDig6 = Lib.charAt(b, 5) >= "0" && Lib.charAt(b, 5) <= "9";
    Lib.print(isTK && isDig1 && isDig2 && isDig3 && isDig4 && isDig5 && isDig6);
    Lib.print("\n");
}
