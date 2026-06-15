"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 整数が次々に入力されるので，それを配列に蓄積します．
// 入力の終わりを意味する整数0が入力されたら入力を終了します．
{
    let a = []; // 入力される整数を保持する配列
    let needsNext = true;
    while (needsNext) {
        let m = Number(Lib.input());
        if (m === 0) {
            needsNext = false;
        }
        else {
            Lib.push(a, m);
        }
    }
    Lib.print(a);
    Lib.print("\n");
}
