const mongoose = require('mongoose');

const UserSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    RollNo:{
        type:String,
        required:true
    },
    Details:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    }
});
module.exports=new mongoose.model("User",UserSchema);