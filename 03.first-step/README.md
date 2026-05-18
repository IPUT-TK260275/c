# 03. はじめの一歩

この章のゴールは、値を作り、画面に出し、入力を使うことです。

## 全問を解くための型

03章は「指定された形で出力する」問題が中心です。

まず、出力例を行ごとに分解します。

```text
---
300
```

この出力なら、コードはだいたいこうなります。

```js
Lib.print("---\n");
Lib.print(300);
Lib.print("\n");
```

複数の値を1行に出すときは、必要な空白だけ出します。

```js
Lib.print(a);
Lib.print(" ");
Lib.print(b);
Lib.print("\n");
```

入力がある問題は、入力例の行数だけ読みます。

```text
100
3
```

```js
let price = Number(Lib.input());
let number = Number(Lib.input());
```

## 3.1 値を出す

`Lib.print` は値を画面に出します。

```js
Lib.print(13);
Lib.print("\n");
Lib.print("Hello");
Lib.print("\n");
```

数値はそのまま計算できます。

```js
Lib.print((3 - 5 - 7));
Lib.print("\n");
```

文字列は `"` で囲みます。

```js
Lib.print("Better late than never.\n");
```

よく使う形:

| code | 意味 |
| --- | --- |
| `13` | 数値 |
| `"Hello"` | 文字列 |
| `"\n"` | 改行 |
| `+`, `-`, `*`, `/` | 足す、引く、かける、割る |

対応ファイル:

| file | 内容 |
| --- | --- |
| `3.1.1.E1.js` から `3.1.1.E12.js` | 数値と式の出力 |
| `3.1.2.E1.js` から `3.1.2.E3.js` | 文字列の出力 |
| `Numbers.*.js` | 数値の例 |
| `Strings.*.js` | 文字列の例 |

コメントは人間向けのメモです。実行されません。

```js
Lib.print(13); // 13を出す
```

## 3.2 文を並べる

文は上から順に実行されます。

```js
Lib.print("Alice: ");
Lib.print(180 * 3 + 120 * 2);
Lib.print(" yen\n");
```

出力:

```text
Alice: 780 yen
```

対応ファイル:

| file | 内容 |
| --- | --- |
| `3.2.E1.js`, `3.2.E2.js` | 複数の出力を組み合わせる |
| `Statements.Example.*.js` | 文を並べる例 |
| `Statements.Exercise.*.js` | 文を並べる練習 |

## 3.3 値に名前を付ける

`let` は値に名前を付けます。長い式を読みやすくできます。

```js
let price_apple = 180;
let number_apples = 120;
let total = price_apple * number_apples;

Lib.print(total);
Lib.print("\n");
```

読むコツ:

| code | 意味 |
| --- | --- |
| `let price = 180;` | `price` は `180` |
| `price * number` | 名前の中身を使って計算 |
| `let total = ...;` | 計算結果に `total` と名前を付ける |

対応ファイル:

| file | 内容 |
| --- | --- |
| `3.3.E1.js` から `3.3.E3.js` | 名前を使う練習 |
| `Names.Example.*.js` | 名前を付ける例 |

## 3.4 入力を使う

`Lib.input()` は1行入力を文字列として読みます。数値として使うなら `Number(...)` で変換します。

文字列入力:

```js
let name = Lib.input();
Lib.print("Hello, ");
Lib.print(name);
Lib.print("!\n");
```

数値入力:

```js
let price = Number(Lib.input());
let number = Number(Lib.input());

Lib.print(price * number);
Lib.print("\n");
```

入力つきで実行:

```bash
printf '100\n3\n' | node 03.first-step/3.4.E1.js
```

対応ファイル:

| file | 内容 |
| --- | --- |
| `3.4.E1.js` から `3.4.E7.js` | 入力を使う練習 |
| `Input.*.js` | 入力の例 |

入力の基本形:

| code | 意味 |
| --- | --- |
| `let s = Lib.input();` | 文字列として読む |
| `let n = Number(Lib.input());` | 数値として読む |

入力、計算、出力の完成形:

```js
let a = Number(Lib.input());
let b = Number(Lib.input());
Lib.print("---\n");
Lib.print(a + b);
Lib.print("\n");
```

出力例に単位や文字がある場合は、文字列として分けて出します。

```js
Lib.print("Alice: ");
Lib.print(1163 * 79);
Lib.print(" yen\n");
```
