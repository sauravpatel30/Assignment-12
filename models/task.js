const mongooose = require("mongoose");

// Task Schema
const taskSchema = mongooose.Schema({
  titel: String,
  date: String,
  remender: Boolean,
});

const taskModel = mongooose.model("task", taskSchema, "task");
module.exports = taskModel;