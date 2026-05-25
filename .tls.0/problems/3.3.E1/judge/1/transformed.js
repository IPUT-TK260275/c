"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let price_apple = 180;
    let number_apples = 120;
    let price_orange = 120;
    let number_oranges = 160;
    let number_students = 80;

    let total_price = (price_apple * number_apples) + (price_orange * number_oranges);
    let price_per_student = total_price / number_students;

    Lib.print(price_per_student);
    Lib.print("\n");
}