let express = require("express");
let app = express();
let Mongoose = require("mongoose");
require("dotenv").config();

Mongoose.connect(process.env.MongoDB_String,{})
.then(()=>{
    console.log("Db Connected");
})
.then((e)=>{
    console.log(e);
})
require("./DbModel")

app.get("/",(req,res)=>{
    res.send("Vanakkam!")
})

app.listen(3000,"localhost",()=>{
    console.log("Server on");
})