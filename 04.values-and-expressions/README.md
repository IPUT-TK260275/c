# 04. 値と式

この章のゴールは、式を使って値を作ることです。

式とは、評価すると値になるものです。

```js
3 + 4
"Hello" + "!"
price * number <= 5000
```

## 全問を解くための型

04章は「計算式」「真偽判定」「文字列の取り出し」の問題が中心です。

数値問題の型:

```js
let a = Number(Lib.input());
let b = Number(Lib.input());
Lib.print("---\n");
Lib.print(a * b);
Lib.print("\n");
```

真偽判定問題の型:

```js
let a = Number(Lib.input());
let b = Number(Lib.input());
Lib.print("---\n");
Lib.print(a <= b);
Lib.print("\n");
```

文字列問題の型:

```js
let s = Lib.input();
Lib.print("---\n");
Lib.print(Lib.slice(s, 0, 3));
Lib.print("\n");
```

## 4.1 数値

数値の演算子:

| code | 意味 |
| --- | --- |
| `-x` | 符号を反対にする |
| `a + b` | 足す |
| `a - b` | 引く |
| `a * b` | かける |
| `a / b` | 割る |
| `a % b` | 割った余り |

例:

```js
let seconds = Number(Lib.input());
Lib.print(Math.floor(seconds / 3600));
Lib.print("\n");
Lib.print(Math.floor((seconds % 3600) / 60));
Lib.print("\n");
Lib.print(seconds % 60);
Lib.print("\n");
```

よく使う `Math`:

| code | 意味 |
| --- | --- |
| `Math.floor(x)` | 小数点以下を切り捨て |
| `Math.ceil(x)` | 小数点以下を切り上げ |
| `Math.abs(x)` | 絶対値 |
| `Math.sqrt(x)` | 平方根 |
| `Math.pow(x, y)` | `x` の `y` 乗 |

特別な数値:

| code | 意味 |
| --- | --- |
| `Infinity` | 無限大 |
| `NaN` | 数値ではない値 |

よく使う公式:

| やりたいこと | 式 |
| --- | --- |
| `a` を `b` で割った余り | `a % b` |
| `a` を `b` で割った商 | `Math.floor(a / b)` |
| 秒を分と秒に分ける | `Math.floor(t / 60)` と `t % 60` |
| 秒を時、分、秒に分ける | `Math.floor(t / 3600)`, `Math.floor((t % 3600) / 60)`, `t % 60` |
| 税込み価格を切り捨てる | `Math.floor(price * 1.1)` |
| 差の絶対値 | `Math.abs(a - b)` |
| 円の半径を面積から求める | `Math.sqrt(area / Math.PI)` |

対応ファイル:

| file | 内容 |
| --- | --- |
| `4.1.A1.js`, `4.1.E*.js` | 数値計算の課題 |
| `Numbers.Arithmetic-Operators.*.js` | 数値演算子 |
| `Numbers.Mathematical-Functions.1.js` | `Math` の例 |

問題別の見る場所:

| 問題 | 使う道具 |
| --- | --- |
| `4.1.A1` | 秒を時、分、秒に分ける |
| `4.1.E1` | 4つの入力、足し算、かけ算 |
| `4.1.E2` | 余り `%` |
| `4.1.E3` | 商 `Math.floor(a / b)` |
| `4.1.E4` | 税率、`Math.floor` |
| `4.1.E5` | 絶対値 `Math.abs` |
| `4.1.E6` | 円、`Math.sqrt`, `Math.PI` |
| `4.1.E7` | 分と秒、商と余り |

## 4.2 真理値

真理値は `true` または `false` です。

比較:

| code | 意味 |
| --- | --- |
| `a === b` | 等しい |
| `a !== b` | 等しくない |
| `a < b` | 小さい |
| `a <= b` | 以下 |
| `a > b` | 大きい |
| `a >= b` | 以上 |

論理演算:

| code | 読み方 | true になるとき |
| --- | --- | --- |
| `!x` | not | `x` が `false` |
| `x && y` | and | 両方 `true` |
| `x || y` | or | どちらかが `true` |

例:

```js
let a = Number(Lib.input());
let b = Number(Lib.input());
let c = Number(Lib.input());

Lib.print(a * a + b * b === c * c ||
          a * a + c * c === b * b ||
          b * b + c * c === a * a);
Lib.print("\n");
```

比較をつなげて書くと意味が変わります。

```js
// NG
a < b < c

// OK
a < b && b < c
```

よく使う判定:

| やりたいこと | 式 |
| --- | --- |
| `a` と `b` が等しい | `a === b` |
| `a` と `b` が違う | `a !== b` |
| `a` が `b` で割り切れる | `a % b === 0` |
| `a` が範囲内 | `low <= a && a <= high` |
| どちらかが成り立つ | `cond1 || cond2` |
| 両方が成り立つ | `cond1 && cond2` |
| 3つが全部違う | `a !== b && b !== c && a !== c` |
| 直角三角形か調べる | `a * a + b * b === c * c` など3通り |

遅刻を欠席に換算する型:

```js
let absences = a + Math.floor(b / 3);
Lib.print(absences > 6);
Lib.print("\n");
```

対応ファイル:

| file | 内容 |
| --- | --- |
| `4.2.A*.js`, `4.2.E*.js` | 比較と論理の課題 |
| `Boolean.*.js` | 真理値の例 |
| `Comparison-Operators.*.js` | 比較演算子の例 |

問題別の見る場所:

| 問題 | 使う道具 |
| --- | --- |
| `4.2.A1` | 直角三角形、3通りの `||` |
| `4.2.A2` | 遅刻3回を欠席1回に換算 |
| `4.2.E1` から `4.2.E4` | 比較 `===`, `<`, `>`, `<=`, `>=` |
| `4.2.E5` | 商と余りを比べる |
| `4.2.E6` | 全部違う、`&&` |
| `4.2.E7`, `4.2.E8` | 複数条件、`&&` |
| `4.2.E9`, `4.2.E10` | 余り `%` と `===`、`||` |

## 4.3 文字列

文字列は文字の並びです。

| code | 意味 |
| --- | --- |
| `"abc" + "def"` | 連結して `"abcdef"` |
| `"\n"` | 改行 |
| `"\""` | `"` そのもの |
| `"\\"` | `\` そのもの |
| `"\t"` | タブ |
| `Lib.length(s)` | 長さ |
| `Lib.charAt(s, i)` | `i` 番目の文字 |
| `Lib.indexOf(s, t, i)` | `i` 番目以降で `t` を探す |
| `Lib.slice(s, start, end)` | `start` から `end` の手前まで取り出す |

番号は `0` から始まります。

```text
T K 9 8 7 6 5 4
0 1 2 3 4 5 6 7
```

`Lib.slice(s, start, end)` の `end` は含まれません。

```js
Lib.slice("TK987654", 2, 8) // "987654"
```

例:

```js
let id = Lib.input();
let number_part = Lib.slice(id, 2, 8);
Lib.print(number_part);
Lib.print("\n");
```

`"TK987654"` が入力なら、出力は `987654` です。

よく使う文字列パターン:

| やりたいこと | 式 |
| --- | --- |
| 先頭1文字 | `Lib.charAt(s, 0)` |
| 最後の1文字 | `Lib.charAt(s, Lib.length(s) - 1)` |
| 先頭3文字 | `Lib.slice(s, 0, 3)` |
| 4文字目から7文字目 | `Lib.slice(s, 3, 7)` |
| 真ん中の文字 | `Lib.charAt(s, Math.floor(Lib.length(s) / 2))` |
| `(` の位置 | `Lib.indexOf(s, "(", 0)` |
| `)` の位置 | `Lib.indexOf(s, ")", left + 1)` |
| `(` と `)` の中身 | `Lib.slice(s, left + 1, right)` |
| 文字が数字か | `"0" <= ch && ch <= "9"` |

区切り文字で分ける型:

```js
let comma1 = Lib.indexOf(s, ",", 0);
let comma2 = Lib.indexOf(s, ",", comma1 + 1);
Lib.print(Lib.slice(s, 0, comma1));
Lib.print("\n");
Lib.print(Lib.slice(s, comma1 + 1, comma2));
Lib.print("\n");
Lib.print(Lib.slice(s, comma2 + 1, Lib.length(s)));
Lib.print("\n");
```

メールアドレスっぽい形を調べる型:

```js
let at = Lib.indexOf(s, "@", 0);
let after_at = Lib.slice(s, at + 1, Lib.length(s));
Lib.print(at > 0 &&
          Lib.indexOf(after_at, "@", 0) === -1 &&
          Lib.indexOf(after_at, ".", 0) !== -1);
Lib.print("\n");
```

対応ファイル:

| file | 内容 |
| --- | --- |
| `4.3.A*.js`, `4.3.E*.js` | 文字列操作の課題 |
| `String.*.js` | 文字列関数の例 |
| `Type-Conversion.*.js` | 型変換の例 |

問題別の見る場所:

| 問題 | 使う道具 |
| --- | --- |
| `4.3.A1` | `@` と `.` を `indexOf` で探す |
| `4.3.A2` | カンマ区切りを `indexOf` と `slice` で分ける |
| `4.3.E1` から `4.3.E3` | 文字列比較、`===`, `||` |
| `4.3.E4` から `4.3.E6` | `Lib.charAt`, `Lib.length` |
| `4.3.E7` から `4.3.E9` | `Lib.slice` |
| `4.3.E10` から `4.3.E12` | `Lib.indexOf` と `Lib.slice` |
| `4.3.E13` | 複数の `slice` を `+` で連結 |
| `4.3.E14` | 接頭辞チェック、数字チェック、`&&` |
