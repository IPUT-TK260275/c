"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let d = Number(Lib.input());
    Lib.print("---\n");
    if (d % 7 === 1) {
        Lib.print("Friday");
    }
    else if (d % 7 === 2) {
        Lib.print("Saturday");
    }
    else if (d % 7 === 3) {
        Lib.print("Sunday");
    }
    else if (d % 7 === 4) {
        Lib.print("Monday");
    }
    else if (d % 7 === 5) {
        Lib.print("Tuesday");
    }
    else if (d % 7 === 6) {
        Lib.print("Wednesday");
    }
    else {
        Lib.print("Thursday");
    }
    Lib.print("\n");
}
