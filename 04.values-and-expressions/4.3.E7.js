"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

let a = Lib.input();
let len = Lib.length(a);
Lib.print("---\n");
Lib.print(Lib.slice(a, len - 4, len) + "\n");
