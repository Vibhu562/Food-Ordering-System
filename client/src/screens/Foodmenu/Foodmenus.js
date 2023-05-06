import {getRestaurantById} from '../../actions/restaurantAction';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Food from '../../components//Food/Food';
import {getAllFoods} from '../../actions/foodAction';
import Loader from '../../components/others/Loader'
import Error from '../../components/others/Error'
import { useParams } from "react-router-dom";
import Filtere from '../../components/Filter/Filtere';
import { Link } from "react-router-dom";
import './cart.css'
import './platter.css'
import Foodss from '../../components/Food/Foodss';
import Filteree from '../../components/Filter/Filteree';
export default function Foodmenus() {
    let { id } = useParams();
    const dispatch = useDispatch()
    const getfoodbyidstate = useSelector( (state) => state.getAllFoodsReducer);
    const { foods ,loading,error} = getfoodbyidstate;
    useEffect(() => {
        dispatch(getAllFoods());
    }, [dispatch])
    const getrestaurantbyidstate = useSelector( state => state.getRestaurantByIdReducer );
  const { restaurant } = getrestaurantbyidstate;
  const EMPTY_CART = { cartItems: [] }
  const cartreducer = useSelector((state) => state.cartReducer || EMPTY_CART);
  const { cartItems } = cartreducer

    // Triggered when the value gets updated while scrolling the slider:
    const [ calory, setcalories ] = useState(1000);
    const handleInput = (e)=>{
        setcalories( e.target.value );
      }  
  return (

    <div className='justify-content-center'>

      <br/>

      <div className='row justify-content-center'>
      <h3 className='col-md-9'> {restaurant.name} ({restaurant.location})</h3> 
      <h3>{restaurant.restaurantstatus}</h3>
      </div>

      <div class="floating-container">
      <Link className='col-md-1' to={`/restaurant/menu/${restaurant._id}/carts`}>
      <div class="floating-button"> <i className="fas fa-shopping-cart"></i>{cartItems.length}</div></Link>
      <div class="element-container">
      </div>
      </div>

      <Filteree />

      <div className='col mt-3 justify-content-center align-items-center'>
      <p className='text-center mb-0'>Calories Range</p>
      {/* <div className=" justify-content-center align-items-start ms-2 me-2"> */}
      <input className='text-dark fw-bold ' style={{background : "yellow"}} type="range" onInput={ handleInput } min={0} max = {1000} />
      {/* </div> */}
      <h2 className=''>{calory}</h2>
      </div>
  
      <div className='row justify-content-center align-items-start'>
 {loading ? (
     <Loader/>
      ) : error ? (
        <Error error='Something Went Wrong' />
      ) : ( 
        foods.filter( food => { return  food.calories <= parseInt(calory, 10) }).map((foods,i)=> {
        return (
          
          (restaurant.email == foods.email && (foods.platter == "southindian" || foods.platter =="northindian"
          || foods.platter =="specialmenu" || foods.platter =="chinese"
          ) &&  restaurant.totalorders > 0 ?
          ( <div className="col-md-3 m-2 p-2 mb-5 bg-white rounded" key={i}>
          <Foodss  food={foods}/>
             </div>   ): (''))
          
       )}
      ))}
     </div>
    </div>
  );
}
