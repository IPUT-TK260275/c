# 10. 配列

この章のゴールは、配列リテラル、要素参照、要素の更新、配列の長さ、配列に対する反復に慣れることです。

配列の最初の要素は第0要素です。長さが `length` の配列では、最後の要素は `a[length - 1]` で参照します。

## よく使う型

配列リテラルを入力から作る:

```js
let a = JSON.parse(Lib.input());
```

配列の全要素を前から見る:

```js
let i = 0;
while (i < Lib.length(a)) {
    // a[i] を使う
    i = i + 1;
}
```

配列の全要素を後ろから見る:

```js
let i = Lib.length(a) - 1;
while (i >= 0) {
    // a[i] を使う
    i = i - 1;
}
```

## サンプル

| file | 内容 |
| --- | --- |
| `arrays.0.js` | 配列リテラルと要素参照 |
| `arrays.1.js` | 配列で曜日名を選ぶ |
| `arrays.2.js` | 配列要素の更新 |
| `arrays-construct.0.js` | 別々の配列を参照する例 |
| `arrays-construct.1.js` | 同じ配列を参照する例 |
| `JSON-parse.0.js` | 入力文字列から配列を作る |
| `arrays-length.0.js` | 配列の長さと最後の要素 |
| `arrays-push.0.js` | 配列末尾への追加 |
| `arrays-concat.0.js` | 配列の連結 |
| `arrays-slice.0.js` | 部分配列の生成 |
| `arrays-splice.0.js` | 要素の削除 |
| `arrays-iteration.0.js` | 配列の各要素を印字 |
| `arrays-iteration.1.js` | 配列要素の合計 |
| `arrays-input.0.js` | 個数つき入力を配列に蓄積 |
| `arrays-input.1.js` | `0` が来るまで配列に蓄積 |
| `arrays-nest.0.js` | 配列の配列を反復 |
| `arrays-nest.1.js` | 成績データの配列を処理 |

## 10.6 練習の見取り図

| 問題 | 主に使う型 |
| --- | --- |
| `10.6.E1` | 第2要素を参照する |
| `10.6.E2` | 最後の要素を参照する |
| `10.6.E3` | 各要素の2乗を印字する |
| `10.6.E4` | 最大値を求める |
| `10.6.E5` | 配列に値が含まれるか調べる |
| `10.6.E6` | 小さい順に並んでいるか調べる |
| `10.6.E7` | 入力を配列に蓄積して逆順に印字する |
| `10.6.E8` | 単語と意味の対応を配列で探す |
| `10.6.E9` | Tic Tac Toe で `O` のラインを判定する |

## 実行例

```bash
printf '[2, 3, 7, 5]\n' | node 10.arrays/10.6.E4.js
```

構文チェック:

```bash
node --check 10.arrays/10.6.E4.js
```
