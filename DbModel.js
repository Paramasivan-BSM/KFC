let Mongoose = require("mongoose");

let achema = new Mongoose.Schema({
   name:{
    type:String
   },
   id:{
    type:Number
   }
})

let DataModel1 = Mongoose.model("a",achema);

module.exports = DataModel1;