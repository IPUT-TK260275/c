"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let n = Number(Lib.input());
    let day = 1;
    let best_day = 1;
    let max_sum = -1;

    while (day <= n) {
        let line = Lib.input();
        let length_line = Lib.length(line);
        let i = 0;
        let hour = 1;
        let sum = 0;

        while (hour <= 24) {
            let j = Lib.indexOf(line, ",", i);
            if (j === -1) {
                j = length_line;
            }

            sum = sum + Number(Lib.slice(line, i, j));
            i = j + 1;
            hour = hour + 1;
        }

        if (sum > max_sum) {
            max_sum = sum;
            best_day = day;
        }
        day = day + 1;
    }

    Lib.print("---\n");
    Lib.print(best_day);
    Lib.print("\n");
}
