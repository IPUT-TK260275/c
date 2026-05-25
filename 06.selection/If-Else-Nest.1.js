"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// if-else文の入れ子の例
{
    Lib.print("(probability?) ");
    let probability = Number(Lib.input());   // 降水確率
    let message;   // 印字する文字列を割り当てるための変数
    if (probability >= 20) {
        Lib.print("(Can you use a car? yes/no) ");
        let car_is_available = Lib.input();   // 自動車通勤の可否（yesかno）
        if (car_is_available === "yes") {
            message = "You don't need an umbrella if you use a car.";
        }
        else {
            message = "You need an umbrella.";
        }
    }
    else {
        message = "You don't need an umbrella.";
    }
    Lib.print(message);
    Lib.print("\n");
}
