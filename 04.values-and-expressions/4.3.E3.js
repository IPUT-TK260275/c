"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

let a = Lib.input();
Lib.print("---\n");
Lib.print(a === "IT" || a === "DE");
Lib.print("\n");
