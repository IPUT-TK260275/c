"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let student = JSON.parse(Lib.input());
    let total = student.japanese + student.math + student.english;
    Lib.print("---\n");
    Lib.print(total);
    Lib.print("\n");
}
