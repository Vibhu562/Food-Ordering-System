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
    ratinga : {
        type: Number,
        require: true,
        default : 0
    },
    ratingb : {
        type: Number,
        require: true,
        default : 0
    },
    answer :{
        type : String,
    }
},{
    timeStamps :true
})
const restaurantSchema = mongoose.Schema({
    name : {
        type:String,
        require: true
    },
    image :{
        type:String,
        require: true
    },
    location : {
        type:String,
        require: true
    },
    location1 :{
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
    latitude :{
        type:String,
        require: true
    },
   
    longitude :{
        type:String,
        require: true
    },
    timing :{
        type:String,
        require: true
    },
    rating :{
        type:Number,
        require: true,
        default : 0
    },
    phonenumber :{
        type:Number,
        require: true,
    },
    email :{
        type : String,
        require : true,
    },
    restaurantstatus:{
        type : String,
        require : true,
    },
    tablestatus:{
        type : Number,
        require : true,
    },
    totalorders:{
        type : Number,
        require : true,
    },
    amenitites:{
        type : String,
        require : true,
    },
    approval:{
        type : Boolean,
        require : true,
    },
    reviews : [reviewSchema]

},{
    timeStamps:true
})

const restaurant = mongoose.model('restaurants', restaurantSchema)

module.exports = restaurant