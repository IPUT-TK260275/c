"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let index_of = (ns, k) => {
        let i = 0;
        while (i < Lib.length(ns)) {
            if (ns[i] === k) {
                return i;
            }
            i = i + 1;
        }
        return -1;
    };

    Lib.print(index_of([1, 10, 100, 1000, 100, 10000], 100));
    Lib.print("\n");
    Lib.print(index_of([1, 10, 100, 1000], 2));
    Lib.print("\n");
    Lib.print(index_of([5, 5, 5], 5));
    Lib.print("\n");
 Lib.print('--- Verification by the evaluation system\n'); Lib.print(index_of([2, 3, 4], 3)); Lib.print('\n'); }