"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let students = JSON.parse(Lib.input());
    let max_total = -1;
    let i = 0;
    while (i < Lib.length(students)) {
        let student = students[i];
        let total = student.japanese + student.math + student.english;
        if (total > max_total) {
            max_total = total;
        }
        i = i + 1;
    }

    Lib.print("---\n");
    let j = 0;
    while (j < Lib.length(students)) {
        let student = students[j];
        let total = student.japanese + student.math + student.english;
        if (total === max_total) {
            Lib.print(student.student_id);
            Lib.print("\n");
        }
        j = j + 1;
    }
}
