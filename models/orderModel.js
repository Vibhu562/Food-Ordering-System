const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({

 
    userid : {
        type:String,
        require
    },
    name : {
        type:String,
        require
    },
    email : {
        type:String,
        require
    },
    orderItems:[{
        name : { type:String , require},
        quantity : { type:Number, require},
        platter :{ type:String , require},
        _id : { type:String , require} , 
        price : { type:Number, require},
        otp :{ type:Number, require},
        name1 :{type:String ,require},
        currentUser :{type:String ,require},
        totalprice :{ type:Number, require},
        time : {type:String ,require},
        currentUserphonenumber :{ type:Number, require},
        date :{type:String ,require},
        phonenumber :{ type:Number, require},
    }] , 
    shippingAddress : { 

        address : { type:String , require},
        city : { type:String , require},
        postalCode : { type:Number, require},
        country : { type:String , require}

    } , 
    orderAmount : { type:Number, require} ,
    transactionId : { type:String , require} ,
    isDelivered : { type:String, require},
    arrival : { type:String , require},
    restaurantemail :{type:String , require},
    date :{type:String , require},
    time : {type:String , require},
    isConfirmed :{ type:String, require},
    deletes :{type:Boolean,require},
    deliveryboyname :{type:String , require},
    deliveryboyphonenumber :{type:String , require},
    otp:{type:String,require},
    cancel:{type:Boolean,require},
    paymentlink:{type:String,require},
    uid:{type:String,require},


} , {
    timestamps : true
})

const Ordermodel = mongoose.model('orders' , orderSchema)

module.exports = Ordermodel