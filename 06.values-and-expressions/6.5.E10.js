"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let second = Lib.input();
    let third = Lib.input();
    Lib.print("---\n");
    if (second === "N" && third === "N") {
        Lib.print("Newdays");
    }
    else if (second === "Y" && third === "Y") {
        Lib.print("Disney");
    }
    else {
        Lib.print("Saizeriya");
    }
    Lib.print("\n");
}
