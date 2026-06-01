"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let cnt = 100;
    while (cnt <= 108) {
        let div3 = (cnt % 3 === 0);
        let div4 = (cnt % 4 === 0);
        if (div3 || div4) {
            Lib.print(cnt);
            Lib.print("\n");
        }
        cnt = cnt + 1;
    }
}
