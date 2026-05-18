"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let year = Number(Lib.input());
    let month = Number(Lib.input());
    let days;
    Lib.print("---\n");
    if (month === 2) {
        if (year % 400 === 0) {
            days = 29;
        }
        else if (year % 100 === 0) {
            days = 28;
        }
        else if (year % 4 === 0) {
            days = 29;
        }
        else {
            days = 28;
        }
    }
    else if (month === 4 || month === 6 || month === 9 || month === 11) {
        days = 30;
    }
    else {
        days = 31;
    }
    Lib.print(days);
    Lib.print("\n");
}
