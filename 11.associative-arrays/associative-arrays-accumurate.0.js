"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    Lib.print("Enter an array of color names (in JSON): ");
    let replies = JSON.parse(Lib.input());
    let color_to_num = {};
    let i = 0;
    let len_replies = Lib.length(replies);
    while (i < len_replies) {
        let color = replies[i];
        if (!Object.hasOwn(color_to_num, color)) {
            color_to_num[color] = 0;
        }
        color_to_num[color] = color_to_num[color] + 1;
        i = i + 1;
    }

    let colors = Object.keys(color_to_num);
    let len_colors = Lib.length(colors);
    let max_num = -1;
    let colors_of_max_num = [];
    let j = 0;
    while (j < len_colors) {
        let color = colors[j];
        let num = color_to_num[color];
        if (num > max_num) {
            max_num = num;
            colors_of_max_num = [color];
        } else if (num === max_num) {
            Lib.push(colors_of_max_num, color);
        }
        j = j + 1;
    }

    Lib.print("The Most Loved Color(s): ");
    let k = 0;
    let len_colors_of_max_num = Lib.length(colors_of_max_num);
    while (k < len_colors_of_max_num) {
        if (k !== 0) {
            Lib.print(", ");
        }
        Lib.print(colors_of_max_num[k]);
        k = k + 1;
    }
    Lib.print("\n");
    Lib.print("===\n");
    Lib.print(color_to_num);
    Lib.print("\n");
}
