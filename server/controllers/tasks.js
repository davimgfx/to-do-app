const Task = require("../models/Task");

async function getAllTasks(req, res) {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(404).json({ msg: err });
  }
}

async function createTask(req, res) {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
}

async function getTask(req, res) {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `Task not found with id ${taskID}` });
    }
    res.status(200).json({ task: null, status: "success" });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
}

async function updateTask(req, res) {
  try {
    const { id: taskID } = req.params;

    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) { 
      return res.status(404).json({ msg: `Task not found with id ${taskID}` });
    }

    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
}

async function deleteTask(req, res) {
  try {
    const { id: taskID } = req.params;
    const deleteTask = await Task.findOneAndDelete({ _id: taskID });
    if (!deleteTask) {
      return res.status(404).json({ msg: `Task not found with id ${taskID}` });
    }
    res.status(200).json({ deleteTask });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
