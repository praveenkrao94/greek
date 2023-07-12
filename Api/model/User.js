const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true
    },
    password:String,
    phone:Number,
    email:String
},{
    timestamps:true
})

module.exports  = mongoose.model("User" , UserSchema)