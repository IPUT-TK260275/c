# MY SHOP APP Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 教材の総合演習13.1〜13.3について、CUI版2本とWeb版1本を教材準拠のJavaScriptで完成させる。

**Architecture:** 各教材テンプレートは独立して実行できる1ファイル構成を維持する。CUI版は標準入力・標準出力を子プロセスから検証し、Web版は実サーバーへHTTPリクエストを送り、画面へ反映された商品状態を検証する。

**Tech Stack:** Node.js、組み込み `node:test`、`node:assert/strict`、`node:child_process`、`node:http`、既存の `lib.js`

## Global Constraints

- 成果物は `13.integrated-dev/` 配下に置く。
- 教材テンプレートの初期商品、文言、コマンド構成、HTTP処理を維持する。
- CUIの検索は大文字・小文字を区別する部分一致かつ指定項目の昇順とし、元の商品順を変更しない。
- CUIのID入力は `String(product["id"])` と入力文字列を比較する。
- Web版は `id_asc`、`id_desc`、`name_asc`、`name_desc`、`price_asc`、`price_desc` を扱う。
- 追加時だけ `next_id` を増やし、更新時はIDを維持し、存在しないIDへの更新・削除は商品リストを変更しない。
- 外部依存関係を追加しない。
- ユーザーの既存の未コミット変更には触れない。

---

### Task 1: 13.1 CUI版

**Files:**
- Create: `13.integrated-dev/my-shop-app.1.js`
- Create: `13.integrated-dev/my-shop-app.1.test.js`

**Interfaces:**
- Consumes: `lib.js` の `input`、`print`、`length`、`push`、`splice`
- Produces: `node 13.integrated-dev/my-shop-app.1.js` で起動できる `show/search/add/update/delete/exit` CUI

- [ ] **Step 1: 添付された13.1テンプレートをそのまま作成する**

`my-shop-app.1.js` は添付テキストの `"use strict";` から最後の `}` までを配置する。この時点では4つの `/*? ... ?*/` と3つの `(Problem...` 表示を残し、要求動作が未実装であることをテストで観測できる状態にする。

- [ ] **Step 2: CUIの要求動作を表す失敗テストを書く**

`my-shop-app.1.test.js` に子プロセス実行ヘルパーを作る。

```js
"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const {spawnSync} = require("node:child_process");
const path = require("node:path");

const app = path.join(__dirname, "my-shop-app.1.js");
const run = (lines) => spawnSync(process.execPath, [app], {
    input: lines.join("\n") + "\n",
    encoding: "utf8",
    timeout: 3000,
});

test("search filters by name and sorts by price", () => {
    const result = run(["search", "a", "price", "exit"]);
    assert.equal(result.status, 0, result.stderr);
    const banana = result.stdout.indexOf("[2] banana, 120 yen, Yellow!");
    const apple = result.stdout.indexOf("[1] apple, 180 yen, Red!");
    const strawberry = result.stdout.indexOf("[3] strawberry, 380 yen, Sweet!");
    assert.ok(banana >= 0 && banana < apple && apple < strawberry);
});

test("search rejects an invalid sort item and accepts description", () => {
    const result = run(["search", "a", "id", "description", "exit"]);
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /Enter a valid sort item\./);
    const apple = result.stdout.indexOf("[1] apple");
    const strawberry = result.stdout.indexOf("[3] strawberry");
    const banana = result.stdout.indexOf("[2] banana");
    assert.ok(apple >= 0 && apple < strawberry && strawberry < banana);
});

test("search sorts matching products by name", () => {
    const result = run(["search", "a", "name", "exit"]);
    assert.equal(result.status, 0, result.stderr);
    const apple = result.stdout.indexOf("[1] apple");
    const banana = result.stdout.indexOf("[2] banana");
    const strawberry = result.stdout.indexOf("[3] strawberry");
    assert.ok(apple >= 0 && apple < banana && banana < strawberry);
});

test("add assigns the next id and show displays the product", () => {
    const result = run(["add", "melon", "500", "Green!", "show", "exit"]);
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /\[4\] melon, 500 yen, Green!/);
});

test("update retries an invalid id and replaces product fields", () => {
    const result = run(["update", "99", "2", "orange", "250", "Orange!", "show", "exit"]);
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /Enter a valid ID\./);
    assert.match(result.stdout, /\[2\] orange, 250 yen, Orange!/);
    assert.doesNotMatch(result.stdout.slice(result.stdout.lastIndexOf("--- PRODUCT LIST ---")), /banana/);
});

test("delete retries an invalid id and removes the selected product", () => {
    const result = run(["delete", "x", "1", "show", "exit"]);
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /Enter a valid ID\./);
    assert.doesNotMatch(result.stdout.slice(result.stdout.lastIndexOf("--- PRODUCT LIST ---")), /\[1\] apple/);
});

test("invalid commands are rejected and exit prints the farewell", () => {
    const result = run(["unknown", "exit"]);
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /'unknown' is an invalid command\./);
    assert.match(result.stdout, /Bye!/);
});
```

- [ ] **Step 3: テストを実行し、未実装箇所により失敗することを確認する**

Run: `node --test 13.integrated-dev/my-shop-app.1.test.js`

Expected: 検索結果、更新結果、削除結果のアサーションがFAILし、構文エラーやタイムアウトではない。

- [ ] **Step 4: 教材の基本構文で検索・ID検証・更新・削除を実装する**

検索は `products` を一度走査して部分一致商品を新しい配列へ追加し、選択ソートで昇順にする。教材の既習範囲に合わせて、安定な挿入ソートを `while` と `Lib.splice` で実装する。

```js
let results = [];
let i = 0;
while (i < Lib.length(products)) {
    if (products[i]["name"].indexOf(keyword, 0) >= 0) {
        Lib.push(results, products[i]);
    }
    i = i + 1;
}
i = 1;
while (i < Lib.length(results)) {
    let current = results[i];
    let j = i;
    while (j > 0 && current[sort_item] < results[j - 1][sort_item]) {
        results[j] = results[j - 1];
        j = j - 1;
    }
    results[j] = current;
    i = i + 1;
}
```

ID検証では `exists = false` から全商品を走査する。更新は追加と同じ3つの入力ループの後、IDが一致する商品の3フィールドを代入する。削除は一致位置へ `Lib.splice(products, i, 1)` を適用する。すべての `(Problem...` 行と問コメントを除去する。

- [ ] **Step 5: 13.1テストを再実行して成功を確認する**

Run: `node --test 13.integrated-dev/my-shop-app.1.test.js`

Expected: 7 tests、0 failures。

- [ ] **Step 6: 13.1をコミットする**

```bash
git add 13.integrated-dev/my-shop-app.1.js 13.integrated-dev/my-shop-app.1.test.js
git commit -m "Complete MY SHOP APP console step 1"
```

### Task 2: 13.2 関数構成のCUI版

**Files:**
- Create: `13.integrated-dev/my-shop-app.2.js`
- Create: `13.integrated-dev/my-shop-app.2.test.js`

**Interfaces:**
- Consumes: `lib.js` とテンプレート定義の `new_product`、`product_info`、各 `mode_*` 関数
- Produces: 13.1と同じ外部動作を関数で整理したCUI

- [ ] **Step 1: 添付された13.2テンプレートをそのまま作成する**

添付テキストの13.2部分を配置し、問コメントと `(Problem...` 表示を残す。

- [ ] **Step 2: 13.2の外部動作を表す失敗テストを書く**

Task 1で作成した外部動作テストを複製し、対象アプリのパスだけ置換する。実行する操作列とアサーションはすべて同一に保つ。

```bash
cp 13.integrated-dev/my-shop-app.1.test.js 13.integrated-dev/my-shop-app.2.test.js
sed -i 's/my-shop-app\.1\.js/my-shop-app.2.js/' 13.integrated-dev/my-shop-app.2.test.js
```

生成されたファイルの `const app` は次の値になり、7テストにより関数分割後も3種類の検索ソート、追加、更新、削除、再入力、不正コマンド、終了が13.1と同一であることを要求する。

```js
const app = path.join(__dirname, "my-shop-app.2.js");
```

- [ ] **Step 3: テストを実行し、未実装箇所により失敗することを確認する**

Run: `node --test 13.integrated-dev/my-shop-app.2.test.js`

Expected: 検索、更新、削除のテストが期待値不一致でFAILする。

- [ ] **Step 4: 各 `mode_*` 内へ13.1と同じアルゴリズムを実装する**

`mode_search` では検索結果配列を作って安定な挿入ソートを行い、表示には既存の `product_info(product)` を使う。`mode_update` と `mode_delete` のID検証は `exists = false` と全商品走査で行う。更新入力は `mode_add` と同一の検証条件を使い、削除は一致位置を `Lib.splice` で除く。

- [ ] **Step 5: 13.1と13.2のテストを一緒に実行する**

Run: `node --test 13.integrated-dev/my-shop-app.1.test.js 13.integrated-dev/my-shop-app.2.test.js`

Expected: 14 tests、0 failures。

- [ ] **Step 6: 13.2をコミットする**

```bash
git add 13.integrated-dev/my-shop-app.2.js 13.integrated-dev/my-shop-app.2.test.js
git commit -m "Complete MY SHOP APP console step 2"
```

### Task 3: 13.3 Web版

**Files:**
- Create: `13.integrated-dev/my-shop-app.web.js`
- Create: `13.integrated-dev/my-shop-app.web.test.js`

**Interfaces:**
- Consumes: テンプレート定義の `products`、`newProduct(name, price, description)`、HTTPフォーム
- Produces: `sortProducts(order)`、`addProduct(name, price, description)`、`updateProduct(id, name, price, description)`、`deleteProduct(id)` が反映されるHTTPサーバー

- [ ] **Step 1: 添付された13.3テンプレートをそのまま作成する**

添付テキストの13.3部分を配置し、4関数の問コメントを残す。`////!!!! 以下は変更する必要はありません` より下は一切変えない。

- [ ] **Step 2: 実HTTP動作を検証する失敗テストを書く**

`my-shop-app.web.test.js` では `spawn` でサーバーを開始し、標準出力の `Server running` を待つ。`http.request` ヘルパーでGETとURLエンコードしたPOSTを送り、レスポンスHTMLの表行順と内容を検査する。テスト終了時は `after` で子プロセスを停止する。

要求するケースは次の通りとする。

```js
test("sorts by every supported order", async () => {
    assertTableOrder(await get("/?order=id_desc"), ["strawberry", "banana", "apple"]);
    assertTableOrder(await get("/?order=id_asc"), ["apple", "banana", "strawberry"]);
    assertTableOrder(await get("/?order=name_desc"), ["strawberry", "banana", "apple"]);
    assertTableOrder(await get("/?order=name_asc"), ["apple", "banana", "strawberry"]);
    assertTableOrder(await get("/?order=price_desc"), ["strawberry", "apple", "banana"]);
    assertTableOrder(await get("/?order=price_asc"), ["banana", "apple", "strawberry"]);
});

test("adds, updates, and deletes products", async () => {
    let body = await post({action: "add", name: "melon", price: "500", description: "Green!"});
    assert.match(body, /<td>4<\/td><td>melon<\/td><td>&yen;500<\/td><td>Green!<\/td>/);
    body = await post({action: "update", id: "4", name: "watermelon", price: "600", description: "Big!"});
    assert.match(body, /<td>4<\/td><td>watermelon<\/td><td>&yen;600<\/td><td>Big!<\/td>/);
    body = await post({action: "delete", id: "4"});
    assert.doesNotMatch(body, /watermelon/);
});

test("missing ids do not change products", async () => {
    await post({action: "update", id: "99", name: "x", price: "1", description: "x"});
    await post({action: "delete", id: "99"});
    const body = await get("/?order=id_asc");
    assertTableOrder(body, ["apple", "banana", "strawberry"]);
});
```

- [ ] **Step 3: Webテストを実行し、4関数が空のため失敗することを確認する**

Run: `node --test 13.integrated-dev/my-shop-app.web.test.js`

Expected: ソート順とCRUD後の商品HTMLが期待値不一致でFAILする。サーバー起動自体は成功する。

- [ ] **Step 4: 4つの商品操作関数を教材準拠で実装する**

`sortProducts` は `_` の前を項目、後を方向として解釈し、未知の値なら何もしない。安定な挿入ソートで比較方向だけ切り替える。

```js
let validOrders = ["id_asc", "id_desc", "name_asc", "name_desc", "price_asc", "price_desc"];
if (validOrders.indexOf(order) < 0) { return; }
let parts = order.split("_");
let item = parts[0];
let descending = parts[1] === "desc";
let i = 1;
while (i < products.length) {
    let current = products[i];
    let j = i;
    while (j > 0 && (descending ? current[item] > products[j - 1][item] : current[item] < products[j - 1][item])) {
        products[j] = products[j - 1];
        j = j - 1;
    }
    products[j] = current;
    i = i + 1;
}
```

追加は `products.push(newProduct(name, price, description))`。更新は一致する数値IDの商品へ3フィールドを代入する。削除は一致する数値IDの位置へ `products.splice(i, 1)` を適用する。

- [ ] **Step 5: Webテストを再実行して成功を確認する**

Run: `node --test 13.integrated-dev/my-shop-app.web.test.js`

Expected: 3 tests、0 failures。子サーバープロセスも終了する。

- [ ] **Step 6: Web版をコミットする**

```bash
git add 13.integrated-dev/my-shop-app.web.js 13.integrated-dev/my-shop-app.web.test.js
git commit -m "Complete MY SHOP APP web version"
```

### Task 4: 全体検証

**Files:**
- Verify: `13.integrated-dev/my-shop-app.1.js`
- Verify: `13.integrated-dev/my-shop-app.2.js`
- Verify: `13.integrated-dev/my-shop-app.web.js`
- Verify: `13.integrated-dev/*.test.js`

**Interfaces:**
- Consumes: Task 1〜3の全成果物
- Produces: 構文検査と17件の自動テストによる完了証拠

- [ ] **Step 1: 問題用表示と未完成マーカーが残っていないことを確認する**

Run: `rg -n 'Problem|/\\*\\?|\\?\\*/' 13.integrated-dev`

Expected: 出力なし、終了コード1。

- [ ] **Step 2: 3つのアプリへ構文検査を行う**

Run: `node --check 13.integrated-dev/my-shop-app.1.js && node --check 13.integrated-dev/my-shop-app.2.js && node --check 13.integrated-dev/my-shop-app.web.js`

Expected: 出力なし、終了コード0。

- [ ] **Step 3: 全自動テストを新しく実行する**

Run: `node --test 13.integrated-dev/*.test.js`

Expected: 17 tests、0 failures、0 cancelled、0 skipped。

- [ ] **Step 4: 差分の空白エラーと対象範囲を確認する**

Run: `git diff --check && git status --short`

Expected: `git diff --check` は出力なし。ステータスには既存変更に加え、この計画で作成した `13.integrated-dev/` の対象ファイルだけが表示される。

- [ ] **Step 5: 検証に伴う修正がある場合だけコミットする**

```bash
git add 13.integrated-dev
git commit -m "Verify MY SHOP APP exercises"
```
