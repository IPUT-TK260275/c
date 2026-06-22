"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let students = JSON.parse(Lib.input());
    let sum = 0;
    let i = 0;
    while (i < Lib.length(students)) {
        sum = sum + students[i].math;
        i = i + 1;
    }
    Lib.print("---\n");
    Lib.print(sum / Lib.length(students));
    Lib.print("\n");
}
