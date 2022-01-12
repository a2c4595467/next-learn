# Next.jsの練習 (Atomic Design)

### 参考URL

Atomic Design を分かったつもりになる  
https://design.dena.com/design/atomic-design-%E3%82%92%E5%88%86%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%A4%E3%82%82%E3%82%8A%E3%81%AB%E3%81%AA%E3%82%8B


---

## ディレクトリ構成

```
/home
└ nsmr
  └ develop
     └ next-learn
        └ next006
           ├ components
           │├ atoms
           │├ molecules
           │├ organisms
           │├ templates
           │└ pages
           ├ node_modules
           ├ package-lock.json
           ├ package.json
           ├ pages
           │└ members
           │  └ [memberNo].js
           ├ public
           └ styles
```

## 準備

1. next-learn ディレクトリ内で下記コマンドを実行。

```
npx create-next-app next006 --use-npm
```
<br>

