const moongose = require("mongoose");
const Schema = moongose.Schema

const restaurantSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    cuisine:{
        type:String,
        required:true
    },
},{timestamps:true})
module.exports=moongose.model("Restaurant",restaurantSchema)