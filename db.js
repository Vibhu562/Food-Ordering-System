const mongoose  = require("mongoose");

var mongoDBURL = 'mongodb+srv://vibhu:vibhu@cluster0.q8jpaxz.mongodb.net/food-recommendation';

mongoose.connect(mongoDBURL,{useUnifiedTopology:true , useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error' ,()=>{
    console.log("mongo failed");
} )

dbconnect.on('connected' ,()=>{
    console.log("mongo successful");
} )

module.exports = mongoose