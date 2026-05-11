#!/bin/bash
DIR=/home/harnakam/c/04.values-and-expressions

cat << 'CODE' > $DIR/4.1.E1.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    let m = Number(Lib.input());
    let b = Number(Lib.input());
    let n = Number(Lib.input());
    Lib.print("---\n");
    Lib.print(5000 - (a * m + b * n));
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.1.E2.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    let b = Number(Lib.input());
    Lib.print("---\n");
    Lib.print(a % b);
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.1.E3.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    let b = Number(Lib.input());
    Lib.print("---\n");
    Lib.print(Math.floor(a / b));
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.1.E4.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    Lib.print("---\n");
    Lib.print(Math.floor(198 * a * 1.1));
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.1.E5.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    let b = Number(Lib.input());
    Lib.print("---\n");
    Lib.print(Math.abs(a - b));
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.1.E6.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    Lib.print("---\n");
    Lib.print(Math.sqrt(a / Math.PI));
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.1.E7.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    Lib.print("---\n");
    Lib.print(Math.floor(a / 60));
    Lib.print("\n");
    Lib.print(a % 60);
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.1.A1.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    Lib.print("---\n");
    Lib.print(Math.floor(a / 3600));
    Lib.print("\n");
    Lib.print(Math.floor((a % 3600) / 60));
    Lib.print("\n");
    Lib.print(a % 60);
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.2.E1.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    Lib.print("---\n");
    Lib.print(a < 0);
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.2.E2.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    Lib.print("---\n");
    Lib.print(a >= 100);
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.2.E3.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    let b = Number(Lib.input());
    Lib.print("---\n");
    Lib.print(a * a === b);
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.2.E4.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    let b = Number(Lib.input());
    Lib.print("---\n");
    Lib.print(a * a === b || b * b === a);
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.2.E5.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    let b = Number(Lib.input());
    Lib.print("---\n");
    Lib.print(Math.floor(a / b) === a % b);
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.2.E6.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    let b = Number(Lib.input());
    let c = Number(Lib.input());
    Lib.print("---\n");
    Lib.print(a !== b && b !== c && a !== c);
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.2.E7.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    let n = Number(Lib.input());
    Lib.print("---\n");
    Lib.print(a * n > 2000);
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.2.E8.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    let m = Number(Lib.input());
    let b = Number(Lib.input());
    let n = Number(Lib.input());
    Lib.print("---\n");
    Lib.print(a * m + b * n <= 500 && m + n <= 10);
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.2.E9.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let m = Number(Lib.input());
    let n = Number(Lib.input());
    Lib.print("---\n");
    Lib.print((12 * m) % n === 0);
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.2.E10.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let d = Number(Lib.input());
    Lib.print("---\n");
    let rem = d % 7;
    Lib.print(rem === 4 || rem === 5);
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.2.A1.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    let b = Number(Lib.input());
    let c = Number(Lib.input());
    Lib.print("---\n");
    Lib.print(a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a);
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.2.A2.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    let b = Number(Lib.input());
    Lib.print("---\n");
    let absences = a + Math.floor(b / 3);
    Lib.print(absences < 7);
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.3.E1.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    let b = Lib.input();
    Lib.print("---\n");
    Lib.print(a + b);
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.3.E2.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    let b = Lib.input();
    let c = Lib.input();
    Lib.print("---\n");
    Lib.print(a + b === c);
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.3.E3.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    Lib.print("---\n");
    Lib.print(a === "IT" || a === "DE");
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.3.E4.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    let n = Number(Lib.input());
    Lib.print("---\n");
    Lib.print(Lib.charAt(a, n));
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.3.E5.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    Lib.print("---\n");
    Lib.print(Lib.charAt(a, 0));
    Lib.print("\n");
    Lib.print(Lib.charAt(a, Lib.length(a) - 1));
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.3.E6.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    Lib.print("---\n");
    Lib.print(Lib.charAt(a, Math.floor(Lib.length(a) / 2)));
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.3.E7.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    Lib.print("---\n");
    Lib.print(Lib.slice(a, 3, 7));
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.3.E8.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    Lib.print("---\n");
    Lib.print(Lib.slice(a, 0, 3) + "-" + Lib.slice(a, 3, 7));
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.3.E9.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    Lib.print("---\n");
    let half = Math.floor(Lib.length(a) / 2);
    Lib.print(Lib.slice(a, 0, half) === Lib.slice(a, half, Lib.length(a)));
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.3.E10.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    Lib.print("---\n");
    let idx1 = Lib.indexOf(a, "(", 0);
    let idx2 = Lib.indexOf(a, ")", idx1);
    Lib.print(idx1);
    Lib.print("\n");
    Lib.print(idx2);
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.3.E11.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    Lib.print("---\n");
    let idx1 = Lib.indexOf(a, "(", 0);
    let idx2 = Lib.indexOf(a, ")", idx1);
    Lib.print(Lib.slice(a, idx1 + 1, idx2));
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.3.E12.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    Lib.print("---\n");
    let idx1 = Lib.indexOf(a, "/*", 0);
    let idx2 = Lib.indexOf(a, "*/", idx1);
    Lib.print(Lib.slice(a, idx1, idx2 + 2));
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.3.E13.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    Lib.print("---\n");
    Lib.print(Lib.slice(a, 0, 3) + Lib.slice(a, 4, 8) + Lib.slice(a, 9, 13));
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.3.E14.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    Lib.print("---\n");
    let isTK = Lib.slice(a, 0, 2) === "TK";
    let b = Lib.slice(a, 2, 8);
    let isDig1 = Lib.charAt(b, 0) >= "0" && Lib.charAt(b, 0) <= "9";
    let isDig2 = Lib.charAt(b, 1) >= "0" && Lib.charAt(b, 1) <= "9";
    let isDig3 = Lib.charAt(b, 2) >= "0" && Lib.charAt(b, 2) <= "9";
    let isDig4 = Lib.charAt(b, 3) >= "0" && Lib.charAt(b, 3) <= "9";
    let isDig5 = Lib.charAt(b, 4) >= "0" && Lib.charAt(b, 4) <= "9";
    let isDig6 = Lib.charAt(b, 5) >= "0" && Lib.charAt(b, 5) <= "9";
    Lib.print(isTK && isDig1 && isDig2 && isDig3 && isDig4 && isDig5 && isDig6);
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.3.A1.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    Lib.print("---\n");
    let atIdx = Lib.indexOf(a, "@", 0);
    let afterAt = Lib.slice(a, atIdx + 1, Lib.length(a));
    Lib.print(atIdx > 0 && Lib.indexOf(afterAt, "@", 0) === -1 && Lib.indexOf(afterAt, ".", 0) !== -1);
    Lib.print("\n");
}
CODE

cat << 'CODE' > $DIR/4.3.A2.js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    Lib.print("---\n");
    let comma1 = Lib.indexOf(a, ",", 0);
    let comma2 = Lib.indexOf(a, ",", comma1 + 1);
    Lib.print(Lib.slice(a, 0, comma1));
    Lib.print("\n");
    Lib.print(Lib.slice(a, comma1 + 1, comma2));
    Lib.print("\n");
    Lib.print(Lib.slice(a, comma2 + 1, Lib.length(a)));
    Lib.print("\n");
}
CODE

bash /home/harnakam/c/04.values-and-expressions/solve_all.sh
