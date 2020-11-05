const mongoose = require("mongoose"),
const Task = mongoose.model("Tasks");

// 全てのタスクを取得する。
const all_tasks = async (req, res) => {
  await Task.find({})
  .exec()
  .then(tasks => {
    res.json(tasks)
  })
  .catch(err => {
    res.send(err)
  })
}

// 新しいタスクを作成する。
const create_task = async (req, res) => {
  const task = new Task()
  task.name = req.body.name
  task.Created_date = req.body.Created_date
  await task.save()
  .then(task => res.json(task))
  .catch(err => {
    res.send(err)
    console.error(err)
  })
}


// 特定のタスクを取得する。
const load_task = async (req, res) => {
  await Task.findById(req.params.taskId)
  .exec()
  .then(task => {
    res.json(task)
  })
  .catch(err => {
    res.send(err)
  })
}

// 特定のタスクを更新する。
const update_task = async (req, res) => {
  const result =  await Task.findById(req.params.taskId)
  .exec()
  .then(task => {
    task.name = req.body.name
    task.Created_date = req.body.Created_date
    return task
  })
  .catch(err => {
    res.send(err)
  })

  await result.save()
  .exec()
  .then(task => {
    res.json(task)
  })
  .catch(err => {
    res.send(err)
  })
}

// 特定のタスクを削除する。
const delete_task = async (req, res) => {
  await User.deleteOne({
    _id: req.params.taskId
  })
    .exec()
    .then(() => res.json({ message: "Successfully deleted"}))
    .catch(err => res.send(err))
}
export default taskControllers
