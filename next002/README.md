# Next.jsの練習 (Pre-rendering, データフェッチ)

## 参考URL

Pre-rendering and Data Fetching  
https://nextjs.org/learn/basics/data-fetching  
<br />

公式チュートリアルでNext.jsに入門してみた (2) <br />
〜Pre-rendering、データフェッチ〜<br />
https://dev.classmethod.jp/articles/introduction-to-nextjs-part-2/  
<br />

【日本一わかりやすいNext.js入門】#5 Pre-renderingを体験してみよう<br>
前半<br>
https://www.youtube.com/watch?v=kCFvuI4K5fs  

後半<br>
https://www.youtube.com/watch?v=h9wjVLwd2GQ  

---

## ディレクトリ構成

```
/home
└ nsmr
  └ develop
     └ next-learn
        └ next002
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
npx create-next-app next002 --use-npm --example="https://github.com/vercel/next-learn/tree/master/basics/data-fetching-starter"
```

2. 下記ファイルの準備と編集

- `public/images/profile.jpg` を好きな画像に変更する。  
 (400px width/heightを推奨)  

- `components/layout.js` ファイル内の`const name = '[Your Name]'` を好きに変更する。

- `pages/index.js` ファイルの `<p>[Your Self Introduction]</p>` を好きに編集する。  


## Pre-Rendering

Next.js はデフォルトで全ページPre-renderingである。

### Check That Pre-rendering Is Happening

チュートリアルで説明しているJavaScript無効によるPre-renderingを試す方法で、localhostでも可能だがCSSが読み込まれない。
```
Note: You can also try the above steps on localhost, but CSS won’t be loaded if you disable JavaScript.

(Google翻訳)
localhostで上記の手順を試すこともできますが、JavaScriptを無効にするとCSSは読み込まれません。
```

プレーンなReactアプリではJavaScriptが無効になっている場合、HTMLが表示されない。  

## 2種類のPre-rendering

### 1. Static Generation（SSG = 静的生成）
ビルド(next build)する際に生成される。


### 2. Server-side Rendering(SSR)
ユーザーがアクセスしたページリクエストのたびにHTMLが生成される。
<br>
<br>

Next.jsでは、ページごとに静的生成かサーバーサイドにするか指定できる。  
※`npm run dev`など、開発モードで起動している場合、静的生成するページであってもpre-renderとなる。

<br>

## When to Use Static Generation v.s. Server-side Rendering


Next.js では、ページにデータが含んでいるか問わず、パフォーマンス上の理由で基本的にSSGの使用を推奨している。

| -    | SSG  | SSR  | Client-side Render |
| ---- | ---- | ---- | ----               |
| いつHTMLを生成するか | ビルド時 | アクセス時 | アクセス時 |
| どこでHTMLを生成するか | サーバー | サーバー | クライアント |
| SEO | ◎ | ○ | ☓ |
| 最適なページ | 更新頻度が低い<br>ユーザー：コンテンツ = 1:N | 更新頻度が高い<br>ユーザー:コンテンツ = N:N | SEOを捨てた動的なページ |
| 例 | ブログ、ECサイト、LP、問い合わせ | SNS、チャット、動画配信 | リッチUIな管理画面、サービスサイト |


## データ有り/無しの静的ジェネレーション(SSG)

●外部データなし<br>
→ビルド時にHTMLをレンダリング<br>
<br>
●外部データあり<br>
→ビルド時にDBや外部APIからデータを取得。(`getStaticProps()`を使用)<br>
→取得したデータを使用してHTMLをレンダリング。<br>

---

## getStaticPropsでデータを取得する

- 外部データを取得するために使用する
- async/awaitを使用して非同期処理を制御できる
- 本番環境ではビルド時に実行される関数である。
- 開発環境ではリクエスト毎に実行される。
- **pageコンポーネント(pagesディレクトリ内)でのみ使用可能。**


### 練習

MDファイルを読み込んで表示するプログラムで練習する。

- ルート(今回はnext002)内に`lib`ディレクトを作成し、その中に`posts.js`を作成。

- ルートに`posts`ディレクトリを作成し、中に`pre-rendering.md`と`ssg-ssr.md`を作成する。

- ソースコード、mdファイルの内容等は、チュートリアルからコピペする。

#### Fetch External API or Query Database

外部APIやDBからデータを取得したい場合、`node-fetch`ライブラリが使用できる。

### What If I Need to Fetch Data at Request Time?
リクエスト時にデータを取得する必要がある場合はどうするか？<br>
↓↓<br>
この場合、SSGは良くない。SSRか、Client-side Renderingが良い。


#### 所感
ランディングページなど、更新データはあるものの頻度はそれほど高くないページについて、この内容が利用できると思う。  
リクエストごとに内容を変更したい(レンダリングしたい？)場合は`getServerSideProps`を使用すべきか。


---

## getServerSidePropsでデータを取得する

- リクエストごとに実行される関数。
- SSRのために使用する。
- 外部データを取得するために使用する。
- async/awaitを使用して非同期処理を制御できる
- **pageコンポーネント(pagesディレクトリ内)でのみ使用可能。**
- ページの表示速度はSSGよりも遅くなる。


---

## SWRでClient-Side Renderingする

- Next.jsで用意されているSWRというHooks。
- Client-sideでデータを取得するなら使用を推奨。
- 取得したデータを`{key:value}`の形でキャッシュできる。
- リアルタイムでデータ更新(データの再fetch)
- JAMstack志向。


