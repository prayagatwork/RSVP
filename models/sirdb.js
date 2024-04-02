const mongoose = require('mongoose');

const UserSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    RoomNo:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
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