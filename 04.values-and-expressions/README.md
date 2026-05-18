# 04. 値と式

この章のゴールは、式を使って値を作ることです。

式とは、評価すると値になるものです。

```js
3 + 4
"Hello" + "!"
price * number <= 5000
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

対応ファイル:

| file | 内容 |
| --- | --- |
| `4.1.A1.js`, `4.1.E*.js` | 数値計算の課題 |
| `Numbers.Arithmetic-Operators.*.js` | 数値演算子 |
| `Numbers.Mathematical-Functions.1.js` | `Math` の例 |

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

対応ファイル:

| file | 内容 |
| --- | --- |
| `4.2.A*.js`, `4.2.E*.js` | 比較と論理の課題 |
| `Boolean.*.js` | 真理値の例 |
| `Comparison-Operators.*.js` | 比較演算子の例 |

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

例:

```js
let id = Lib.input();
let number_part = Lib.slice(id, 2, 8);
Lib.print(number_part);
Lib.print("\n");
```

`"TK987654"` が入力なら、出力は `987654` です。

対応ファイル:

| file | 内容 |
| --- | --- |
| `4.3.A*.js`, `4.3.E*.js` | 文字列操作の課題 |
| `String.*.js` | 文字列関数の例 |
| `Type-Conversion.*.js` | 型変換の例 |
