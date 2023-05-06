import React from 'react'
import { Link } from "react-router-dom";
import Rating from "react-rating";

export default function Restaurant({restaurant}) {
   
  function login(){
    if (localStorage.getItem('currentUser')){
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }
    else{
      alert("Please Login to view the restaurant screen")
        window.location.href = '/login'
       } 
      
  }

  return  (
    <div >
    <Link to={`/restaurant/menu/${restaurant._id}`} style={{ textDecoration: 'none',color:"black" }} onClick={login}>
      <img src={restaurant.image} style={{height: "400px" , width:"550px", borderRadius: "15px"}} className="img-fluid" alt="" />
      <h1 className='abcd text-start fs-5 mt-2 mb-2 fw-bold' >{restaurant.name}</h1>
      <h6 className='abcd text-start text-muted'>{restaurant.location}</h6>
      <div className='text-start'>
      <Rating
      initialRating={restaurant.rating}
      emptySymbol="fa fa-star fa-1x text-muted"
      fullSymbol="fa fa-star fa-1x text-warning"
      readonly={true} /> <nbsp></nbsp><nbsp></nbsp>{restaurant.rating.toFixed(1)}  
      </div>
    </Link>
  </div>
  
  )}