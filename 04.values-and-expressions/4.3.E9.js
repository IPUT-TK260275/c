"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

let a = Lib.input();
let len = Lib.length(a);
let half = len / 2;
let s1 = Lib.slice(a, 0, half);
let s2 = Lib.slice(a, half, len);
Lib.print("---\n");
Lib.print(s1 === s2);
Lib.print("\n");
