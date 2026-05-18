# 05. ブロックと変数

この章のゴールは、変数の作り方、値の入れ方、値の使い方を分けて理解することです。

## 5.1 ブロック

ブロックは `{` と `}` で囲まれたまとまりです。

```js
{
    Lib.print("Hello");
    Lib.print("\n");
}
```

授業コードでは、処理をこのブロックの中に書きます。

```js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    // ここに書く
}
```

## 5.2 宣言、代入、参照

変数は3つの動きで読みます。

| code | 意味 |
| --- | --- |
| `let a;` | `a` という箱を作る |
| `a = 0;` | `a` に `0` を入れる |
| `Lib.print(a);` | `a` の中身を読む |

例:

```js
let a;
a = 0;
Lib.print(a);
Lib.print("\n");
```

対応ファイル:

| file | 内容 |
| --- | --- |
| `Variable-Declaration.Undefined.1.js` | 宣言直後の値 |
| `Variable-Aassignment.1.js` | 代入 |
| `Variables.1.js` | 宣言、代入、参照 |

## 5.3 初期化

宣言と代入を1行で書くこともできます。これを初期化と呼びます。

```js
let a = 0;
let b = 1;
let c = a + b;
```

読み方:

| code | 意味 |
| --- | --- |
| `let a = 0;` | `a` を作って、最初から `0` を入れる |
| `let c = a + b;` | `a + b` の結果を `c` に入れる |

対応ファイル:

| file | 内容 |
| --- | --- |
| `Variable-Initialization.1.js` | 初期化 |
| `Variables.2.js` | 変数を使った計算 |
| `variable-declaration.0.js` | 宣言の基本 |

## 5.4 更新

変数には新しい値を入れ直せます。

```js
let count = 0;
count = count + 1;
count = count + 1;
Lib.print(count);
Lib.print("\n");
```

出力:

```text
2
```

`count = count + 1;` は、今の `count` に `1` を足して、もう一度 `count` に入れる、という意味です。

## 5.5 スコープ

`let` で作った変数は、作ったブロックの中で使えます。

```js
{
    let a = 1;
    Lib.print(a);
    Lib.print("\n");
}
```

ブロックの外では使えません。

```js
{
    let a = 1;
}

// ここでは a は使えない
```

同じブロックで同じ名前を2回 `let` するのも避けます。

```js
// NG
let a = 1;
let a = 2;

// OK
let b = 1;
b = 2;
```
