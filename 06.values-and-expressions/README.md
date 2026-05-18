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

サンプル確認:

```bash
printf '2501\n2\n' | node 06.values-and-expressions/6.5.E3.js
```

出力:

```text
---
CANNOT
```
