const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/taskModel'), // 作成したModelの読み込み
    bodyParser = require('body-parser');

    mongoose.Promise = global.Promise;
   mongoose.connect("mongodb://testuser:testpass@localhost:3203/test");
    // mongoose.connect("mongodb://testuser:testpass@localhost:27017/test");

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    const routes = require('./api/routes/taskRoutes');
    routes(app); // appにroutesを設定する

    app.listen(port); // app を特定のportでlistenさせる

    console.log('list RESTful API server started on:' + port);
    

