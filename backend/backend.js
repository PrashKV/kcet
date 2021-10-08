require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const { getStudentsByName, getStudentByRoll, getStudents, studentResult } = require('./controller');
const app = express();
const cors = require('cors')
const path= require('path')

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(() => {
    console.log("DB CONNECTED")
}).catch(() => {
    console.log("DB NOT CONNECTED!")
})

//middleware
app.use(express.json())
app.use(cors())

//params
app.param("nameSearch", getStudentsByName)
app.param("roll", getStudentByRoll)

//routes


app.get("/getStudents/:nameSearch", getStudents)
app.get("/getStudents", (req, res) => {
    res.status(400).send([
        "Search something!"
    ])
})
app.get("/result/:roll", studentResult )

const port = process.env.PORT || 8000

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "frontend", "build")))
}
app.listen(port, () => {
    console.log(`App is running at ${port}, DATABASE`, process.env.MONGODB_URI)
})


