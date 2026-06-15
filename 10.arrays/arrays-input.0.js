"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 最初に整数nを入力します．
// その後n個の整数を入力して，それを配列に蓄積します．
{
    let n = Number(Lib.input());
    let a = []; // 入力される整数を保持する配列
    let cnt = 0;
    while (cnt < n) {
        let m = Number(Lib.input());
        Lib.push(a, m);
        cnt = cnt + 1;
    }
    Lib.print(a);
    Lib.print("\n");
}
