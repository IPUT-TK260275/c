"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

let a = Lib.input();
let len = Lib.length(a);
Lib.print("---\n");
Lib.print(Lib.charAt(a, 0) + "\n");
Lib.print(Lib.charAt(a, len - 1) + "\n");
