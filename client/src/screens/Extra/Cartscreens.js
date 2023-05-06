// Cart Screen 
import React,{useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart , deleteFromCart} from "../../actions/cartActions";
import { useNavigate } from 'react-router-dom';
import Checkout from "../../components/Payment/Checkout";
import Downloadpage from "../../components/Downloadpage";
import { updateRestaurant ,getRestaurantById} from "../../actions/restaurantAction";

export default function Cartscreens() {
  const [checkout , setCheckOut] = useState(false);
  const cartreducerstate = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch()
  const { cartItems,loading,error } = cartreducerstate;
  var subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity) , 0)
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  var today = new Date();
  const  time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  const getrestaurantbyidstate = useSelector( state => state.getRestaurantByIdReducer );
  const { restaurant } = getrestaurantbyidstate;
  function x (){
    alert("Kindly cross check your cart before payment")
  }

//
const [totalorders, settotalorder] = useState();

//
useEffect(() => {
  if (restaurant) {
    if (restaurant._id == restaurant._id) {
      settotalorder(restaurant.totalorders);
    
    } else {
      dispatch(getRestaurantById(restaurant._id));
    }
  } else {
    dispatch(getRestaurantById(restaurant._id));
  }
}, [dispatch, restaurant._id,restaurant._id]);

function editrestaurant(e) {
  e.preventDefault();
  const updatedrestaurant = {    
    totalorders:totalorders - 1,
  };
  dispatch(updateRestaurant(restaurant._id, updatedrestaurant));
 
}
//
    
  const navigate = useNavigate();

   
  return  (
    <div className="table-responsive  me-3 ms-3 mt-2 shadow p-3 mb-5 bg-white rounded " id ="pagetodownload">
<h2 className="mt-2">{restaurant.name} Cart</h2>
      <div className="row mt-5 justify-content-center">
        <div className="col-md-12  ">
            <h2 className="text-center m-2 me-4" style ={{display:"inline"}}> MY CART</h2>
            <button onClick={() => navigate(-3)} style ={{display:"inline"}} className="mb-2 btn btn-primary" >Go back</button>
        <table className="table  table-striped ">
            <thead>
            <tr>
              <th> Restaurant Name </th>
              <th>Platter type</th>
                <th>Name</th>
                <th>Quantity</th>
            </tr>
            </thead>
            <tbody>
                {cartItems.map(item=>{
                    return (item.platter == ''
                    ?(' Combination of Platter and Normal Food item is not Possible'):(<tr >    
                        <td>{item.name1}</td>
                        <td>{item.platter}</td>
                          <td  >{item.name}</td>
                          <td>{item.quantity}
                          </td>
                                      
                      </tr>)) 
                    
                })}
                <tr style={{backgroundColor : "lightgreen"}}>
                  <td></td>
                  <td className="fw-bold">Total amount -</td>
                  <td></td>
                  <td className="fw-bold"> ₹{ parseFloat(subtotal).toFixed(2) }
                  </td>
                </tr>
            </tbody>
        </table>
        <hr/>
        {restaurant.restaurantstatus  ==""?(
        <div>
          <h2>Price :- {subtotal} RS/-</h2>
          <form onSubmit={editrestaurant}>
        <Checkout  amount = {subtotal} restaurantemail={restaurant.email} className="mb-2" />
        </form>
        </div>):( <div></div>)}
      </div>
      <Downloadpage rootElementid="pagetodownload" downloadFileName="textpage" className="mt-2"></Downloadpage>

      </div>
    </div> 
    )
  
}
