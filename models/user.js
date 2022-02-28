const mongoose = require('mongoose');


//Created schema for the table/model
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
}, {
    timestamps:true
});

//Creating model or table based on that schema
const User = mongoose.model('User',userSchema);

//Exporting that model
module.exports = User;