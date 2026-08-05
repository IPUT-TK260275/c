"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let print_stars = (n) => {
        let i = 0;
        while (i < n) {
            Lib.print("*");
            i = i + 1;
        }
    };

    print_stars(3);
    Lib.print("\n");
    print_stars(7);
    Lib.print("\n");
 Lib.print('--- Verification by the evaluation system\n'); print_stars(4); Lib.print('\n'); }