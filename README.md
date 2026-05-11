# Syntax Notes 03-05

## 03. Programming Basics

### Program Template

```
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    // statements
}
```

### Print a Value

```
Lib.print(expression);
```

Example:

```
Lib.print(13);
Lib.print("Hello");
Lib.print(1 + 2);
Lib.print("\n");
```

### Number Literals

```
1
-23
4.56
```

### Arithmetic Expressions

```
expression1 + expression2
expression1 - expression2
expression1 * expression2
expression1 / expression2
(expression)
```

Example:

```
Lib.print((2 + 3) * 7);
Lib.print("\n");
```

### String Literals

```
"string"
"Hello"
"This apple is mine."
```

### New Line Character

```
"\n"
```

Example:

```
Lib.print("Hello,\nAlice!\n");
```

### Multiple Statements

```
{
    statement1
    statement2
    statement3
}
```

Example:

```
{
    Lib.print("Alice: ");
    Lib.print(1163 * 79);
    Lib.print(" yen\n");
}
```

### Name a Value

```
let name = expression;
```

Example:

```
let hourly_wage = 1163;
let hours_alice = 79;
let salary_alice = hourly_wage * hours_alice;
```

### Read a String Input

```
let name = Lib.input();
```

Example:

```
Lib.print("Input Your Name: ");
let name = Lib.input();

Lib.print("Hello, ");
Lib.print(name);
Lib.print("!\n");
```

### Read a Number Input

```
let name = Number(Lib.input());
```

Example:

```
let x = Number(Lib.input());
let y = Number(Lib.input());

Lib.print(x + y);
Lib.print("\n");
```

### Comments

```
/* comment */
```

```
 // comment
```

Example:

```
Lib.print(13); // print 13
```

---

## 04. Values and Expressions

### Special Number Values

```
Infinity
NaN
```

### Boolean Literals

```
true
false
```

### Arithmetic Operators

```
-expression
expression1 + expression2
expression1 - expression2
expression1 * expression2
expression1 / expression2
expression1 % expression2
```

Example:

```
Lib.print(30 % 7);
Lib.print("\n");
```

### Integer Quotient

```
(n - n % d) / d
```

Example:

```
Lib.print((30 - 30 % 7) / 7);
Lib.print("\n");
```

### Function Application

```
functionName(expression1, expression2, ...)
```

Example:

```
Math.abs(-3)
Math.sqrt(2)
Math.pow(2, 3)
Math.floor(3.14)
Math.ceil(3.14)
```

### Math Functions and Constants

```
Math.abs(x)
Math.sqrt(x)
Math.pow(x, y)
Math.floor(x)
Math.ceil(x)

Math.sin(x)
Math.cos(x)
Math.tan(x)
Math.log(x)

Math.PI
Math.E
```

Example:

```
Lib.print(Math.sqrt(2));
Lib.print("\n");

Lib.print(Math.pow(2, 3));
Lib.print("\n");
```

### Logical Operators

```
!expression
expression1 && expression2
expression1 || expression2
```

Example:

```
Lib.print(!false);
Lib.print("\n");

Lib.print(true && false);
Lib.print("\n");

Lib.print(true || false);
Lib.print("\n");
```

### Comparison Operators

```
expression1 === expression2
expression1 !== expression2
expression1 < expression2
expression1 <= expression2
expression1 > expression2
expression1 >= expression2
```

Example:

```
Lib.print(1 + 2 === 3);
Lib.print("\n");

Lib.print(10 >= 3);
Lib.print("\n");
```

### Do Not Chain Comparisons

Bad:

```
a < b < c
```

Good:

```
(a < b) && (b < c)
```

### String Literals

```
"string"
""
```

Example:

```
"Hello"
"This apple is mine."
```

### Escape Sequences

```
"\n"
"\""
"\\"
"\t"
"\b"
```

Example:

```
Lib.print("Hello,\nAlice!\n");
Lib.print("He said \"yes.\"\n");
Lib.print("\\(^o^)/\n");
```

### String Concatenation

```
string1 + string2
```

Example:

```
Lib.print("Hello, " + "Alice" + "!\n");
```

### String Length

```
Lib.length(string)
```

Example:

```
Lib.print(Lib.length("Hello"));
Lib.print("\n");
```

### Character at Index

```
Lib.charAt(string, index)
```

Example:

```
Lib.print(Lib.charAt("abcde", 0));
Lib.print("\n");
```

### Slice a String

```
Lib.slice(string, i, j)
```

Example:

```
Lib.print(Lib.slice("abcde", 1, 3));
Lib.print("\n");
```

### Find a String

```
Lib.indexOf(string, searchString, startIndex)
```

Example:

```
Lib.print(Lib.indexOf("pen-pineapple-apple-pen", "apple", 0));
Lib.print("\n");
```

---

## 05. Blocks and Variables

### Block Statement

```
{
    statement1
    statement2
    statement3
}
```

Example:

```
{
    Lib.print("I ");
    Lib.print("am ");
    Lib.print("studying ");
    Lib.print("programming!\n");
}
```

### Nested Blocks

```
{
    statement1
    {
        statement2
        statement3
    }
    statement4
}
```

Example:

```
{
    Lib.print("Hello ");
    {
        Lib.print("Alice");
    }
    Lib.print("!\n");
}
```

### Variable Declaration

```
let identifier;
```

Example:

```
let a;
let name;
let price_apple;
```

### Undefined Value

```
undefined
```

Example:

```
let a;
Lib.print(a);
Lib.print("\n");
```

### Assignment Statement

```
identifier = expression;
```

Example:

```
a = 1;
name = "Alice";
price = 180;
```

### Variable Reference

```
identifier
```

Example:

```
Lib.print(a);
Lib.print(name);
Lib.print("\n");
```

### Variable Update

```
identifier = newExpression;
```

Example:

```
a = 1;
a = 2;
a = 3;
```

### Increase by One

```
a = a + 1;
```

Example:

```
let a = 0;

a = a + 1;
Lib.print(a);
Lib.print("\n");
```

### Variable Initialization

```
let identifier = expression;
```

Example:

```
let a = 0;
let b = 1;
let c = a + b;
let name = "Alice";
```

### Input with Initialization

```
let name = Lib.input();
let number = Number(Lib.input());
```

Example:

```
let name = Lib.input();
let age = Number(Lib.input());

Lib.print(name);
Lib.print(": ");
Lib.print(age);
Lib.print("\n");
```

### Scope

Variables declared with `let` can be used inside the block where they are declared.

Example:

```
{
    let a = 1;
    Lib.print(a);
    Lib.print("\n");
}
```

Bad:

```
{
    let a = 1;
}

Lib.print(a);
```

### Duplicate Declaration

Bad:

```
{
    let a = 1;
    let a = 2;
}
```

Good:

```
{
    let a = 1;
    a = 2;
}
```

---

## Quick Reference

```
Lib.print(expression);

let name = expression;
let name = Lib.input();
let name = Number(Lib.input());

Infinity
NaN
true
false

-expression
expression1 + expression2
expression1 - expression2
expression1 * expression2
expression1 / expression2
expression1 % expression2

functionName(expression1, expression2, ...)

!expression
expression1 && expression2
expression1 || expression2

expression1 === expression2
expression1 !== expression2
expression1 < expression2
expression1 <= expression2
expression1 > expression2
expression1 >= expression2

"string"
"\n"
"\""
"\\"

string1 + string2

Lib.length(string)
Lib.charAt(string, index)
Lib.slice(string, i, j)
Lib.indexOf(string, searchString, startIndex)

{
    statement1
    statement2
}

let identifier;
identifier = expression;
identifier
let identifier = expression;

undefined

a = a + 1;
```