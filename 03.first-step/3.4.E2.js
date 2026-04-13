"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input the first name: ");
    let a = Lib.input();   
    Lib.print("Input the last name: ");
    let b = Lib.input();   
    Lib.print("---\n");

    Lib.print("Hello, ");
    Lib.print(b);
    Lib.print(" sensei.\n");
    
    Lib.print("Can I call you ");
    Lib.print(a);
    Lib.print("?\n");
}