# 授業コードのREADME

このリポジトリは授業コードと練習問題の置き場です。

大きいREADMEを1枚で読むのではなく、章ごとのREADMEを開いてください。  
迷ったら、今書いているファイル名の先頭番号と同じ章を見るのが最短です。

## 章一覧

| 章 | 内容 | README |
| --- | --- | --- |
| 02 | 実行、デバッグ、最初のプログラム | [02.code-run-debug/README.md](02.code-run-debug/README.md) |
| 03 | 印字、数値、文字列、名前、入力 | [03.first-step/README.md](03.first-step/README.md) |
| 04 | 値と式、演算子、真理値、文字列操作 | [04.values-and-expressions/README.md](04.values-and-expressions/README.md) |
| 05 | ブロック、変数、代入、初期化 | [05.blocks-and-variables/README.md](05.blocks-and-variables/README.md) |
| 06 | if、else、else-if、条件分岐 | [06.values-and-expressions/README.md](06.values-and-expressions/README.md) |

## 基本コマンド

実行:

```bash
node 03.first-step/3.4.E1.js
```

入力つきで実行:

```bash
printf '100\n3\n' | node 03.first-step/3.4.E1.js
```

構文チェック:

```bash
node --check 06.values-and-expressions/6.5.E1.js
```

## 問題を解く順番

どの問題も、まずこの順番で組み立てます。

1. 共通テンプレートを書く
2. 入力の行数だけ `Lib.input()` を書く
3. 数値なら `Number(Lib.input())` にする
4. 問題文に `---` とあれば `Lib.print("---\n");` を先に出す
5. 必要な計算や判定をする
6. 答えを `Lib.print(...)` で出す
7. 最後に `Lib.print("\n");` で改行する
8. サンプル入力で実行して、空白と改行まで見比べる

例:

```js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let price = Number(Lib.input());
    let number = Number(Lib.input());
    Lib.print("---\n");
    Lib.print(price * number);
    Lib.print("\n");
}
```

よくあるミス:

| ミス | 直し方 |
| --- | --- |
| 数値入力をそのまま足してしまう | `Number(Lib.input())` を使う |
| 改行が足りない | 最後に `Lib.print("\n");` |
| 余計な空白を出す | 出力例と同じ場所だけ `" "` を出す |
| 等しいか調べるのに `=` を使う | 比較は `===`、代入は `=` |
| `a < b < c` と書く | `a < b && b < c` と書く |

## 共通テンプレート

授業コードはだいたいこの形です。

```js
"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    // ここに処理を書く
}
```

よく使う言葉:

| code | 意味 |
| --- | --- |
| `Lib.print(x)` | `x` を画面に出す |
| `Lib.input()` | 1行入力を読む |
| `Number(x)` | `x` を数値に変える |
| `let name = x` | `x` に `name` という名前を付ける |
| `if` | もし |
| `else` | そうでなければ |
