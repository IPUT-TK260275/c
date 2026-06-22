"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let a = {"name": "apple", "price": 180, "description": "Sweet!"};
    Lib.print("a: ");
    Lib.print(a);
    Lib.print(".\n");
    let keys = Object.keys(a);
    Lib.print("keys: ");
    Lib.print(keys);
    Lib.print("\n");
    let len_keys = Lib.length(keys);
    let i = 0;
    while (i < len_keys) {
        let key = keys[i];
        let value = a[key];
        Lib.print("a[\"");
        Lib.print(key);
        Lib.print("\"]: ");
        Lib.print(value);
        Lib.print("\n");
        i = i + 1;
    }
}
