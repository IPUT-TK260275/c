# 03. はじめの一歩

この章では、JavaScript で値を出力し、計算し、名前を付け、入力を読む基本を学びます。

ここから本格的に `.js` ファイルを書きます。最初は「出力例と完全に同じ文字を出す」ことを意識してください。空白や改行も採点では大事です。

## この章のゴール

| 節 | 学ぶこと |
| --- | --- |
| 3.1 | 数値や文字列を出力する |
| 3.2 | 複数の文を順番に実行する |
| 3.3 | 値に名前を付ける |
| 3.4 | 入力を読む |

## 基本形

この教材の JavaScript は、基本的にこの形で書きます。

```js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    // ここに処理を書く
}
```

`Lib.print(...)` は画面に出力します。

```js
Lib.print("Hello\n");
```

`\n` は改行です。

## 数値と文字列

数値はそのまま書けます。

```js
Lib.print(123);
Lib.print("\n");
```

文字列は `"` で囲みます。

```js
Lib.print("Hello");
Lib.print("\n");
```

計算もできます。

```js
Lib.print(100 * 3);
Lib.print("\n");
```

## 複数の出力をつなげる

出力は、書いた順番に表示されます。

```js
Lib.print("Alice: ");
Lib.print(180 * 3);
Lib.print(" yen\n");
```

出力は次のようになります。

```text
Alice: 540 yen
```

空白が必要な場所では、`" "` や `"Alice: "` のように自分で空白を書きます。

## 名前を付ける

`let` を使うと、値に名前を付けられます。

```js
let price = 180;
let count = 3;
let total = price * count;

Lib.print(total);
Lib.print("\n");
```

名前を付けると、式の意味が読みやすくなります。

## 入力を読む

`Lib.input()` は入力を 1 行読みます。

文字列として読む場合です。

```js
let name = Lib.input();
Lib.print("Hello, ");
Lib.print(name);
Lib.print("!\n");
```

数値として読む場合は `Number(...)` で変換します。

```js
let price = Number(Lib.input());
let count = Number(Lib.input());

Lib.print(price * count);
Lib.print("\n");
```

## 入力つきで実行する

入力例が次のように 2 行あるとします。

```text
100
3
```

ターミナルでは、次のように実行できます。

```bash
printf '100\n3\n' | node 03.first-step/3.4.E1.js
```

## 問題ファイルの目安

| ファイル | 内容 |
| --- | --- |
| `3.1.1.E1.js` から `3.1.1.E12.js` | 数値や式の出力 |
| `3.1.2.E1.js` から `3.1.2.E3.js` | 文字列の出力 |
| `3.2.E1.js`, `3.2.E2.js` | 文を順番に並べる |
| `3.3.E1.js` から `3.3.E3.js` | 名前を使う |
| `3.4.E1.js` から `3.4.E7.js` | 入力を読む |
| `Numbers.*.js` | 数値の例 |
| `Strings.*.js` | 文字列の例 |
| `Input.*.js` | 入力の例 |

## よくあるミス

| ミス | 直し方 |
| --- | --- |
| 文字列を `"` で囲んでいない | `"Hello"` のように囲む |
| 最後の改行がない | `Lib.print("\n");` を足す |
| 数値入力を文字列のまま計算している | `Number(Lib.input())` を使う |
| 出力例と空白が違う | 出力例を 1 文字ずつ見る |
| 変数名を間違える | `price` と `prcie` のようなスペル違いを探す |

## 確認コマンド

文法チェックです。

```bash
node --check 03.first-step/3.4.E1.js
```

実行例です。

```bash
printf '100\n3\n' | node 03.first-step/3.4.E1.js
```
