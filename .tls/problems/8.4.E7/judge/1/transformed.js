"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    let b = Number(Lib.input());
    Lib.print("---\n");

    let row = 1;
    while (row <= b) {
        let col = 1;
        while (col <= a) {
            if (col % 2 === 1) {
                Lib.print("O");
            }
            else {
                Lib.print("X");
            }
            col = col + 1;
        }
        Lib.print("\n");
        row = row + 1;
    }
}
