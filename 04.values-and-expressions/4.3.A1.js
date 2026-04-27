"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

let a = Lib.input();
let atIndex = Lib.indexOf(a, "@", 0);
let atIndex2 = Lib.indexOf(a, "@", atIndex + 1);

// (1) アットマーク @ をちょうどひとつだけ含む -> atIndex !== -1 かつ atIndex2 === -1
let oneAt = (atIndex !== -1) && (atIndex2 === -1);
// (2) アットマークの位置は文字列 a の先頭ではない
let notFirst = (atIndex > 0);
// (3) アットマークの後の部分にピリオド . がひとつ以上含まれている
let dotIndexAfterAt = Lib.indexOf(a, ".", atIndex + 1);
let hasDot = (dotIndexAfterAt !== -1);

Lib.print("---\n");
Lib.print(oneAt && notFirst && hasDot);
Lib.print("\n");
