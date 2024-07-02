const express = require("express")
require("dotenv").config()
const cors = require("cors")

const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URL)
const app = express()
app.use(express.json())
app.use(cors())
app.use("/api/todos", require("./routes/todo.routes"))
app.use((req, res) => {
    res.status(404).json({ message: "Resource Not Found" })
})

mongoose.connection.once("open", () => {
    console.log("MONGO_CONNECTED")
    app.listen(process.env.PORT, console.log("SERVER RUNNING"))
})