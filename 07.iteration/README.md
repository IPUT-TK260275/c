# 07. 反復文1

この章のゴールは、`while` 文で同じ処理を繰り返す書き方に慣れることです。

特に大事なのは、カウンタと accumulator です。

## 全問を解くための型

07章は、まず「何を変えながら繰り返すか」を決めると書きやすくなります。

カウンタだけを使う型:

```js
let cnt = 0;
while (cnt < 5) {
    Lib.print(cnt);
    Lib.print("\n");
    cnt = cnt + 1;
}
```

accumulator を使う型:

```js
let cnt = 1;
let sum = 0;
while (cnt <= a) {
    sum = sum + cnt;
    cnt = cnt + 1;
}
Lib.print(sum);
Lib.print("\n");
```

文字列を1文字ずつ見る型:

```js
let s = Lib.input();
let cnt = 0;
while (cnt < Lib.length(s)) {
    let ch = Lib.charAt(s, cnt);
    Lib.print(ch);
    Lib.print("\n");
    cnt = cnt + 1;
}
```

## 7.1 while 文

`while` 文は、条件が `true` の間だけブロックを繰り返します。

```js
while (条件式) {
    繰り返したい処理
}
```

実行の流れ:

1. 条件式を見る
2. `true` ならブロックを実行する
3. ブロックが終わったら、もう一度条件式を見る
4. `false` なら `while` 文を終わる

`if` と似ていますが、`while` はブロックが終わったあとに条件式へ戻ります。

対応ファイル:

| file | 内容 |
| --- | --- |
| `While.1.js` | 0, 1, 2, 3 を順に印字 |
| `While.2.js` | 入力された `a` まで順に印字 |

## 7.2 カウンタ

カウンタを使う反復は、次の3点セットで考えます。

| 要素 | 例 | 意味 |
| --- | --- | --- |
| 初期値 | `let cnt = 100;` | 最初の値 |
| 反復継続条件 | `cnt <= 104` | いつまで繰り返すか |
| 更新文 | `cnt = cnt + 1;` | 次の値へ進める |

小さい順に出す型:

```js
let cnt = start;
while (cnt <= end) {
    Lib.print(cnt);
    Lib.print("\n");
    cnt = cnt + 1;
}
```

大きい順に出す型:

```js
let cnt = start;
while (cnt >= end) {
    Lib.print(cnt);
    Lib.print("\n");
    cnt = cnt - 1;
}
```

2ずつ進める型:

```js
let cnt = 1;
while (cnt <= a) {
    Lib.print(cnt);
    Lib.print("\n");
    cnt = cnt + 2;
}
```

対応ファイル:

| file | 内容 |
| --- | --- |
| `Counter.1.js` | 100 から 104 まで |
| `Counter.2.js` | 100 以上 110 未満の偶数 |
| `Counter.3.js` | 5 から 0 まで |
| `Iteration.1.js` | 同じ文字列を5回 |
| `Iteration.2.js` | カウンタを2つ動かす |
| `Calculation-on-Iteration.1.js` | カウンタの2乗 |
| `Calculation-on-Iteration.2.js` | 条件を満たす値だけ印字 |

## 7.3 Accumulator

accumulator は、繰り返しながら答えを少しずつ作るための変数です。

合計を作る型:

```js
let cnt = 1;
let sum = 0;
while (cnt <= a) {
    sum = sum + cnt;
    cnt = cnt + 1;
}
```

個数を数える型:

```js
let cnt = 0;
let num = 0;
while (cnt < Lib.length(s)) {
    if (Lib.charAt(s, cnt) === ",") {
        num = num + 1;
    }
    cnt = cnt + 1;
}
```

文字列を作る型:

```js
let cnt = 0;
let result = "";
while (cnt < Lib.length(s)) {
    result = result + Lib.charAt(s, cnt);
    cnt = cnt + 1;
}
```

対応ファイル:

| file | 内容 |
| --- | --- |
| `Accumulator.1.js` | 1 から 9 までの和 |
| `Accumulator.2.js` | 文字列中のカンマの数 |

## 状態更新表の考え方

状態更新表では、変数の値が変わった行だけを書きます。

`while` の行では、条件式の結果を書きます。

```text
   5 ||       || <- while (cnt < 50): true
```

代入の行では、代入後の値を書きます。

```text
   6 || 24    ||   ||
```

印字の行では、印字された値を文字列として書きます。

```text
   8 ||       || <- PRINT "63"
   9 ||       || <- PRINT "\n"
```

対応ファイル:

| file | 内容 |
| --- | --- |
| `7.4.R1.trace.txt` | 13ずつ増えるカウンタ |
| `7.4.R2.trace.txt` | 13ずつ減るカウンタ |
| `7.4.R3.trace.txt` | `if` と `while` の組み合わせ |

## 7.4 練習の見取り図

| 問題 | 主に使う型 |
| --- | --- |
| `7.4.E1` | `a` から `2 * a` まで小さい順 |
| `7.4.E2` | `2 * a` から `a` まで大きい順 |
| `7.4.E3` | 1つ目の `while` で上り、2つ目の `while` で下り |
| `7.4.E4` | 0 から 5 ずつ増やす |
| `7.4.E5` | 1 から 2 ずつ増やす |
| `7.4.E6` | 回数カウンタと奇数カウンタを同時に動かす |
| `7.4.E7` | 条件に合う値を大きい順に調べる |
| `7.4.E8` | 階乗を accumulator にためる |
| `7.4.E9` | 文字列 accumulator に `"1"` と `"0"` を足す |
| `7.4.E10` | 2乗の和を accumulator にためる |
| `7.4.E11` | 割り切れる個数を数える |
| `7.4.A1` | 文字列を1文字ずつ見て英大文字を数える |
| `7.4.A2` | 後ろから前へ文字を取り出す |
| `7.4.A3` | 足りない空白の個数だけ繰り返す |
| `7.4.A4` | 文字列を走査してカンマ付き文字列を作る |
| `7.4.A5` | `"-"` 以外の文字だけ集める |

## よくあるミス

| ミス | 直し方 |
| --- | --- |
| `while` が終わらない | ブロックの中でカウンタを更新する |
| 最後の値が1つ足りない | `<` と `<=`、`>` と `>=` を見直す |
| 数値入力を文字列のまま使う | `Number(Lib.input())` にする |
| accumulator の初期値が違う | 合計や個数は `0`、積は `1`、文字列は `""` |
| 印字の改行がずれる | 各行に出す問題では、値のあとに `Lib.print("\n");` |
| 文字列の最後でずれる | 条件は `cnt < Lib.length(s)` にする |

## 実行例

```bash
printf '5\n' | node 07.iteration/7.4.E1.js
```

構文チェック:

```bash
node --check 07.iteration/7.4.E1.js
```
