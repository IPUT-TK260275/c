"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

let a = Lib.input();
let c1 = Lib.indexOf(a, ",", 0);
let c2 = Lib.indexOf(a, ",", c1 + 1);
let len = Lib.length(a);

let p1 = Lib.slice(a, 0, c1);
let p2 = Lib.slice(a, c1 + 1, c2);
let p3 = Lib.slice(a, c2 + 1, len);

Lib.print("---\n");
Lib.print(p1 + "\n");
Lib.print(p2 + "\n");
Lib.print(p3 + "\n");
