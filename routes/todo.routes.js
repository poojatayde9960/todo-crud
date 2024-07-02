const router = require("express").Router()

const todoController = require("./../controllers/todo.controller")

router.get("/", todoController.getAllTodos)
router.post("/add", todoController.addTodos)
router.put("/update/:id", todoController.updateTodos)
router.delete("/remove/:id", todoController.deleteTodos)

module.exports = router