"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let cost = (price, number) => {
        return price * number;
    };

    Lib.print(cost(160, 4));
    Lib.print("\n");
    Lib.print(cost(180, 6));
    Lib.print("\n");
 Lib.print('--- Verification by the evaluation system\n'); Lib.print(cost(140, 10)); Lib.print('\n'); }