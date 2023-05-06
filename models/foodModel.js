const mongoose = require("mongoose");
const reviewSchema =  mongoose.Schema({
    userid :{
        type:  mongoose.Schema.Types.ObjectId
    },
    name : {
        type: String,
        require: true
    },
    comment : {
        type : String
    },
    rating : {
        type: Number,
        require: true,
        default : 0
    },
    sentimentScore :{
        type: Number,
        require: true,
        default : 0
    },
},{
    timeStamps :true
})
const foodSchema = mongoose.Schema({
    name : {
        type:String,
        require: true
    },
    image :{
        type:String,
        require: true
    },
    calories : {
        type:Number,
        require: true
    },
    disease :{
        type:String,
        require: true
    },
    description :{
        type:String,
        require: true
    },
    description1 :{
        type:String,
        require: true
    },
    vitamin :{
        type:String,
        require: true
    },
    countInStock :{
        type:Number,
        require: true
    },
    num_orders:{
        type:Number,
        require: true
    },
    totalstock:{
        type:Number,
        require: true
    },
    price :{
        type:Number,
        require: true
    },
   
  
    category :{
        type:String,
        require: true
    },
    rating :{
        type:Number,
        require: true,
        default : 0
    },
    sentimentScore :{
        type: Number,
        require: true,
        default : 0
    },
    platter :{
        type:String,
        require: true,
    },
    email :{
        type:String,
        require: true,
    },
    reviews : [reviewSchema]

},{
    timeStamps:true
})

const food = mongoose.model('foods', foodSchema)

module.exports = food