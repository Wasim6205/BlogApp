const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const multer = require("multer")
const path = require("path")
const UserModel = require("./models/UserModel")

const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))
app.use(cookieParser())

mongoose.connect('mongodb://127.0.0.1:27017')
.then(() => console.log("db connection successfull"))
.catch(() => console.log("issue in db connection"))

app.post("/register", (req,res) => {
    UserModel.create({})
})

app.listen(3001, () => {
    console.log("Server is Running");
})