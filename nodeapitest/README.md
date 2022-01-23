# Node.jsとAPIの練習

### 参考URL

Node.js + Expressで超簡単API  
https://qiita.com/k-penguin-sato/items/5d0db0116843396946bd

---

## ディレクトリ構成

```
/ nodeapitest
   ├ api
   │├ controllers
   ││ └ taskController.js
   │├ models
   ││ └ taskModel.js
   │├ routes
   │  └ taskRoutes.js
   ├ node_modules
   ├ package-lock.json
   ├ package.json
   └ server.js
```

## 準備

### mongodb

コンテナを別途用意しておくこと。  
※MongoDBのデフォルトポートは27017だが、専用コンテナを用意して3203に変更。  

## 動作

### POST (http://localhost:3000/tasks)  

データ作成。JSON形式のデータボディを用意する。

```
{ "name": "test" }
```

### GET (http://localhost:3000/tasks)  

MongoDBのコレクションに登録されているデータを取得する。

### GET (http://localhost:3000/tasks/:id)  

MongoDBのコレクションに登録されているデータの中から、一意のデータを取得する。


### PUT (http://localhost:3000/tasks/:id)  

一意のデータを更新する。  

```
{ "name": "update name" }
```

### DELETE (http://localhost:3000/tasks/:id)  

一意のデータを削除する。  
