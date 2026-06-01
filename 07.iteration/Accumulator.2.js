"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    let h = Lib.length(a);
    let cnt = 0;
    let num = 0;
    while (cnt < h) {
        if (Lib.charAt(a, cnt) === ",") {
            num = num + 1;
        }
        cnt = cnt + 1;
    }
    Lib.print(num);
    Lib.print("\n");
}
