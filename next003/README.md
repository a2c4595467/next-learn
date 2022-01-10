# Next.jsの練習 (Dynamic Routes)

## 参考URL

Dynamic Routes  
https://nextjs.org/learn/basics/dynamic-routes  
<br />

公式チュートリアルでNext.jsに入門してみた (3)<br />
〜Dynamic Routes、API Routes編〜<br />
https://dev.classmethod.jp/articles/introduction-to-nextjs-part-3/    
<br />

【日本一わかりやすいNext.js入門】#6-1 Dynamic Routesの設定<br />
前半<br />
https://www.youtube.com/watch?v=x0ayN-ysbsI&list=PLX8Rsrpnn3IUGEyanrHYGjY1WOzNe7Jd-&index=7  

後半<br />
https://www.youtube.com/watch?v=reLc17m-toY&list=PLX8Rsrpnn3IUGEyanrHYGjY1WOzNe7Jd-&index=8  

---

## ディレクトリ構成

```
/home
└ nsmr
  └ develop
     └ next-learn
        └ next003
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
npx create-next-app next003 --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/dynamic-routes-starter"
```

2. 下記ファイルの準備と編集

- `public/images/profile.jpg` を好きな画像に変更する。  
 (400px width/heightを推奨)  

- `components/layout.js` ファイル内の`const name = '[Your Name]'` を好きに変更する。

- `pages/index.js` ファイルの `<p>[Your Self Introduction]</p>` を好きに編集する。  

「Pre-rendering」と同じようなブログを例にすすめる。  
個別ページを追加する。  


## 目次

1. Dynamic Routes用ファイルを作成する
2. ファイル名からIDを取得する関数を作る
3. getStaticPropsで静的なファイルを生成する
4. 動的URLでページを表示する(getStaticProps())
5. Markdownをレンダリング
6. ページの表示を整える
7. Catch-all Routesを使用する

このチュートリアルでは、`posts`ディレクトリに存在しているmdファイルを使用し、`/posts/ssg-ssr`と`/posts/pre-rendering`ページを生成する。  
<br >


## 1. Dynamic Routes用ファイルを作成する

ファイル名に`[]`をつけるとDynamic Routesになる

```
pages/posts/[id].js
 ├ https://example.com/posts/pre-rendering
 └ https://example.com/posts/ssg-ssr
```

↑ここのidは動的な値となる。  
まずURLを決めないと静的サイトジェネレーションが作成できない。  

### ●外部データに依存したパスとpre-renderページ

`next build`実行  
↓  
外部データを取得  
```
[
   {id: "foo", ...},
   {id: "bar", ...},
]
```
↓  
ページを生成  
/posts/[id]　→ /posts/fooと/posts/bar が生成される。  
<br>


## 2. ファイル名からIDを取得する関数を作る

`getStaticPaths()`を用いる場合、返却するパラメータには必ず`params`キーを追加し、その配下に`id`キーを作成すること。

## 3. getStaticPaths()で静的ファイルを生成

`getStaticPaths()`はNext.jsが用意している特別なメソッド。  

- pathsとfallbackを返却するオブジェクト型を返却する。
- pathsは事前ビルドするパス対象を指定するパラメータ。
- fallbackは事前ビルドしたパス以外にアクセスしたときの動作

```
export async function getStaticPaths() {
   const paths = getAllPostIds();
   return {
      paths,
       // falseを指定した場合、pathsに存在しないパスは404を返却する
       // 404を返さずに専用ページを返却したい場合も、fallbackで指定する
       fallback: false
   }
}
```

```
// pathsの値
[
   {params: {id: 'bar'}},
   {params: {id: 'foo'}},
]
```

## 4. 動的URLでページを表示する(getStaticProps())

---

## 5. Markdownをレンダリングする

Markdown をレンダリングするには`Remark`というライブラリが使用できる。  
  
```
npm install remark remark-html
```

↓↓  
lib/posts.js を更新する  

```
export function getPostData() {
↓↓
export async function getPostData() {
```

↓↓  
pages/posts/[id].js を更新する

```
const postData = getPostData(params.id);
↓↓
const postData = await getPostData(params.id);
```

**※重要**  
`async`、`await`のキーワードがついたのは、remarkが非同期処理(async/await)のため。  

↓↓  
pages/posts/[id].js を更新する  

```
<div dangerouslySetInnerHTML={{__html:postData.contentHtml}} />
```

**dangerouslySetInnerHTML()**  
https://ja.reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml

```
dangerouslySetInnerHTML は、ブラウザ DOM における innerHTML の React での代替です。一般に、コードから HTML を設定することは、誤ってあなたのユーザをクロスサイトスクリプティング (XSS) 攻撃に晒してしまいやすいため、危険です。そのため、React では直接 HTML を設定することはできますが、それは危険であることを自覚するために dangerouslySetInnerHTML と入力し __html というキーを持つオブジェクトを渡す必要があります。
```

## 6. ページの表示を整える

1. Headコンポーネントを使用し、titleタグを追加する

pages/posts/[id].js  
```
import Head from 'next/head'

＜中略＞
<Layout>
  <Head>
    <title>{postData.title}</title>
  </Head>
```

2. 日付フォーマットを整形するライブラリをインストール。

```
npm install date-fns
```

↓↓  
`components/date.js` を作成。内容はチュートリアルの内容をコピペ。

↓↓ 
pages/posts/[id].js を編集
```
// date.jsをインポート
import Date from '../../components/date'

export default function Post({postData}) {
    return (
～中略～
        {postData.date}
        ↓↓
        <Date dateString={postData.date} />
```

↓↓
pages/posts/[id].js にスタイルをインポート
```
import utilStyles from '../../styles/utils.module.css';
```

↓↓  
postHTMLを整形


## 7. Catch-all Routesを使用する

Dynamic routes を使用するファイルは`[id].js`という名前で作成してきたが、対応するURIは`/posts/a`や`/posts/b`などの１つ(idが1つ)のみだった<br />
↓↓  
`[...id].js`というふうに、ドット３つにすることによって、`/posts/a/b`や`/posts/a/b/c`にも対応が可能。<br />
ただし、`getStaticPaths()`にてidキーとして配列で渡す必要がある。

```
return [
  {
    params: {
      // Statically Generates /posts/a/b/c
      id: ['a', 'b', 'c']
    }
  }
  //...
]
```

---

## etc

### Router

`next/router` というのがある

### 404

カスタム404ページを作成したい場合、`pages`ディレクトリに`404.js`を作成。
