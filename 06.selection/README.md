# 06. 選択文

この章のゴールは、条件に応じて実行する処理を切り替えられるようになることです。

選択文では、真理値 `true` / `false` を作る条件式が中心になります。

```js
a < 0
a === b
price * number <= 5000
year % 4 === 0
```

## 全問を解くための型

06章は「条件を作る」「場合ごとに印字する」「必要なら変数に答えを入れる」の3つで考えます。

2択の型:

```js
let a = Number(Lib.input());
Lib.print("---\n");
if (a < 0) {
    Lib.print("NEGATIVE\n");
}
else {
    Lib.print("NONNEGATIVE\n");
}
```

3択以上の型:

```js
let a = Number(Lib.input());
Lib.print("---\n");
if (a < 0) {
    Lib.print("NEGATIVE\n");
}
else if (a === 0) {
    Lib.print("ZERO\n");
}
else {
    Lib.print("POSITIVE\n");
}
```

計算結果を変数に入れて最後に印字する型:

```js
let price = Number(Lib.input());
let number = Number(Lib.input());
Lib.print("---\n");

let total = price * number;
let postage;
if (total >= 2000) {
    postage = 230;
}
else {
    postage = 460;
}

Lib.print(total + postage);
Lib.print("\n");
```

## 6.1 if-else 文

`if-else` 文は、条件式が `true` のときと `false` のときで処理を分けます。

```js
if (条件式) {
    // true のとき
}
else {
    // false のとき
}
```

例:

```js
let probability = Number(Lib.input());
let message;
if (probability >= 20) {
    message = "You need an umbrella.";
}
else {
    message = "You don't need an umbrella.";
}
Lib.print(message);
Lib.print("\n");
```

対応ファイル:

| file | 内容 |
| --- | --- |
| `If-Else.1.js` | `if-else` 文の例 |
| `6.5.E1.js` から `6.5.E6.js` | 2択の課題 |

## 6.2 if 文

条件が成り立つときだけ処理したい場合は、`else` を省略できます。

```js
if (条件式) {
    // true のときだけ実行する
}
```

「通常の値を先に入れて、例外のときだけ上書きする」ときによく使います。

```js
let message = "You don't need an umbrella.";
if (probability >= 20) {
    message = "You need an umbrella.";
}
```

対応ファイル:

| file | 内容 |
| --- | --- |
| `If-Else.2.js` | `if` 文の例 |

## 6.3 if-else 文の入れ子

`if` ブロックや `else` ブロックの中に、さらに `if-else` 文を書けます。

```js
if (条件式1) {
    if (条件式2) {
        // 条件式1も条件式2も true
    }
    else {
        // 条件式1は true、条件式2は false
    }
}
else {
    // 条件式1が false
}
```

例:

```js
if (probability >= 20) {
    let car_is_available = Lib.input();
    if (car_is_available === "yes") {
        message = "You don't need an umbrella if you use a car.";
    }
    else {
        message = "You need an umbrella.";
    }
}
else {
    message = "You don't need an umbrella.";
}
```

対応ファイル:

| file | 内容 |
| --- | --- |
| `If-Else-Nest.1.js` | `if-else` 文の入れ子 |
| `6.5.R2.1.js`, `6.5.R2.2.js` | 入れ子の trace 練習 |

## 6.4 else-if のはしご

3択以上の分岐には `else if` を使います。

```js
if (条件式1) {
    // 条件式1が true
}
else if (条件式2) {
    // 条件式1が false で、条件式2が true
}
else {
    // どの条件も false
}
```

上から順に調べて、最初に `true` になったブロックだけが実行されます。

```js
if (points >= 90) {
    Lib.print("S");
}
else if (points >= 80) {
    Lib.print("A");
}
else if (points >= 70) {
    Lib.print("B");
}
else if (points >= 60) {
    Lib.print("C");
}
else {
    Lib.print("D or R");
}
Lib.print("\n");
```

対応ファイル:

| file | 内容 |
| --- | --- |
| `Else-If-Ladder.1.js` | `else-if` のはしご |
| `6.5.E9.js` から `6.5.E12.js` | 3択以上の課題 |
| `6.5.R3.js` | `else-if` の trace 練習 |

## 条件式のよく使う形

| やりたいこと | 条件式 |
| --- | --- |
| `a` が負 | `a < 0` |
| `a` が 0 | `a === 0` |
| `a` と `b` が等しい | `a === b` |
| `a` と `b` が違う | `a !== b` |
| 代金が 5000 円以下 | `price * number <= 5000` |
| `a` が偶数 | `a % 2 === 0` |
| `a` が奇数 | `a % 2 !== 0` |
| `a` が `b` で割り切れる | `a % b === 0` |
| 両方成り立つ | `cond1 && cond2` |
| どちらか成り立つ | `cond1 || cond2` |

比較をつなげて書くと意味が変わるので注意します。

```js
// NG
0 <= d <= 31

// OK
0 <= d && d <= 31
```

## よく出る問題の考え方

### 閏年

閏年は、次のどちらかです。

```js
year % 400 === 0
year % 4 === 0 && year % 100 !== 0
```

まとめると:

```js
let leap = (year % 400 === 0) ||
           (year % 4 === 0 && year % 100 !== 0);
```

### 小さい順に並べる

2つなら、逆順のときだけ入れ替えます。

```js
if (b < a) {
    let tmp = a;
    a = b;
    b = tmp;
}
```

3つなら、隣同士の入れ替えを何回か行います。

```js
if (b < a) {
    let tmp = a;
    a = b;
    b = tmp;
}
if (c < b) {
    let tmp = b;
    b = c;
    c = tmp;
}
if (b < a) {
    let tmp = a;
    a = b;
    b = tmp;
}
```

### 月の日数

31日の月、30日の月、2月で分けます。2月だけ閏年判定が必要です。

```js
if (month === 2) {
    if (leap) {
        days = 29;
    }
    else {
        days = 28;
    }
}
else if (month === 4 || month === 6 || month === 9 || month === 11) {
    days = 30;
}
else {
    days = 31;
}
```

### 遅刻と欠席

遅刻3回を欠席1回として数えるときは、`Math.floor(b / 3)` を使います。

```js
let counted_absences = a + Math.floor(b / 3);
```

出席条件を満たせないのは、換算後の欠席が `6` を超えるときです。

```js
if (counted_absences > 6) {
    Lib.print("OUT\n");
}
```

## 6.5 練習ファイル

| 問題 | 使う道具 |
| --- | --- |
| `6.5.R1.1`, `6.5.R1.2` | `if-else` の trace |
| `6.5.R2.1`, `6.5.R2.2` | 入れ子の trace |
| `6.5.R3` | `else-if` の trace |
| `6.5.E1` | 負か非負か |
| `6.5.E2` | 等しいかどうか |
| `6.5.E3` | 代金が 5000 円以下か |
| `6.5.E4` | 送料の分岐 |
| `6.5.E5` | 閏年 |
| `6.5.E6` | 2整数を小さい順に並べる |
| `6.5.E7` | 3整数を小さい順に並べる |
| `6.5.E8` | 曜日の分岐 |
| `6.5.E9` | 負、0、正 |
| `6.5.E10` | 2つの Y/N による分岐 |
| `6.5.E11` | 文字列に応じた分岐 |
| `6.5.E12` | 月の日数 |
| `6.5.E13` | 4整数の最小値 |
| `6.5.E14` | 欠席と遅刻の条件判定 |

## 書くときのチェック

`if`, `else if`, `else` の順番を確認します。

```js
if (条件1) {
}
else if (条件2) {
}
else {
}
```

`else` には条件を書きません。

```js
// NG
else (a === 0) {
}

// OK
else if (a === 0) {
}
```

文字列の比較には `===` を使います。

```js
if (a === "USJ") {
    Lib.print("Universal Studio Japan\n");
}
```

出力例に `---` がある問題では、入力のあとに必ず先に印字します。

```js
Lib.print("---\n");
```
