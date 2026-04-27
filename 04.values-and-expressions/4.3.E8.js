"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

let a = Lib.input();
let len = Lib.length(a);
let first3 = Lib.slice(a, 0, 3);
let last4 = Lib.slice(a, len - 4, len);
Lib.print("---\n");
Lib.print(first3 + "-" + last4 + "\n");
