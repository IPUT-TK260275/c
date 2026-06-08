"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let n = Number(Lib.input());
    let line = Lib.input();
    let length_line = Lib.length(line);
    let i = 0;
    let cnt = 1;
    let min = 1001;
    while (cnt <= n) {
        let j = Lib.indexOf(line, ",", i);
        if (j === -1) {
            j = length_line;
        }

        let value = Number(Lib.slice(line, i, j));
        if (cnt === 1 || value < min) {
            min = value;
        }

        i = j + 1;
        cnt = cnt + 1;
    }

    Lib.print("---\n");
    Lib.print(min);
    Lib.print("\n");
}
