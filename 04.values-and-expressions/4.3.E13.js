"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

let a = Lib.input();
let p1 = Lib.slice(a, 0, 3);
let p2 = Lib.slice(a, 4, 8);
let p3 = Lib.slice(a, 9, 13);
Lib.print("---\n");
Lib.print(p1 + p2 + p3 + "\n");
