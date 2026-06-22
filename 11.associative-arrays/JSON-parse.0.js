"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    Lib.print("Enter an associative array: ");
    let a = JSON.parse(Lib.input());
    Lib.print("a: ");
    Lib.print(a);
    Lib.print("\n");
}
