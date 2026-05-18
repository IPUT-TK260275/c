# 02. 実行とデバッグ

この章のゴールは、コードを書いて、実行して、出力を見ることです。

## 全問を解くための型

02章では、まず文字を正確に出せることが大事です。

```js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("I am ");
    Lib.print("Alice");
    Lib.print("\n");
}
```

出力例と同じにするコツ:

| 見たいもの | 書き方 |
| --- | --- |
| 文字を出す | `Lib.print("text");` |
| 改行する | `Lib.print("\n");` |
| 入力をそのまま使う | `let x = Lib.input();` |
| 文字と入力をつなげる | `Lib.print("Hello, "); Lib.print(x);` |

## 2.1 最初のプログラム

最小の形:

```js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Hello\n");
}
```

見るポイント:

| code | 意味 |
| --- | --- |
| `Lib.print(...)` | 画面に出す |
| `"Hello\n"` | `Hello` と改行 |
| `{ ... }` | この中の文を上から順に実行 |

実行:

```bash
node 02.code-run-debug/my-first-code.js
```

## 2.2 入力

入力を読むときは `Lib.input()` を使います。

```js
let fruit = Lib.input();
Lib.print(fruit);
Lib.print("\n");
```

入力つきで実行:

```bash
printf 'apple\n' | node 02.code-run-debug/my-favorite-fruit.js
```

## 2.3 デバッグ

デバッグでは、コードがどの順番で動くかを1行ずつ見ます。

基本の見方:

1. 上から下へ動く
2. `Lib.print` の行で画面表示が増える
3. `Lib.input` の行で入力待ちになる
4. 変数がある場合は、右辺の値が左辺の名前に入る

## ファイル一覧

| file | 内容 |
| --- | --- |
| `my-first-code.js` | 自己紹介の出力 |
| `my-favorite-fruit.js` | 入力を読んで出力 |
| `anata.js` | 練習用コード |
| `attoteki.js` | 練習用コード |
