"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let a = {"name": "apple", "price": 180, "description": "Sweet!"};
    Lib.print("a: ");
    Lib.print(a);
    Lib.print(".\n");
    a["name"] = "coffee";
    Lib.print("a[\"coffee\"] updated.\n");
    Lib.print(a);
    Lib.print(".\n");
    a["price"] = 900;
    Lib.print("a[\"price\"] updated.\n");
    Lib.print(a);
    Lib.print(".\n");
    a["from"] = "Colombia";
    Lib.print("a[\"from\"] added.\n");
    Lib.print(a);
    Lib.print(".\n");
}
