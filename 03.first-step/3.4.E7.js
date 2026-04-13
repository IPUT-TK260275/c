"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input number 1: ");
    let n1 = Number(Lib.input());
    Lib.print("Input number 2: ");
    let n2 = Number(Lib.input());
    Lib.print("Input number 3: ");
    let n3 = Number(Lib.input());
    Lib.print("Input number 4: ");
    let n4 = Number(Lib.input());
    Lib.print("Input number 5: ");
    let n5 = Number(Lib.input());
    
    Lib.print("---\n");
    
    Lib.print((n1 + n2 + n3 + n4 + n5) / 5);
    Lib.print("\n");
}