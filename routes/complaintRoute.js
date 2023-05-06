const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Complaint = require('../models/complaintModel')

router.post("/register" , async(req, res) =>{
    const { currentUser } = req.body

    

            const newcomplaint = new Complaint({
                name : req.body.name ,
                email : req.body.email,
                orderid : req.body.orderid ,
                date : req.body.date ,
                time : req.body.time,
                phonenumber : req.body.phonenumber,
                complaints : req.body.complaints,
                restaurant : req.body.restaurant,
                restaurantemail  : req.body.restaurantemail,
                complainstatus : "Getting Complain update from Restuarant",
                deletes : false,
            })
        
            newcomplaint.save(err=>{
                
                if(!err)
                {
                    res.send('User Complaint Registration success')
                }
                else{
                    res.send('Something went wrong')
                }
            })
         
        
    })

    


router.post("/updatecomplaint", (req, res) => {

    Complaint.findByIdAndUpdate(req.body.complaintid , {
        name : req.body.updatedcomplain.name,
        complainstatus : req.body.updatedcomplain.complainstatus,
        deletes : req.body.updatedcomplain.deletes,
    } , (err)=>{

        if(err){
            return res.status(400).json({ message: 'Something went wrong'+err });
        }
        else{
            res.send('Complaint Updated Successfully')
        }

    })

});
router.get("/getallcomplaints", (req, res) => {
  
    Complaint.find({} , (err , docs)=>{

        if(err){
            return res.status(400).json({ message: 'something went wrong' });
        }
        else{
           res.send(docs)
        }
        
    })

});

router.post("/deletecomplaint", (req, res) => {

    Complaint.findByIdAndRemove(req.body.complaintid , (err)=>{

        if(err){
            return res.status(400).json({ message: 'Something went wrong' });
        }
        else{
            res.send('Complain deleted successfully')
        }

    })
  
});
router.post("/getcomplaintbyid", (req, res) => {

    Complaint.find({_id : req.body.complaintid} , (err , docs)=>{

        if(!err)
        {
            res.send(docs[0])
        }
        else{
            return res.status(400).json({ message: 'something went wrong' });
        }

    })
  
});

router.post("/getcomplaintsbyuserid", (req, res) => {

    const email = req.body.email
    
    Complaint.find({email : email} , (err , docs)=>{

        if(err){
            return res.status(400).json({ message: 'something went wrong' });
        }
        else{
            res.send(docs)
        }

    })
  
});

module.exports = router