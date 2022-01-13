const mongoose = require("mongoose")

var schema = new mongoose.Schema({
    user:{
        type:String,
        required:true
    },    
    username:{
        type:String,
        required:true
    },    
})

const User = mongoose.model("User",schema)

module.exports = User