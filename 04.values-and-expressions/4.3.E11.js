"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

let a = Lib.input();
let p1 = Lib.indexOf(a, "(", 0);
let p2 = Lib.indexOf(a, ")", 0);
Lib.print("---\n");
Lib.print(Lib.slice(a, p1 + 1, p2) + "\n");
