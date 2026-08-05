"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let scale = (ns, k) => {
        let result = [];
        let i = 0;
        while (i < Lib.length(ns)) {
            Lib.push(result, ns[i] * k);
            i = i + 1;
        }
        return result;
    };

    Lib.print(scale([0, 1, 2, 3], 10));
    Lib.print("\n");
    Lib.print(scale([1, 0, -3], -2));
    Lib.print("\n");
 Lib.print('--- Verification by the evaluation system\n'); Lib.print(scale([7], 8)); Lib.print('\n'); }