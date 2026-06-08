"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    let b = Number(Lib.input());
    Lib.print("---\n");

    let row = 1;
    while (row <= b) {
        let ch;
        if (row % 2 === 1) {
            ch = "O";
        }
        else {
            ch = "X";
        }

        let col = 1;
        while (col <= a) {
            Lib.print(ch);
            col = col + 1;
        }
        Lib.print("\n");
        row = row + 1;
    }
}
