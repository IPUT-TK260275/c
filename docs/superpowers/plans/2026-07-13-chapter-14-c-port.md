# Chapter 14 C Port Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add C11 implementations of all 12 Chapter 14 C++ exercises with identical sample behavior.

**Architecture:** Each exercise is an independent C program with its own `main`. A shell integration test compiles one requested source or the complete set, sends sample input, and compares exact output.

**Tech Stack:** C11, C standard library, GCC, Bash

## Global Constraints

- Create `14.cpp/c/14.6.A1.c` and `14.cpp/c/14.6.E1.c` through `14.cpp/c/14.6.E11.c`.
- Use only C11 and the C standard library.
- Compile with `gcc -std=c11 -Wall -Wextra -Werror`.
- Preserve exact valid-input output from the corresponding C++ sources.
- Do not modify existing C++ sources or build files.
- Do not add validation or error output for invalid input.

---

### Task 1: Add the C sample test harness

**Files:**
- Create: `14.cpp/c/test-samples.sh`
- Test: `14.cpp/c/test-samples.sh`

**Interfaces:**
- Consumes: Optional source basename such as `14.6.A1.c`.
- Produces: Exit status 0 after exact compile-and-output success; nonzero on failure.

- [ ] **Step 1: Write the test harness**

Create a Bash script with `set -euo pipefail`, a temporary build directory, and this function:

```bash
run_case() {
    local source=$1 input=$2 expected=$3
    local requested=${4:-}
    [[ -z "$requested" || "$requested" == "$source" ]] || return 0
    local binary="$build_dir/${source%.c}"
    gcc -std=c11 -Wall -Wextra -Werror "$chapter_dir/$source" -o "$binary"
    actual=$(printf '%s' "$input" | "$binary")
    [[ "$actual" == "$expected" ]] || {
        printf 'FAILED: %s\nExpected:\n%s\nActual:\n%s\n' "$source" "$expected" "$actual" >&2
        exit 1
    }
}
```

Call it for the 12 cases already defined in `14.cpp/test-samples.sh`, changing each `.cpp` suffix to `.c`, and print `All chapter 14 C sample cases passed.` after success.

- [ ] **Step 2: Verify the first test fails because its source is absent**

Run: `bash 14.cpp/c/test-samples.sh 14.6.A1.c`

Expected: FAIL because `14.cpp/c/14.6.A1.c` does not exist.

### Task 2: Port A1 sorting

**Files:**
- Create: `14.cpp/c/14.6.A1.c`
- Test: `14.cpp/c/test-samples.sh`

**Interfaces:**
- Consumes: Three integers from standard input.
- Produces: `---` and the three integers in ascending order.

- [ ] **Step 1: Implement the minimal program**

```c
#include <stdio.h>

int main(void) {
    int values[3];
    scanf("%d%d%d", &values[0], &values[1], &values[2]);
    for (int i = 0; i < 2; ++i) {
        for (int j = i + 1; j < 3; ++j) {
            if (values[i] > values[j]) {
                int temporary = values[i];
                values[i] = values[j];
                values[j] = temporary;
            }
        }
    }
    printf("---\n%d %d %d\n", values[0], values[1], values[2]);
    return 0;
}
```

- [ ] **Step 2: Verify A1 passes**

Run: `bash 14.cpp/c/test-samples.sh 14.6.A1.c`

Expected: `All chapter 14 C sample cases passed.`

### Task 3: Port E1 through E5

**Files:**
- Create: `14.cpp/c/14.6.E1.c`
- Create: `14.cpp/c/14.6.E2.c`
- Create: `14.cpp/c/14.6.E3.c`
- Create: `14.cpp/c/14.6.E4.c`
- Create: `14.cpp/c/14.6.E5.c`
- Test: `14.cpp/c/test-samples.sh`

**Interfaces:**
- Consumes: The same lines and numbers as the corresponding C++ programs.
- Produces: The same formatted product totals, average, time split, and boolean results.

- [ ] **Step 1: For each E1-E5 source, run its test before creation**

Run `bash 14.cpp/c/test-samples.sh 14.6.EX.c` for X = 1 through 5.

Expected: Each invocation fails because its requested C source is absent.

- [ ] **Step 2: Implement E1**

Use `char first_name[256]`, `char second_name[256]`, `fgets`, and `strcspn(name, "\n")` to remove line endings. Read the four integers with `scanf`, consuming the newline before reading the second name. Calculate the two product totals as `int` and print the exact five output lines from the C++ source.

- [ ] **Step 3: Implement E2**

Read five `double` values in a `for` loop, accumulate them in `double total`, and print `printf("---\n%g\n", total / 5);`.

- [ ] **Step 4: Implement E3**

Read `int minutes` and print `minutes / 60` and `minutes % 60` on separate lines after `---`.

- [ ] **Step 5: Implement E4**

Read three integers and print `(a != b && b != c && a != c) ? "true" : "false"` after `---`.

- [ ] **Step 6: Implement E5**

Read absences and late arrivals and print `(absences + late_arrivals / 3 < 7) ? "true" : "false"` after `---`.

- [ ] **Step 7: Verify E1-E5 pass individually**

Run `bash 14.cpp/c/test-samples.sh 14.6.EX.c` for X = 1 through 5.

Expected: Every invocation prints `All chapter 14 C sample cases passed.`

### Task 4: Port E6 through E8 string exercises

**Files:**
- Create: `14.cpp/c/14.6.E6.c`
- Create: `14.cpp/c/14.6.E7.c`
- Create: `14.cpp/c/14.6.E8.c`
- Test: `14.cpp/c/test-samples.sh`

**Interfaces:**
- Consumes: One input line per program.
- Produces: Middle character, formatted postal code, or email-format boolean.

- [ ] **Step 1: Run the E6-E8 tests before source creation**

Run `bash 14.cpp/c/test-samples.sh 14.6.EX.c` for X = 6 through 8.

Expected: Each invocation fails because its requested source is absent.

- [ ] **Step 2: Implement E6**

Read `char text[1024]` with `fgets`, remove the trailing newline with `strcspn`, and print `text[strlen(text) / 2]` after `---`.

- [ ] **Step 3: Implement E7**

Read `char postal_code[256]`, remove the line ending, and print the first three characters followed by `-` and `postal_code + 3` using `printf("---\n%.3s-%s\n", postal_code, postal_code + 3);`.

- [ ] **Step 4: Implement E8**

Read `char address[1024]`, remove the line ending, locate the first `@` with `strchr`, require it not to be the first character, require `strchr(at + 1, '@') == NULL`, and require `strchr(at + 1, '.') != NULL`. Print the result as `true` or `false` after `---`.

- [ ] **Step 5: Verify E6-E8 pass individually**

Run `bash 14.cpp/c/test-samples.sh 14.6.EX.c` for X = 6 through 8.

Expected: Every invocation prints `All chapter 14 C sample cases passed.`

### Task 5: Port E9 through E11 loop exercises

**Files:**
- Create: `14.cpp/c/14.6.E9.c`
- Create: `14.cpp/c/14.6.E10.c`
- Create: `14.cpp/c/14.6.E11.c`
- Test: `14.cpp/c/test-samples.sh`

**Interfaces:**
- Consumes: One integer limit per program.
- Produces: Odd values, cumulative factorials, or comma-separated repeated row values.

- [ ] **Step 1: Run the E9-E11 tests before source creation**

Run `bash 14.cpp/c/test-samples.sh 14.6.EX.c` for X = 9 through 11.

Expected: Each invocation fails because its requested source is absent.

- [ ] **Step 2: Implement E9**

Read `int limit`, print `---`, and use `for (int value = 1; value <= limit; value += 2)` to print each odd number.

- [ ] **Step 3: Implement E10**

Read `int limit`, initialize `long long factorial = 1`, multiply it by each value from 1 through the limit, and print each cumulative value using `%lld` after `---`.

- [ ] **Step 4: Implement E11**

Read `int limit`, loop rows from 1 through the limit, loop columns from 1 through the current row, print a comma before columns after the first, and print the row number followed by a newline.

- [ ] **Step 5: Verify E9-E11 pass individually**

Run `bash 14.cpp/c/test-samples.sh 14.6.EX.c` for X = 9 through 11.

Expected: Every invocation prints `All chapter 14 C sample cases passed.`

### Task 6: Verify the complete C port

**Files:**
- Test: `14.cpp/c/test-samples.sh`
- Inspect: `14.cpp/c/*.c`

**Interfaces:**
- Consumes: All 12 completed sources.
- Produces: Fresh proof of warning-free compilation and exact sample behavior.

- [ ] **Step 1: Run all C sample tests**

Run: `bash 14.cpp/c/test-samples.sh`

Expected: `All chapter 14 C sample cases passed.` and exit status 0.

- [ ] **Step 2: Confirm the expected source surface**

Run: `find 14.cpp/c -maxdepth 1 -type f -printf '%f\n' | sort`

Expected: Twelve `.c` files plus `test-samples.sh`, with no compiled objects or binaries in the repository.

- [ ] **Step 3: Review only task-owned changes**

Run: `git status --short -- 14.cpp/c docs/superpowers`

Expected: Only the design, plan, 12 C sources, and C test script are new; unrelated existing changes remain untouched.
