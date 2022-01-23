// クライアントのリクエストに応じて、
// どのようにアプリケーションが反応すべきかを定義。

module.exports = function(app) {
    var taskList = require('../controllers/taskController');

    // /tasks での処理
    app.route('/tasks')
        // getリクエストを受け取ると、api/controllers/taskContlerに定義された
        // all_tasksを実行する。
        .get(taskList.all_tasks)
        // postリクエストを受け取ると、create_taskを実行する。
        .post(taskList.create_task);

    app.route('/tasks/:taskId')
        .get(taskList.load_task)
        .put(taskList.update_task)
        .delete(taskList.delete_task);
};
