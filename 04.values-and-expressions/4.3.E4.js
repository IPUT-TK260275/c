"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

let a = Lib.input();
let n = Number(Lib.input());
Lib.print("---\n");
Lib.print(Lib.charAt(a, n) + "\n");
