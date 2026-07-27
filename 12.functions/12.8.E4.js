"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let mean = (ns) => {
        let sum = 0;
        let i = 0;
        while (i < Lib.length(ns)) {
            sum = sum + ns[i];
            i = i + 1;
        }
        return sum / Lib.length(ns);
    };

    Lib.print(mean([2, 3, 5, 7, 8]));
    Lib.print("\n");
    Lib.print(mean([2, 3]));
    Lib.print("\n");
    Lib.print(mean([10]));
    Lib.print("\n");
}
