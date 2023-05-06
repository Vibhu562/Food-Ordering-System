const express = require("express");
const Restaurant = require("../models/restaurantModel");
const router = express.Router();

router.get("/getallrestaurants", (req, res) => {

    Restaurant.find({} , (err , docs)=>{

              if(!err)
              {
                  return res.send(docs);
              }
              else{
                  return res.status(400).json({ message: 'Something went wrong' });
              }
    }) 
});

router.post("/getrestaurantbyid", (req, res) => {

    Restaurant.find({_id : req.body.restaurantid} , (err , docs)=>{

        if(!err)
        {
            res.send(docs[0])
        }
        else{
            return res.status(400).json({ message: 'something went wrong' });
        }

    })
  
});

router.post("/addrestaurant", (req, res) => {

    const {restaurant} = req.body

    console.log(restaurant);

    const restaurantModel = new Restaurant({
        name : restaurant.name , 
        location : restaurant.location,
        location1:restaurant.location1,
        latitude : restaurant.latitude,
        description : restaurant.description,
        description1 : restaurant.description1,
        longitude : restaurant.longitude,
        image : restaurant.image ,
        totalorders : restaurant.totalorders,
        timing : restaurant.timing,
        phonenumber : restaurant.phonenumber,
        email : restaurant.email,
        amenitites : restaurant.amenitites,
        restaurantstatus : restaurant.restaurantstatus,
        tablestatus : restaurant.tablestatus,
        approval : restaurant.approval,


    })

    restaurantModel.save(err=>{
        if(err){
            return res.status(400).json({ message: 'Something went wrong' });
        }else{
            res.send('Restaurant Added Successfully')
        }
    })
  
});

router.post("/updaterestaurant", (req, res) => {

    Restaurant.findByIdAndUpdate(req.body.restaurantid , {
        name : req.body.updatedrestaurant.name,
        latitude : req.body.updatedrestaurant.latitude,
        location1 : req.body.updatedrestaurant.location1,
        longitude : req.body.updatedrestaurant.longitude,
        location : req.body.updatedrestaurant.location,
        description : req.body.updatedrestaurant.description,
        description1 : req.body.updatedrestaurant.description1,
        image : req.body.updatedrestaurant.image,
        totalorders : req.body.updatedrestaurant.totalorders,
        timing : req.body.updatedrestaurant.timing,
        phonenumber : req.body.updatedrestaurant.phonenumber,
        email : req.body.updatedrestaurant.email,
        amenitites : req.body.updatedrestaurant.amenitites,
        tablestatus:req.body.updatedrestaurant.tablestatus,
        restaurantstatus:req.body.updatedrestaurant.restaurantstatus,
        approval : req.body.updatedrestaurant.approval,
        
    } , (err)=>{

        if(err){
            return res.status(400).json({ message: 'Something went wrong'+err });
        }
        else{
            res.send('Restaurant Updated Successfully')
        }

    })
  
});


router.post("/addreview", async(req, res) => {

    const {review , restaurantid , currentUser} = req.body

    const restaurant = await Restaurant.findById({_id :restaurantid})

    const reviewmodel = {
        name : currentUser.name,
        userid : currentUser._id ,
        rating : review.rating,
        ratinga : review.ratinga,
        ratingb : review.ratingb,
        comment : review.comment ,
    }

    restaurant.reviews.push(reviewmodel)
    var rating = restaurant.reviews.reduce((acc , x)=> acc + x.rating , 0) / restaurant.reviews.length
    var ratinga = restaurant.reviews.reduce((acc , x)=> acc + x.ratinga , 0) / restaurant.reviews.length
    var ratingb = restaurant.reviews.reduce((acc , x)=> acc + x.ratingb , 0) / restaurant.reviews.length


    restaurant.rating = (Number(rating) +Number(ratinga) + Number(ratingb))/3
    
    
    restaurant.save(err=>{
        if(err){
            return res.status(400).json({message :"Something Went Wrong" + err});
        }
        else{
            res.send("Review Submitted Successfully")
        }
    })

});
router.post("/deleterestaurant", (req, res) => {

    Restaurant.findByIdAndDelete(req.body.restaurantid , (err)=>{
        if(err){
            return res.status(400).json({ message: 'Something went wrong' + err});
        }else{
            res.send('Restaurant deleted successfully')
            
        }
    })
  
});
module.exports = router