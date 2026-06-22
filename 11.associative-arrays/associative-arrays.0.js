"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let a = {"name": "apple", "price": 180, "description": "Sweet!"};
    Lib.print("a is the associative array ");
    Lib.print(a);
    Lib.print(".\n");
    Lib.print("a[\"name\"]: ");
    Lib.print(a["name"]);
    Lib.print("\n");
    Lib.print("a[\"price\"]: ");
    Lib.print(a["price"]);
    Lib.print("\n");
    Lib.print("a[\"description\"]: ");
    Lib.print(a["description"]);
    Lib.print("\n");
}
