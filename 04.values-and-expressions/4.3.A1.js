"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    Lib.print("---\n");
    let initAt = Lib.indexOf(a, "@", 0);
    let restAt = Lib.indexOf(a, "@", initAt + 1);
    let cond1 = initAt !== -1 && restAt === -1;
    let cond2 = initAt > 0;
    let cond3 = Lib.indexOf(a, ".", initAt + 1) !== -1;
    Lib.print( cond1 && cond2 && cond3 );
    Lib.print("\n");
}
