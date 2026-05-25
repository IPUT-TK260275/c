"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 変数のスコープ
{   // ブロックAの始まり
    let a = 2;   // この変数 a のスコープ（利用可能範囲）はブロックAの中
    {   // ブロックBの始まり
        let b = 3;   // この変数 b のスコープはブロックBの中
        Lib.print(b);   // ここでは変数 b を使える．変数 b のスコープ内
        Lib.print("\n");
        Lib.print(a);   // ここでは変数 a も使える．変数 a のスコープ内
        Lib.print("\n");
    }   // ブロックBの終わり．プログラムの実行がここに到達すると変数 b は消滅する
    Lib.print(a);   // ここでは変数 a を使える．変数 a のスコープ内
    Lib.print("\n");
    // Lib.print(b);   // ここでは変数 b を使えない．変数 b のスコープ外
    // Lib.print("\n");
    ////
    // 上の23,24行目のコードを uncomment して実行しようとすると次のエラーが出る：
    // ReferenceError: b is not defined 
    // これは23行目の印字文で変数 b が書かれているが，それはこのブロックで
    // 宣言されていない（未定義である）ため使えないことを意味している．
    ////
}   // ブロックAの終わり
