"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let a = {"name": "apple", "price": 180};
    let b = a;
    Lib.print("a: ");
    Lib.print(a);
    Lib.print("\n");
    Lib.print("b: ");
    Lib.print(b);
    Lib.print("\n");
    a["name"] = "peach";
    Lib.print("a[\"name\"] = \"peach\";\n");
    Lib.print("a: ");
    Lib.print(a);
    Lib.print("\n");
    Lib.print("b: ");
    Lib.print(b);
    Lib.print("\n");
}
