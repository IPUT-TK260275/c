"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

let a = Lib.input();
let len = Lib.length(a);
let mid = (len - 1) / 2;
Lib.print("---\n");
Lib.print(Lib.charAt(a, mid) + "\n");
