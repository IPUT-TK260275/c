"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let is_even = (n) => {
        return n % 2 === 0;
    };

    Lib.print(is_even(2));
    Lib.print("\n");
    Lib.print(is_even(3));
    Lib.print("\n");
    Lib.print(is_even(-4));
    Lib.print("\n");
 Lib.print('--- Verification by the evaluation system\n'); Lib.print(is_even(9)); Lib.print('\n'); }