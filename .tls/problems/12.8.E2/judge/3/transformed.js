"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let max = (a, b) => {
        if (a >= b) {
            return a;
        }
        return b;
    };

    Lib.print(max(2, 3));
    Lib.print("\n");
    Lib.print(max(2, 2));
    Lib.print("\n");
    Lib.print(max(-1, -5));
    Lib.print("\n");
 Lib.print('--- Verification by the evaluation system\n'); Lib.print(max(13, 11)); Lib.print('\n'); }