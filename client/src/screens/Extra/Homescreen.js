import React from "react";
import { Card, ListGroupItem, ListGroup, Button } from "react-bootstrap";
import foodImage from '../../photo/food_placeholder.jpg';
import restaurantImage from '../../photo/restaurant_placeholder.jpg';
import ScrollToTop from "react-scroll-to-top";
export default function Homescreen() {
  return (
    <div >
      <span className="row justify-content-evenly m-5">
        <div className="col-6 bg shadow-lg" style={{ width: "30rem",background: "white" }}>
          <div className="card-body">
    <h5 className="text-start display-6 mb-4 fw-bold text-dark">RESTAURANTS</h5>
    <p className="text-start fs-5 mb-2">Browse you nearby restaurants that are serving delicious food right now</p>
  </div>
  <div className="card-body   d-flex justify-content-center">
   <button  className="btna "> 
   <a href ="/restaurant" style={{textDecoration:"none" ,color:"black"}} >  Go to restaurants</a>
   </button>
  </div>
</div>
<div className="col-6 bg shadow-lg" style={{ width: "30rem",background: "white" }}>
  <div className="card-body">
    <h5 className="text-start display-6 mb-4 fw-bold text-dark">RECIPES</h5>
    <p className="text-start fs-5 mb-2"> Browse from hundreds of delicious food items and recipes</p>
  </div>  
  <div className="card-body d-flex justify-content-center">
   <button className="btna" > 
   </button>
  </div>
</div>
</span>
<ScrollToTop smooth />
 </div>     
  );
}
