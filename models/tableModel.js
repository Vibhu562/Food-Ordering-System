const mongoose = require("mongoose");

const tableSchema = mongoose.Schema({
    userid:{
        type: String,
        require: true
    },
        name : {
            type:String,
            require: true
        },
        email : {
            type:String,
            require: true
        },
        members :{
            type:Number,
            require: true
        },
        phonenumber : {
            type:Number,
            require: true
        },
        time :{
            type:String,
            require: true
        },
    otp:{
        type:String,
        require: true
    },
        date :{
            type:Date,
            require: true
        },
        restaurant :{
            type:String,
            require: true
        },
        tableavailable:{
            type: String,
            require: true
        },
        restaurantemail:{
            type:String,
            require: true
        },
      
} , {
    timestamps : true
})

const Table = mongoose.model('tables' , tableSchema)

module.exports = Table