"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let name = Lib.input();
    Lib.print("---\n");
    if (name === "USJ") {
        Lib.print("Universal Studio Japan");
    }
    else if (name === "TDL") {
        Lib.print("Tokyo Disney Land");
    }
    else if (name === "TDS") {
        Lib.print("Tokyo Disney Sea");
    }
    else if (name === "TDM") {
        Lib.print("Tokyo Doitsu Mura");
    }
    else {
        Lib.print("UNKNOWN");
    }
    Lib.print("\n");
}
