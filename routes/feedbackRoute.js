const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Feedback = require('../models/feedbackModel')

router.post("/register" , async(req, res) =>{
    const { currentUser } = req.body

    

            const newfeedback = new Feedback({
                name : req.body.name ,
                email : req.body.email,
                orderid : req.body.orderid ,
                date : req.body.date ,
                time : req.body.time,
                phonenumber : req.body.phonenumber,
                feedbacks : req.body.feedbacks,
                restaurant : req.body.restaurant,
                restaurantemail  : req.body.restaurantemail,
                deletes : false,
            })
        
            newfeedback.save(err=>{
                
                if(!err)
                {
                    res.send('User Feedback Registration success')
                }
                else{
                    res.send('Something went wrong')
                }
            })
         
        
    })

    


router.post("/updatefeedback", (req, res) => {

    Feedback.findByIdAndUpdate(req.body.feedbackid , {
        name : req.body.updatedcomplain.name,
        deletes : req.body.updatedcomplain.deletes,
    } , (err)=>{

        if(err){
            return res.status(400).json({ message: 'Something went wrong'+err });
        }
        else{
            res.send('Feedback Updated Successfully')
        }

    })

});
router.get("/getallfeedbacks", (req, res) => {
  
    Feedback.find({} , (err , docs)=>{

        if(err){
            return res.status(400).json({ message: 'something went wrong' });
        }
        else{
           res.send(docs)
        }
        
    })

});

router.post("/deletefeedback", (req, res) => {

    Feedback.findByIdAndRemove(req.body.feedbackid , (err)=>{

        if(err){
            return res.status(400).json({ message: 'Something went wrong' });
        }
        else{
            res.send('Feedback deleted successfully')
        }

    })
  
});
router.post("/getfeedbackbyid", (req, res) => {

    Feedback.find({_id : req.body.feedbackid} , (err , docs)=>{

        if(!err)
        {
            res.send(docs[0])
        }
        else{
            return res.status(400).json({ message: 'something went wrong' });
        }

    })
  
});

router.post("/getfeedbacksbyuserid", (req, res) => {

    const email = req.body.email
    
    Feedback.find({email : email} , (err , docs)=>{

        if(err){
            return res.status(400).json({ message: 'something went wrong' });
        }
        else{
            res.send(docs)
        }

    })
  
});

module.exports = router