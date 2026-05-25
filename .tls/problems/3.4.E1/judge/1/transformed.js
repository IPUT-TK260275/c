"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input the price: ");
    let a = Number(Lib.input());   
    Lib.print("Input the number: ");
    let m = Number(Lib.input());   
    Lib.print("---\n");
    
    Lib.print(a * m);
    
    Lib.print("\n");
}