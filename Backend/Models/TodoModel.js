const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
    NAME:{type:String,required:true},
    TEMPLATE:{type:String,required:true},
    VISIBILITY:{type:Boolean,default:false},
    Author:{type:mongoose.Schema.Types.ObjectId, ref: 'user'},
    Client:{type: mongoose.Schema.Types.ObjectId, ref: 'client'},
})

const TodoModel = mongoose.model("Todo",TodoSchema);

module.exports = TodoModel
