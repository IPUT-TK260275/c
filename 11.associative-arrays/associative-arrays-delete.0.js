"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let a = {"name": "apple", "price": 180, "description": "Sweet!"};
    Lib.print("a: ");
    Lib.print(a);
    Lib.print(".\n");
    delete a["description"];
    Lib.print("a: ");
    Lib.print(a);
    Lib.print(".\n");
}
