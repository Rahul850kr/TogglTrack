const mongoose = require("mongoose");

const ClientSchema = mongoose.Schema({
    name:{type:String,required:true},
    clientofuser:{type:mongoose.Schema.Types.ObjectId, ref: 'user'},
})

const ClientModel = mongoose.model("client",ClientSchema);

module.exports = {
    ClientModel
}