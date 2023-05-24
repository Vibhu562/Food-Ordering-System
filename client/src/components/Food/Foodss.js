import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart ,deleteFromCart} from "../../actions/cartActions";
import { Link } from "react-router-dom";

import { deleteFood ,getFoodById , updateFood} from "../../actions/foodAction";

export default function Foodss({ food }) {
  
  const[quantity , setquantity ] = useState(1)
  const dispatch = useDispatch()
 // Tulsi
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const getrestaurantbyidstate = useSelector( state => state.getRestaurantByIdReducer );
  const { restaurant } = getrestaurantbyidstate;
 //countinstock
 const [name, setname] = useState("");
 const [countInStock, setcountInStock] = useState();
 const[num_orders,setnum_orders]= useState();


 useEffect(() => {
  if (food) {
    if (food._id == food._id) {
      setname(food.name);
      setcountInStock(food.countInStock);
      setnum_orders(food.num_orders);
    } else {
      dispatch(getFoodById(food._id));
    }
  } else {
    dispatch(getFoodById(food._id));
  }
}, [dispatch, food._id]);
function editfood(e) {
  e.preventDefault();
  const updatedfood = {
    name: name,
    countInStock:countInStock-1,
    num_orders:num_orders+1,
  };
  dispatch(updateFood(food._id, updatedfood));
 
}
function editfoods(e) {
  e.preventDefault();
  const updatedfood = {
    name: name,
    countInStock: countInStock ,
    num_orders:num_orders-1,
  };
  dispatch(updateFood(food._id, updatedfood));
}
function addtocarts(){
  if (localStorage.getItem('currentUser')){
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
     alert("You have deleted " + quantity + +" "+ food.name  +" successfully from cart")
  }
  else{
    alert("Please Login to view your cart")
      window.location.href = '/login'
     } 
     dispatch(deleteFromCart(food));
    
}
 //
  function addtocart(){
    
    if (localStorage.getItem('currentUser')){
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
       alert("You have added "+ food.name +" successfully to cart")
    }
    else{
      alert("Please Login to view your cart")
        window.location.href = '/login'
       }
       dispatch(addToCart(food , quantity,restaurant,currentUser),)
  }
 
  return (
      <div className="justify-content-center" key={food._id} >
       
          <div style={{alignItems:"right"}} >
            <img src={food.image} style={{
              height: "400px" , width:"500px", objectFit: "cover", borderRadius: "15px",
              }} className="mb-2 img-fluid" alt="" />
          </div>
          <h1 className='abcd text-start fs-5 mt-2' >{food.name}</h1>
          
          <h1 className='abcd text-start text-muted fs-6 mb-2'>Calories - {food.calories}</h1>

          <div className="row justify-content-between">
          <button className="btn btn-dark col-md-3 me-1 mb-2" >
            <Link to={`/food/${restaurant._id}/${food._id}`}  style={{textDecoration: "none", color: "white"}}>Recipe</Link>
          </button>
          {food.countInStock > 0 && restaurant.restaurantstatus =="" ? (
          <form onSubmit={editfood} className="col-md-5 mb-2  btn-dark ">  <button className="btn  btn-dark qaz" style={{width :"100%"}}  onClick={addtocart}>Add to cart</button></form>):
          (<button className=" qazwsx btn btn-dark col-md-8 mb-2" disabled>Out of stock</button>)}
   
          { food.countInStock > 0 && restaurant.restaurantstatus =="" ? ( <select className="col-md-2 btn btn-dark ms-0  mb-2" value = {food.quantity} onChange={(e)=>{setquantity(e.target.value)}}>
               <option>1</option>;
          </select>) : (null
         )}
         {food.countInStock > 0 && restaurant.restaurantstatus =="" ? (
          <form onSubmit={editfoods} className=" qazwsx col-md-1 mb-2 ms-0 btn-dark" >  
          <button onClick={addtocarts} style ={{border: "none" , marginTop:"5px" , marginLeft:"5px"}}>
          <i
                    className="far fa-trash-alt"
                    style={{ padding: "2px" , marginTop:"3px"  }} 
                  >
                  </i></button>
                  </form>
                  ):
         (null)}
          </div>
      </div>
  );
}
