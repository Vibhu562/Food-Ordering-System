const express = require("express");
const Food = require("../models/foodModel");
const router = express.Router();

router.get("/getallfoods", (req, res) => {

    Food.find({} , (err , docs)=>{

              if(!err)
              {
                  return res.send(docs);
              }
              else{
                  return res.status(400).json({ message: 'Something went wrong' });
              }
    }) 
});

router.post("/getfoodbyid", (req, res) => {

    Food.find({_id : req.body.foodid} , (err , docs)=>{

        if(!err)
        {
            res.send(docs[0])
        }
        else{
            return res.status(400).json({ message: 'something went wrong' });
        }

    })
  
});

router.post("/addfood", (req, res) => {

    const {food} = req.body

    console.log(food);

    const foodModel = new Food({
       
        name : food.name , 
        price : food.price,
        vitamin : food.vitamin,
        description : food.description,
        description1 : food.description1,
        calories : food.calories,
        image : food.image ,
        countInStock : food.countInStock,
        num_orders: food.num_orders,
        category : food.category,
        disease : food.disease,
        platter : food.platter,
        email : food.email,
        totalstock: food.totalstock,

    })

    foodModel.save(err=>{
        if(err){
            return res.status(400).json({ message: 'Something went wrong' });
        }else{
            res.send('Food Added Successfully')
        }
    })
  
});

router.post("/updatefood", (req, res) => {

    Food.findByIdAndUpdate(req.body.foodid , {
        name : req.body.updatedfood.name,
        calories : req.body.updatedfood.calories,
        vitamin : req.body.updatedfood.vitamin,
        description : req.body.updatedfood.description,
        description1 : req.body.updatedfood.description1,
        totalstock : req.body.updatedfood.totalstock,
        image : req.body.updatedfood.image,
        num_orders:req.body.updatedfood.num_orders,
        price : req.body.updatedfood.price,
        countInStock : req.body.updatedfood.countInStock,
        category : req.body.updatedfood.category,
        disease : req.body.updatedfood.disease,
        platter : req.body.updatedfood.platter,
        email : req.body.updatedfood.email,

    } , (err)=>{

        if(err){
            return res.status(400).json({ message: 'Something went wrong'+err });
        }
        else{
            res.send('Food Updated Successfully')
        }

    })
  
});

router.post("/addreview", async(req, res) => {

    const {review , foodid , currentUser} = req.body

    const food = await Food.findById({_id :foodid})

    const reviewmodel = {
        name : currentUser.name,
        userid : currentUser._id ,
        rating : review.rating,
        sentimentScore : review.sentimentScore,
        
    }

    food.reviews.push(reviewmodel)

    var rating = food.reviews.reduce((acc , x)=> acc + x.rating , 0) / food.reviews.length
    var sentimentScore = food.reviews.reduce((acc , x)=> acc + x.sentimentScore , 0) / food.reviews.length


    food.rating = Number(rating)
    food.sentimentScore = Number(sentimentScore)
    
    food.save(err=>{
        if(err){
            return res.status(400).json({message :"Something Went Wrong" + err});
        }
        else{
            res.send("Review Submitted Successfully")
        }
    })

});

router.post("/deletefood", (req, res) => {

    Food.findByIdAndDelete(req.body.foodid , (err)=>{
        if(err){
            return res.status(400).json({ message: 'Something went wrong' + err});
        }else{
            res.send('Food deleted successfully')
            
        }
    })
  
});
module.exports = router