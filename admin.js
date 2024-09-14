const express = require ('express')
const mongoose= require('mongoose');

//schema
const adSchema=mongoose.Schema({
    username:{
        type:String,
    },
    password:{
        type:String
    }
})


//model
const Admin=mongoose.model("admin",adSchema);
module.exports=Admin

