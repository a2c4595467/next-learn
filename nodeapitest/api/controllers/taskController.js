const mongoose = require('mongoose'),
    Task = mongoose.model('Tasks');


// exports を使って、他のファイルから各メソッドを使用できるようにする

// すべてのタスクを取得する
exports.all_tasks = function(req, res) {
    Task.find({}, function(err, task) {
        if (err) res.send(err);
        res.json(task);
    });
};

// 新しいタスクを生成する
exports.create_task = function(req, res) {
    var new_task = new Task(req.body);
    new_task.save(function(err, task){
        if (err) res.send(err);
        res.json(task);
    });
};

// 特定のタスクを所得する
exports.load_task = function(req, res) {
    Task.findById(req.params.taskId, function(err, task) {
        if (err) res.send(err);
        res.json(task);
    });
};

// 特定のタスクを更新する
exports.update_task = function(req, res) {
    Task.findOneAndUpdate(
        {_id: req.params.taskId},
        req.body,
        {new: true},
        function(err, task) {
            if (err) res.send(err);
            res.json(task);
        }
    );
};

exports.delete_task = function(req, res) {
    Task.remove(
        { _id: req.params.taskId },
        function (err, task) {
            res.send(err);
            res.json({message: "task successfully deleted"});
        }
    );
};
