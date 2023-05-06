const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema({
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
        date:{
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
    feedbacks:{
        type:String,
        require: true
    },
        
        restaurant :{
            type:String,
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

const Feedback = mongoose.model('feedbacks' , feedbackSchema)

module.exports = Feedback