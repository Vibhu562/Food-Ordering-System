import { getRestaurantById } from "../../actions/restaurantAction";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Food from "../../components//Food/Food";
import { getAllFoods } from "../../actions/foodAction";
import Loader from "../../components/others/Loader";
import Error from "../../components/others/Error";
import { useParams } from "react-router-dom";
import Filtere from "../../components/Filter/Filtere";
import { Link } from "react-router-dom";
import "./cart.css";
import "./platter.css";
export default function Foodmenu() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const getfoodbyidstate = useSelector((state) => state.getAllFoodsReducer);
  const { foods, loading, error } = getfoodbyidstate;
  useEffect(() => {
    dispatch(getAllFoods());
  }, [dispatch]);
  const getrestaurantbyidstate = useSelector(
    (state) => state.getRestaurantByIdReducer
  );
  const { restaurant } = getrestaurantbyidstate;
  const EMPTY_CART = { cartItems: [] };
  const cartreducer = useSelector((state) => state.cartReducer || EMPTY_CART);
  const { cartItems } = cartreducer;
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  // Triggered when the value gets updated while scrolling the slider:
  const [calory, setcalories] = useState(1000);
  const handleInput = (e) => {
    setcalories(e.target.value);
  };
  return time > "09:00"  ? (
    <div className="justify-content-center ">
      <br />

      <div className="row justify-content-center">
        <h3 className="col-md-9">
          {" "}
          {restaurant.name} ({restaurant.location})
        </h3>
      </div>
      <h3>{restaurant.restaurantstatus}</h3>

      <div class="floating-container">
        <Link
          className="col-md-1"
          to={`/restaurant/menu/${restaurant._id}/cart`}
        >
          <div class="floating-button">
            {" "}
            <i className="fas fa-shopping-cart"></i>
            {cartItems.length}
          </div>
        </Link>
        <div class="element-container"></div>
      </div>
      <div class="floating-containers">
        <Link
          className="col-md-1"
          to={`/restaurant/menu/${restaurant._id}/platter`}
        >
          <div class="floating-buttons"> Platter</div>
        </Link>
        <div class="element-containers"></div>
      </div>

      <Filtere />

      <div className="col mt-3 justify-content-center align-items-center">
        <p className="text-center mb-0">Calories Range</p>
        {/* <div className=" justify-content-center align-items-start ms-2 me-2"> */}
        <input
          className=""
          type="range"
          onInput={handleInput}
          min={0}
          max={1000}
        />
        {/* </div> */}
        <h2 className="">{calory}</h2>
      </div>

      <div className="row justify-content-center align-items-start">
        {loading ? (
          <Loader />
        ) : error ? (
          <Error error="Something Went Wrong" />
        ) : (
          foods
            .filter((food) => {
              return food.calories <= parseInt(calory, 10);
            })
            .map((foods, i) => {
              return restaurant.email == foods.email &&
                foods.platter == "" &&
                restaurant.totalorders > 0 ? (
                <div className="col-md-3 m-2 p-2 mb-5 bg-white rounded" key={i}>
                  <Food food={foods} />
                </div>
              ) : (
                ""
              );
            })
        )}
      </div>
    </div>
  ) : (
    <h3 className="mt-3">Restaurant is not accepting for current time being</h3>
  );
}
