const mongoose = require("mongoose");

const complaintSchema = mongoose.Schema({
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
        orderid :{
            type:String,
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
    complaints:{
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
        complainstatus:{
            type: String,
            require: true
        },
        restaurantemail:{
            type:String,
            require: true
        },
        time:{
            type:String,
            require: true
        },
        deletes:{
            type:Boolean,
            require:true
        },
      
} , {
    timestamps : true
})

const Complaint = mongoose.model('complains' , complaintSchema)

module.exports = Complaint