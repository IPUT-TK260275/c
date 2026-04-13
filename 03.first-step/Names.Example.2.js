"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    // !! 次の3行は各値に名前を付ける文です !!
    let hourly_wage = 1163; // 時給 1163 にhourly_wage という名前を付ける
    let hours_alice = 79;   // Aliceの労働時間 79 に hours_alice という名前を付ける
    let hours_bob = 182;    // Bobの労働時間 182 に hours_bob という名前を付ける

    let salary_alice = hourly_wage * hours_alice; // Aliceの賃金
    let salary_bob = hourly_wage * hours_bob;     // Bobの賃金
    let total_salary = salary_alice + salary_bob; // 賃金の合計

    // !! 以下では各値を名前で表しています !!

    Lib.print("Alice: ");
    Lib.print(salary_alice); // Aliceの賃金
    Lib.print(" yen\n");

    Lib.print("Bob: ");
    Lib.print(salary_bob);   // Bobの賃金
    Lib.print(" yen\n");

    Lib.print("---\n");

    Lib.print("Total: ");
    Lib.print(total_salary); // 賃金の合計
    Lib.print(" yen\n");
}