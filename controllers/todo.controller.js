const Todo = require("../models/Todo")
exports.getAllTodos = async (req, res) => {
    const result = await Todo.find()
    res.json({ message: "todo fetch success", result })
}

exports.addTodos = async (req, res) => {
    // console.log(req.body)
    await Todo.create(req.body)
    res.json({ message: "todo add success" })
}

exports.updateTodos = async (req, res) => {
    //663b2f26b5913312379dbdca
    // console.log(req.params);
    await Todo.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "todo update success" })
}

exports.deleteTodos = async (req, res) => {
    //663b2e9cb5913312379dbdc7
    await Todo.findByIdAndDelete(req.params.id)
    res.json({ message: "todo delete success" })
}

