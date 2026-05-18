"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    let b = Number(Lib.input());
    let counted_absences = a;
    Lib.print("---\n");
    if (b >= 3) {
        counted_absences = counted_absences + (b - b % 3) / 3;
    }
    if (counted_absences > 6) {
        Lib.print("OUT");
    }
    else {
        Lib.print((6 - counted_absences) * 3 + (2 - b % 3));
    }
    Lib.print("\n");
}
