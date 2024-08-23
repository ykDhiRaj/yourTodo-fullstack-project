const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        require:true
    }
},{timestamps:true});

module.exports = mongoose.model("Todo",todoSchema);