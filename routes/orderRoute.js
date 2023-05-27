const {v4 : uuidv4} = require('uuid')
const express = require("express");
const router = express.Router();
const stripe = require("stripe")("sk_test_51JXN8ASGX65UtClKPbtOS5wOvP7HKw9eLxeJjQlotGkat3vyjR8YeFiVfIVCWXSDdBLqU0kyXPL1S7iHaksNo0JF00pnx6HRq9")
const Order = require('../models/orderModel')
router.post("/placeorder", async(req, res) => {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const {token , cartItems , currentUser , subtotal,restaurantemail} = req.body

    const customer = await stripe.customers.create({
        email : token.email , 
        source : token.id
    })

    const payment = await stripe.charges.create({
          amount : subtotal*100 , 
          currency : 'inr' , 
          customer : customer.id , 
          receipt_email : token.email,
         
    } , {
        idempotencyKey: uuidv4()
    })


    if(payment)
    {
        const order = new Order({  
              userid : currentUser._id ,
              name : currentUser.name,
              email : currentUser.email ,
              orderItems : cartItems ,
              shippingAddress : {
                  address : token.card.address_line1 ,
                  city : token.card.address_city,
                  country : token.card.address_country,
                  postalCode : token.card.addres_zip
              },
              orderAmount : subtotal,
              restaurantemail :restaurantemail,
              transactionId : payment.source.id ,
              isDelivered : "Delivery confirmation",
              arrival : "Arrival Status",
              deliveryboyname : "",
              date : date,
              time : time,
              deletes : false,
              isConfirmed : "Getting confirmation from Restaurant",
              deliveryboyphonenumber : "",
              otp:"",
              cancel:false,
              paymentlink:"",
              uid:"",
        })

        order.save(err=>{

            if(err)
            {
                return res.status(400).json({ message: 'Something went wrong' });
            }
            else{
                res.send('Order Placed Successfully')
            }

        })
    }
    else{
        return res.status(400).json({ message: 'Payment failed' });
    }
  
});


router.post("/getordersbyuserid", (req, res) => {

    const userid = req.body.userid

    Order.find({userid : userid} , (err , docs)=>{

        if(err){
            return res.status(400).json({ message: 'something went wrong' });
        }
        else{
            res.send(docs)
        }

    })
  
});


router.post("/getorderbyid", (req, res) => {

    const orderid = req.body.orderid

    Order.find({_id: orderid} , (err , docs)=>{

        if(err){
            return res.status(400).json({ message: 'something went wrong' });
        }
        else{
            res.send(docs[0])
        }

    })
  
});


router.get("/getallorders", (req, res) => {

    Order.find({} , (err , docs)=>{

        if(err){
            return res.status(400).json({ message: 'something went wrong' });
        }else{
             res.send(docs)
        }

    })
  
});

router.post("/deleteorder", (req, res) => {

    Order.findByIdAndDelete(req.body.orderid , (err)=>{
        if(err){
            return res.status(400).json({ message: 'Something went wrong' + err});
        }else{
            res.send('Order deleted successfully')
            
        }
    })
  
});
router.post("/updateorder", (req, res) => {
    Order.findByIdAndUpdate(req.body.orderid , {
        arrival : req.body.updatedorder.arrival,
        isDelivered : req.body.updatedorder.isDelivered,
        isConfirmed : req.body.updatedorder.isConfirmed,
        deletes : req.body.updatedorder.deletes,
        deliveryboyname : req.body.updatedorder.deliveryboyname,
        deliveryboyphonenumber : req.body.updatedorder.deliveryboyphonenumber,
        paymentlink : req.body.updatedorder.paymentlink,
    

    } , (err)=>{
        if(err){
            return res.status(400).json({ message: 'Something went wrong'+err });
        }
        else{
            res.send('Order Updated Successfully')
        }
    })
});
router.post("/updatebyorder", (req, res) => {
    Order.findByIdAndUpdate(req.body.orderid , {
        arrival : req.body.updatedorder.arrival,
       otp: req.body.updatedorder.otp,
       cancel : req.body.updatedorder.cancel,
       uid:req.body.updatedorder.uid,
    } , (err)=>{
        if(err){
            return res.status(400).json({ message: 'Something went wrong'+err });
        }
        else{
            res.send('Order Updated Successfully')
        }
    })
});

module.exports=router