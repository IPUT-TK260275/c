"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let is_prime = (n) => {
        if (n < 2) {
            return false;
        }
        let divisor = 2;
        while (divisor < n) {
            if (n % divisor === 0) {
                return false;
            }
            divisor = divisor + 1;
        }
        return true;
    };

    Lib.print(is_prime(1));
    Lib.print("\n");
    Lib.print(is_prime(2));
    Lib.print("\n");
    Lib.print(is_prime(13));
    Lib.print("\n");
    Lib.print(is_prime(14));
    Lib.print("\n");
    Lib.print(is_prime(97));
    Lib.print("\n");
}
