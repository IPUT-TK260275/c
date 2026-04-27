"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

let a = Lib.input();
let isTK = Lib.slice(a, 0, 2) === "TK";
let n_str = Lib.slice(a, 2, 8);

let c0 = Lib.charAt(n_str, 0);
let c1 = Lib.charAt(n_str, 1);
let c2 = Lib.charAt(n_str, 2);
let c3 = Lib.charAt(n_str, 3);
let c4 = Lib.charAt(n_str, 4);
let c5 = Lib.charAt(n_str, 5);

let isNum = (c0 >= "0" && c0 <= "9") &&
            (c1 >= "0" && c1 <= "9") &&
            (c2 >= "0" && c2 <= "9") &&
            (c3 >= "0" && c3 <= "9") &&
            (c4 >= "0" && c4 <= "9") &&
            (c5 >= "0" && c5 <= "9");

Lib.print("---\n");
Lib.print(isTK && isNum);
Lib.print("\n");
