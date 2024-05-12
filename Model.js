let Mongoose = require("mongoose");

let dataschema =  new Mongoose.Schema(
    {
        Name:{
            type:String
        },
        Email:{
            type:String
        },
        Msg:{
            type:String
        }
    }
)



let ModelData = Mongoose.model("dummy",dataschema)

module.exports = ModelData