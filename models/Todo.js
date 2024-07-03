const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    task: { type: String, required: true },
    desc: { type: String, required: true },
    priority: { type: Number, required: true },
    // priority: { type: String, required: true },
    // image: { type: String, required: true },
    // priority: { type: Number, required: true },
})

module.exports = mongoose.model("todo", todoSchema) 