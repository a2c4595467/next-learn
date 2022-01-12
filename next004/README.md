# Next.jsの練習 (API)

## 参考URL

API Routes  
https://nextjs.org/learn/basics/api-routes    
<br />

公式チュートリアルでNext.jsに入門してみた (3)<br />
〜Dynamic Routes、API Routes編〜<br />
https://dev.classmethod.jp/articles/introduction-to-nextjs-part-3/    
<br />

【日本一わかりやすいNext.js入門】#7 シンプルなAPIを作ろう<br />
https://www.youtube.com/watch?v=sNcfMIULI80&list=PLX8Rsrpnn3IUGEyanrHYGjY1WOzNe7Jd-&index=9  

---

## ディレクトリ構成

```
/home
└ nsmr
  └ develop
     └ next-learn
        └ next004
           ├ components
           ├ node_modules
           ├ package-lock.json
           ├ package.json
           ├ pages
           ├ public
           └ styles
```

## 準備

1. next-learn ディレクトリ内で下記コマンドを実行。

```
npx create-next-app next004 --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/api-routes-starter"
```

2. 下記ファイルの準備と編集

- `public/images/profile.jpg` を好きな画像に変更する。  
 (400px width/heightを推奨)  

- `components/layout.js` ファイル内の`const name = '[Your Name]'` を好きに変更する。

- `pages/index.js` ファイルの `<p>[Your Self Introduction]</p>` を好きに編集する。  


## 目次

1. シンプルなAPI
2. Next.js APIで非推奨
3. Next.jsでAPIを使うべきケース
4. 動的APIルーティング

## 1. シンプルなAPI

1. `pages`ディレクトリ内に`api`ディレクトリを作成する。

2. APIの定型文

必ず↓こういう形にする。  
* リクエスト、レスポンスを引数に指定する
* `serverless function`として実行される。(Lambda)

```
export default (req, res) => {
  // ...
}
```

3. 実行
```
http://localhost:3004/api/hello
```

---

## 2. Next.js APIで非推奨

**getStaticProps(), getStaticPaths() 内では使用しない。**

この２つのメソッドはサーバーサイドで実行される。  
APIを作成してコールするよりも、このメソッド内でサーバーサイドコードを記述したほうがよい。  
   
`api`ディレクトリ内にDBのクエリを記述したコードがあったとしても、ブラウザに表示されることはない。

---

## 3.Next.jsでAPIを使うべきケース

1. 入力フォームなどで、入力データをAPIへPOSTリクエストする。

```
APIルートの良いユースケースは、フォーム入力の処理です。たとえば、ページにフォームを作成して、APIルートにPOSTリクエストを送信させることができます。
次に、コードを記述してデータベースに直接保存できます。 APIルートコードはクライアントバンドルの一部ではないため、サーバー側のコードを安全に作成できます。
```

2. Preview Mode

ブログ記事のプレビューなど、DBには保存しないがプレビューを表示して確認したいときなどに、APIを使用するのもよい

```
静的生成は、ページがヘッドレスCMSからデータをフェッチするときに役立ちます。ただし、ヘッドレスCMSでドラフトを作成していて、ページでドラフトをすぐにプレビューしたい場合は理想的ではありません。 Next.jsでこれらのページをビルド時ではなくリクエスト時にレンダリングし、公開されたコンテンツではなくドラフトコンテンツを取得する必要があります。 Next.jsは、この特定の場合にのみ静的生成をバイパスする必要があります。

Next.jsには、上記の問題を解決するためのプレビューモードと呼ばれる機能があり、APIルートを利用します。詳細については、プレビューモードのドキュメントをご覧ください。
```

---

## 4. 動的APIルーティング

`/api/post/123` のようなURLを実現する

`api`ディレクトリ内に`post`ディレクトリを作成し、その中に`[id].js`ファイルを作成。

↓↓
```
export default (req, res) => {
    const {
        query: {id},
    } = req

    res.end(`post:${id}`)
}
```

### 例

- `/api/posts` ... ブログ記事一覧
- `/api/posts/12345` ... ブログ記事ID`12345`の記事ページ

こういうURLモデルでは、いかの２パターンが想定できる。

- その１
  - `/api/posts.js`
  - `/api/posts/[postId].js`

- その２
  - `/api/posts/index.js`
  - `/api/posts/[postId].js`

- その３(使用不可)
  - `/api/posts/[postId].js` のみを使用する

その３は、動的ルート（Catch-allルートを含む）には未定義の状態がなく、`GET /api/posts` が `/api/posts`と一致しないため。
