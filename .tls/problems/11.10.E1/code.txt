"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let student = JSON.parse(Lib.input());
    Lib.print("---\n");
    Lib.print(student.math);
    Lib.print("\n");
}
