const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Table = require('../models/tableModel')

router.post("/register" , async(req, res) =>{
    const { currentUser } = req.body

    Table.find({email :  req.body.email} , (err,docs)=>{
        if (docs.length>0){
            return res.status(400).json({message : 'something went wrong'})
        }
        else{

            const newtable = new Table({
                name : req.body.name ,
                email : req.body.email,
                members : req.body.members ,
                date : req.body.date ,
                phonenumber : req.body.phonenumber,
                time : req.body.time,
                otp : req.body.otp,
                restaurant : req.body.restaurant,
                restaurantemail  : req.body.restaurantemail,
                tableavailable : "Getting Confirmation from Restuarant",
                
            })
        
            newtable.save(err=>{
                
                if(!err)
                {
                    res.send('User Table Registration success')
                }
                else{
                    res.send('Something went wrong')
                }
            })
         }
         if(err){
            return res.status(400).json({message : 'something went wrong'})
         }
    })

    
});

router.post("/updatetable", (req, res) => {

    Table.findByIdAndUpdate(req.body.tableid , {
        name : req.body.updatedtable.name,
        tableavailable : req.body.updatedtable.tableavailable,
    } , (err)=>{

        if(err){
            return res.status(400).json({ message: 'Something went wrong'+err });
        }
        else{
            res.send('Table Updated Successfully')
        }

    })
  
});
router.get("/getalltables", (req, res) => {
  
    Table.find({} , (err , docs)=>{

        if(err){
            return res.status(400).json({ message: 'something went wrong' });
        }
        else{
           res.send(docs)
        }
        
    })

});

router.post("/deletetable", (req, res) => {

    Table.findByIdAndRemove(req.body.tableid , (err)=>{

        if(err){
            return res.status(400).json({ message: 'Something went wrong' });
        }
        else{
            res.send('Table deleted successfully')
        }

    })
  
});
router.post("/gettablebyid", (req, res) => {

    Table.find({_id : req.body.tableid} , (err , docs)=>{

        if(!err)
        {
            res.send(docs[0])
        }
        else{
            return res.status(400).json({ message: 'something went wrong' });
        }

    })
  
});

router.post("/gettablesbyuserid", (req, res) => {

    const email = req.body.email
    
    Table.find({email : email} , (err , docs)=>{

        if(err){
            return res.status(400).json({ message: 'something went wrong' });
        }
        else{
            res.send(docs)
        }

    })
  
});

module.exports = router