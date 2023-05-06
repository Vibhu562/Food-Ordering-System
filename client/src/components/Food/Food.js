import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../actions/cartActions";
import { deleteFood, getFoodById, updateFood } from "../../actions/foodAction";
import { Link } from "react-router-dom";
import Rating from "react-rating";

export default function Food({ food }) {
  const [quantity, setquantity] = useState(1);
  const dispatch = useDispatch();
  //
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const getrestaurantbyidstate = useSelector(
    (state) => state.getRestaurantByIdReducer
  );
  const { restaurant } = getrestaurantbyidstate;
  //Extra
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
      countInStock: countInStock - quantity,
      num_orders : num_orders+1,
    };
    dispatch(updateFood(food._id, updatedfood));
  }
  function editfoods(e) {
    e.preventDefault();
    const updatedfood = {
      name: name,
      countInStock: countInStock,
      num_orders:num_orders-1,
    };
    dispatch(updateFood(food._id, updatedfood));
  }
  //
  function addtocarts() {
    if (localStorage.getItem("currentUser")) {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      alert(
        "You have deleted " +
          quantity +
          " " +
          food.name +
          " successfully from cart"
      );
    } else {
      alert("Please Login to view your cart");
      window.location.href = "/login";
    }
    dispatch(deleteFromCart(food));
  }
  //
  function addtocart() {
    if (localStorage.getItem("currentUser")) {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      alert(
        "You have added " + quantity + " " + food.name + " successfully to cart"
      );
    } else {
      alert("Please Login to view your cart");
      window.location.href = "/login";
    }
    dispatch(addToCart(food, quantity, restaurant, currentUser));
  }

  return (
    <div className="justify-content-center" key={food._id}>
      <div style={{ alignItems: "right" }}>
        <img
          src={food.image}
          style={{
            height: "400px",
            width: "500px",
            objectFit: "cover",
            borderRadius: "15px",
          }}
          className="mb-2 img-fluid"
          alt=""
        />
      </div>
      <div className="row justify-content-start align-items-end">
      <h1 className="col-md-auto abcd text-start fs-5 mt-2 qaza">{food.name}</h1>
      <h1 className="col-md-auto abcd text-start text-muted fs-6 mt-2">
          {food.sentimentScore >= 5 ? (
            <div
              style={{
                backgroundColor: "green",
                color: "white",
                display: "inline-block",
                padding:"3px 5px",
                borderRadius: '5px'
              }}
            >
              Excellent
            </div>
          ) : food.sentimentScore > 0 && food.sentimentScore < 5 ? (
            <div
              style={{
                backgroundColor: "lightgreen",
                color: "black",
                display: "inline-block",
                padding:"3px 5px",
                borderRadius: '5px'
              }}
            >
              Good
            </div>
          ) : food.sentimentScore > -5 && food.sentimentScore < 0 ? (
            <div
              style={{
                backgroundColor: "orange",
                color: "black",
                display: "inline-block",
                padding:"3px 5px",
                borderRadius: '5px'
              }}
            >
              Bad
            </div>)
            :food.sentimentScore == 0 ? (
              <div
              
            >
              
            </div>
          ) : (
            <div
              style={{
                backgroundColor: "red",
                color: "white",
                display: "inline-block",
                padding:"3px 5px",
                borderRadius: '5px'
              }}
            >
              
            </div>
          )
          }
        </h1>
      </div>
      <div className="text-start">
        <Rating
          className="ms-0 mb-2"
          initialRating={food.rating}
          emptySymbol="fa fa-star fa-1x text-muted"
          fullSymbol="fa fa-star fa-1x text-warning"
          readonly={true}
        />{" "}
        {food.rating.toFixed(1)}
      </div>
      <h1 className="abcd text-start text-muted fs-6 mb-2">
        Calories - {food.calories}
      </h1>
      <h1 className="abcd text-start fs-3 mt-2 mb-3 fw-bolder">
        ₹{food.price}
      </h1>

      <div className="row justify-content-between ">
      { currentUser.email=="vibhunohria4@gmail.com" ? <button className="btn btn-dark col-md-3 me-1 mb-2 ">
          <Link
            to={`/food/${restaurant._id}/${food._id}/extra`}
            style={{ textDecoration: "none", color: "white" }}
          >
            Admin
          </Link>
        </button>
        :<button className="btn btn-dark col-md-3 me-1 mb-2 ">
          <Link
            to={`/food/${restaurant._id}/${food._id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            Recipe
          </Link>
        </button>}
        {food.countInStock > 0 && restaurant.restaurantstatus == "" ? (
          <form onSubmit={editfood} className="col-md-5   btn-dark ">
            {" "}
            <button
              className="btn btn-dark mb-2 qaz"
              style={{ width: "100%" }}
              onClick={addtocart}
            >
              Add to cart
            </button>
          </form>
        ) : (
          <button
            className=" qazwsx btn btn-dark col-md-8 mb-2 justify-content-center"
            disabled
          >
            Out of stock
          </button>
        )}

        {food.countInStock > 0 && restaurant.restaurantstatus == "" ? (
          <select
            className="col-md-2 btn btn-dark ms-0 mb-2"
            value={food.quantity}
            onChange={(e) => {
              setquantity(e.target.value);
            }}
          >
            {food.countInStock < 6 ?  [...Array(food.countInStock).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            }) : [...Array(food.totalstock).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        ) : null}

        {food.countInStock > 0 && restaurant.restaurantstatus == "" ? (
          <form
            onSubmit={editfoods}
            className=" qazwsx col-md-1 mb-2 ms-0 btn-dark"
          >
            <button
              onClick={addtocarts}
              style={{ border: "none", marginTop: "5px", marginLeft: "5px" }}
            >
              <i
                className="far fa-trash-alt"
                style={{ padding: "2px", marginTop: "3px" }}
              ></i>
            </button>
          </form>
        ) : null}
      </div>
    </div>
  );
}
