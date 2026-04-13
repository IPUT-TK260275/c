"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input the price of an apple: ");
    let a = Number(Lib.input());   
    Lib.print("Input the number of apples: ");
    let m = Number(Lib.input());   
    Lib.print("Input the price of a peach: ");
    let b = Number(Lib.input());   
    Lib.print("Input the number of peaches: ");
    let n = Number(Lib.input());   
    Lib.print("---\n");
    
    Lib.print((a * m + b * n) * 1.1);
    
    Lib.print("\n");
}