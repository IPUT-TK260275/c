# 06. 選択文

この章のゴールは、条件によって動くコードを変えることです。

よく使う言葉:

| code | 意味 |
| --- | --- |
| `if` | もし |
| `else` | そうでなければ |
| `condition` | 条件 |
| `true` | 条件が成り立つ |
| `false` | 条件が成り立たない |

## 全問を解くための型

06章は、まず「何通りに分けるか」を決めます。

2通り:

```js
if (condition) {
    // true のとき
}
else {
    // false のとき
}
```

3通り以上:

```js
if (condition1) {
}
else if (condition2) {
}
else {
}
```

答えをすぐ出しても、変数に入れて最後に出してもOKです。

```js
let message;
if (a < 0) {
    message = "NEGATIVE";
}
else {
    message = "NONNEGATIVE";
}
Lib.print(message);
Lib.print("\n");
```

## 6.1 if-else

2択の分岐です。

```js
if (probability >= 20) {
    Lib.print("You need an umbrella.");
}
else {
    Lib.print("You don't need an umbrella.");
}
Lib.print("\n");
```

流れ:

1. `probability >= 20` を調べる
2. `true` なら `if` の中を実行
3. `false` なら `else` の中を実行

対応ファイル:

| file | 内容 |
| --- | --- |
| `If-Else.1.js` | `if-else` の例 |

## 6.2 if

何もしない場合は `else` を省略できます。

```js
let message = "You don't need an umbrella.";

if (probability >= 20) {
    message = "You need an umbrella.";
}

Lib.print(message);
Lib.print("\n");
```

対応ファイル:

| file | 内容 |
| --- | --- |
| `If-Else.2.js` | `if` の例 |

## 6.3 if-else の入れ子

`if` の中に、さらに `if` を書けます。

```js
if (probability >= 20) {
    if (car_is_available === "yes") {
        Lib.print("You don't need an umbrella if you use a car.");
    }
    else {
        Lib.print("You need an umbrella.");
    }
}
else {
    Lib.print("You don't need an umbrella.");
}
Lib.print("\n");
```

対応ファイル:

| file | 内容 |
| --- | --- |
| `If-Else-Nest.1.js` | 入れ子の例 |

## 6.4 else-if のはしご

3択以上は `else if` を使います。

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
else {
    Lib.print("C or lower");
}
Lib.print("\n");
```

上から順に調べて、最初に `true` になった場所だけ実行します。

対応ファイル:

| file | 内容 |
| --- | --- |
| `Else-If-Ladder.1.js` | `else if` の例 |

## 6.5 練習問題

練習問題はだいたいこの形です。

```js
let a = Number(Lib.input());
Lib.print("---\n");

if (a < 0) {
    Lib.print("NEGATIVE");
}
else {
    Lib.print("NONNEGATIVE");
}
Lib.print("\n");
```

課題一覧:

| file | 内容 |
| --- | --- |
| `6.5.E1.js` | 負の数かどうか |
| `6.5.E2.js` | 2つの整数が等しいか |
| `6.5.E3.js` | 5000円で足りるか |
| `6.5.E4.js` | 送料込みの合計 |
| `6.5.E5.js` | うるう年なら `366`、それ以外なら `365` |
| `6.5.E6.js` | 2つの整数を小さい順に出す |
| `6.5.E7.js` | 3つの整数を小さい順に出す |
| `6.5.E8.js` | 2026年5月の日付から曜日を出す |
| `6.5.E9.js` | 負、ゼロ、正を分ける |
| `6.5.E10.js` | 空きコマの回答からランチ案を出す |
| `6.5.E11.js` | 省略名から正式名を出す |
| `6.5.E12.js` | 年と月から日数を出す |
| `6.5.E13.js` | 4つの整数の最小値を出す |
| `6.5.E14.js` | 欠席と遅刻から出席条件を判定 |

問題別の解き方:

| 問題 | 使う型 |
| --- | --- |
| `6.5.E1` | `a < 0` で2択 |
| `6.5.E2` | `a === b` で2択 |
| `6.5.E3` | `price * number <= 5000` で2択 |
| `6.5.E4` | 代金 `total` を作り、送料を足す |
| `6.5.E5` | うるう年判定 |
| `6.5.E6` | 2つを比べ、小さい順に出す |
| `6.5.E7` | 3つを swap で並べ替える |
| `6.5.E8` | `d % 7` で曜日に分ける |
| `6.5.E9` | 負、0、正の3択 |
| `6.5.E10` | `&&` で2つの回答をまとめて判定 |
| `6.5.E11` | 文字列を `else if` で分類 |
| `6.5.E12` | 月の日数、2月だけうるう年判定 |
| `6.5.E13` | 最小値を変数で更新 |
| `6.5.E14` | 遅刻3回を欠席1回に換算 |

うるう年判定:

```js
if (year % 400 === 0) {
    // うるう年
}
else if (year % 100 === 0) {
    // 平年
}
else if (year % 4 === 0) {
    // うるう年
}
else {
    // 平年
}
```

2つの値の交換:

```js
if (a > b) {
    let tmp = a;
    a = b;
    b = tmp;
}
```

3つを小さい順にする型:

```js
if (a > b) {
    let tmp = a;
    a = b;
    b = tmp;
}
if (b > c) {
    let tmp = b;
    b = c;
    c = tmp;
}
if (a > b) {
    let tmp = a;
    a = b;
    b = tmp;
}
```

最小値を探す型:

```js
let minimum = a;
if (b < minimum) {
    minimum = b;
}
if (c < minimum) {
    minimum = c;
}
```

月の日数:

| 月 | 日数 |
| --- | --- |
| 2 | 28または29 |
| 4, 6, 9, 11 | 30 |
| それ以外 | 31 |

遅刻と欠席:

```js
let counted_absences = a + Math.floor(b / 3);
if (counted_absences > 6) {
    Lib.print("OUT");
}
else {
    let remaining_lates = (6 - counted_absences) * 3 + (2 - b % 3);
    Lib.print(remaining_lates);
}
```

サンプル確認:

```bash
printf '2501\n2\n' | node 06.values-and-expressions/6.5.E3.js
```

出力:

```text
---
CANNOT
```
