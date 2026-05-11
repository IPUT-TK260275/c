"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 識別子
{
    // 英数字とアンダースコアは識別子に使える
    let name_0 = "Alice";       // 名前
    let hourly_wage_0 = 1200;   // 時給
    let hours_0 = 50;           // 勤務時間
    let salary_0 = hourly_wage_0 * hours_0;   // 給与
    Lib.print(name_0);
    Lib.print(": ");
    Lib.print(salary_0);
    Lib.print(" yen\n");
    // 実は日本語も識別子に使える．
    let 名前1 = "Bob";
    let 時給1 = 1250;
    let 勤務時間1 = 100;
    let 給与1 = 時給1 * 勤務時間1;
    Lib.print(名前1);
    Lib.print(": ");
    Lib.print(給与1);
    Lib.print(" yen\n");
}