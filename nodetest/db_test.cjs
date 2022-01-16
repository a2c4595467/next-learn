//import Const from "const/Const.js";

const mysql = require('mysql2');

const db_setting = {
    host: 'mymst',
    user: 'myuser',
    password: 'mypass',
    database: 'test',
//    port: 3201
    port: 3306
};

let mycon = null;

(async() => {
    try {
        mycon = await mysql.createConnection(db_setting);
        mycon.connect(function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log('connection success');
            }
        });
    } catch(e) {
        console.log(e);
    }

    // 接続状態
    if (mycon) {
        console.log('-- start SELECT query ---');
        // preparedステートメント
        const d = [1, 'abc'];
        const sql = 'SELECT '
            + ' * '
            + ' FROM '
            + ' users '
            + ' WHERE '
            + ' id=?'
            + ' AND account_name=?';
        mycon.execute(sql, d, function(err, results, fields){
            console.log(results);
            console.log(fields);
        });

        console.log('-- start INSERT query ---');
        // preparedステートメント
        const d2 = ['ooooo', '山本太郎'];
        const sql2 = 'INSERT INTO '
            + ' users ('
            + ' account_name'
            + ',name'
            + ') VALUES ('
            + '?, ?'
            + ')';

            mycon.execute(sql2, d2, function(err, results, fields){
            console.log(results);
            console.log(fields);
        });


    }

    if (mycon) {
        mycon.end();
    }
})();

