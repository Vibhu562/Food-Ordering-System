// Add to Cart 


export const addToCart=(food , quantity , restaurant , date , time)=>(dispatch , getState)=>{
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const cartItem = {
      name : food.name , 
      quantity : quantity,
      platter : food.platter,
      otp : currentUser.otp,
      currentUser : currentUser.name,
      name1: restaurant.name,
      phonenumber : restaurant.phonenumber,
      _id : food._id ,
      price : food.price ,
      countInStock : food.countInStock , 
      date : date,
      time : time,
      totalprice : food.price * quantity,
      currentUseraddress : currentUser.Address,
      currentUserphonenumber : currentUser.phonenumber,
    }

    dispatch({type : 'ADD_TO_CART' , payload : cartItem})
    localStorage.setItem('cartItems' , JSON.stringify(getState().cartReducer.cartItems))

}

//Delete From Cart
export const deleteFromCart=(item)=>(dispatch , getState)=>{

     dispatch({type:'DELETE_FROM_CART' , payload:item})
     localStorage.setItem('cartItems' , JSON.stringify(getState().cartReducer.cartItems))

}