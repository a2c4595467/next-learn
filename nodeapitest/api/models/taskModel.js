const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name: {
        type: String,
        required: "enter the name of the task"
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Tasks", TaskSchema);

