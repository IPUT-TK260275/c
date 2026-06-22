# 11. 連想配列

この章では、キーと値をセットで持つデータである連想配列を学びます。

配列は `a[0]`, `a[1]` のように番号で値を取り出しました。連想配列は、番号ではなく `"name"` や `"price"` のような文字列のキーで値を取り出します。商品、学生、ユーザ、成績のように「1件のデータに複数の項目がある」場面でよく使います。

## この章のゴール

| 学ぶこと | 例 |
| --- | --- |
| 連想配列を作る | `{"name": "apple", "price": 180}` |
| キーで値を取り出す | `a["price"]`, `a.price` |
| 値を更新する | `a.price = 200` |
| 新しいキーを追加する | `a.from = "Aomori"` |
| キーがあるか調べる | `Object.hasOwn(a, "price")` |
| キー一覧を取る | `Object.keys(a)` |
| 入力から連想配列を作る | `JSON.parse(Lib.input())` |

## 連想配列とは

次のデータを見てください。

```js
let item = {"name": "apple", "price": 180, "description": "Sweet!"};
```

これは、次の3つの対応を持つ連想配列です。

| キー | 値 |
| --- | --- |
| `"name"` | `"apple"` |
| `"price"` | `180` |
| `"description"` | `"Sweet!"` |

「キー」はラベル、「値」はそのラベルに対応する中身だと考えると分かりやすいです。

## 値を取り出す

基本形は角かっこです。

```js
Lib.print(item["price"]);
Lib.print("\n");
```

キーが変数に入っているときも使えます。

```js
let key = "price";
Lib.print(item[key]);
Lib.print("\n");
```

キーが英数字と `_` だけで、先頭が数字でない場合は、属性記法も使えます。

```js
Lib.print(item.price);
Lib.print("\n");
```

この教材では、キーが固定で分かっているときは `item.price`、キーを変数で扱うときは `item[key]` と考えると整理しやすいです。

## 値を更新する・追加する

すでにあるキーに代入すると、値が更新されます。

```js
item.price = 200;
```

まだないキーに代入すると、新しいキーが追加されます。

```js
item.from = "Aomori";
```

## 入力から連想配列を作る

練習問題では、連想配列や連想配列の配列が文字列として入力されます。

```text
{"student_id": 249001, "japanese": 85, "math": 90, "english": 95}
```

このままだとただの文字列なので、`JSON.parse` で連想配列に変換します。

```js
let student = JSON.parse(Lib.input());
```

変換した後は、普通にキーで値を取り出せます。

```js
Lib.print(student.math);
Lib.print("\n");
```

## キーがあるか調べる

存在しないキーをいきなり使うと、`undefined` になって計算が壊れることがあります。キーがあるかどうかは `Object.hasOwn` で調べます。

```js
if (Object.hasOwn(item, "price")) {
    Lib.print(item.price);
    Lib.print("\n");
}
```

集計問題では、「まだ登録されていなければ0で作る」という形でよく使います。

```js
if (!Object.hasOwn(counts, color)) {
    counts[color] = 0;
}
counts[color] = counts[color] + 1;
```

## すべてのキーを見る

`Object.keys(a)` は、連想配列 `a` のキーを配列として返します。

```js
let keys = Object.keys(item);
let i = 0;
while (i < Lib.length(keys)) {
    let key = keys[i];
    Lib.print(key);
    Lib.print(": ");
    Lib.print(item[key]);
    Lib.print("\n");
    i = i + 1;
}
```

「どんなキーがあるか入力によって変わる」問題では、この形が役に立ちます。

## 問題ファイルの目安

| ファイル | 内容 |
| --- | --- |
| `associative-arrays.0.js`, `associative-arrays.1.js` | 値の取り出し |
| `associative-arrays.2.js`, `associative-arrays.3.js` | 値の更新と追加 |
| `associative-arrays-construct.0.js`, `arrays-construct.1.js` | 生成と参照の違い |
| `JSON-parse.0.js` | 入力文字列から連想配列を作る |
| `associative-arrays-hasOwn.0.js` | キーの存在確認 |
| `associative-arrays-keys.0.js` | キー一覧を使った反復 |
| `associative-arrays-delete.0.js` | キーの削除 |
| `associative-arrays-accumurate.0.js` | 連想配列を使った集計 |
| `11.10.E*.js`, `11.10.A1.js` | 練習問題 |

## 各問題の解説

| 問題 | 解き方の要点 |
| --- | --- |
| `11.10.E1` | 入力を `JSON.parse` で連想配列に変換し、数学の点数 `a.math` を出力します。 |
| `11.10.E2` | `a.japanese + a.math + a.english` を計算して総合点を出します。 |
| `11.10.E3` | 連想配列の配列を読み、各学生の `math` を合計して人数で割ります。 |
| `11.10.E4` | 各学生の総合点を計算し、最大点を更新します。同点の学生がいたら学籍番号を配列に追加し、最後に全部出力します。 |
| `11.10.A1` | 各ユーザの `following` を見て、フォロー先ユーザIDごとのフォロワー数を連想配列で数えます。その後、最大人数のユーザIDを出力します。 |

## よくあるミス

| ミス | 直し方 |
| --- | --- |
| `JSON.parse` を忘れる | 入力された連想配列文字列は `JSON.parse(Lib.input())` で変換する |
| キー名を間違える | 問題文の `"student_id"`、`"math"` などをそのまま使う |
| `student_id` を文字列キーとして扱う場面で混乱する | 値としての学生番号と、連想配列のキーを分けて考える |
| `a.key` と `a[key]` を混同する | 変数 `key` の中身を使うなら `a[key]` |
| 最大値問題で同点を消してしまう | 新しい最大なら配列を作り直し、同点なら `Lib.push` で追加する |

## 確認コマンド

文法チェックです。

```bash
node --check 11.associative-arrays/11.10.E1.js
```

実行例です。

```bash
printf '{"student_id": 249001, "japanese": 85, "math": 90, "english": 95}\n' | node 11.associative-arrays/11.10.E1.js
```
