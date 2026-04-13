"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
/* 条件演算式の例 */
{
    // りんごの単価
    Lib.print("Input the price: ");
    let price = Number(Lib.input());

    // りんごの購入個数
    Lib.print("Input the number: ");
    let num = Number(Lib.input());

    // 代金総額
    let total = price * num;

    // 送料
    let shipping_fee = (total >= 3500 ? 0 : 460);

    Lib.print("Price: ");
    Lib.print(price);
    Lib.print("\n");     

    Lib.print("Number: ");
    Lib.print(num);
    Lib.print("\n");     

    Lib.print("Total (Excluding Shipping): ");
    Lib.print(total);
    Lib.print("\n");     

    Lib.print("Shipping Fee: ");
    Lib.print(shipping_fee);
    Lib.print("\n");     

    Lib.print("===");
    Lib.print("\n");
    
    Lib.print("Total (Including Shipping): ");
    Lib.print(total + shipping_fee);
    Lib.print("\n");
}