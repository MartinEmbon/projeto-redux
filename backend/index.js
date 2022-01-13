const express = require("express")
const app = express()
const connectDB = require("./database/server")
const dotenv = require("dotenv")


dotenv.config({path:"config.env"})


connectDB()

app.listen(4000,(req,res)=>{
    console.log("backend on 4000")
})