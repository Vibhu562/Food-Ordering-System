import React from 'react'
import { useParams } from "react-router-dom";
import { getFoodById, updateFood } from "../../actions/foodAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loader from '../../components/others/Loader'
import Error from '../../components/others/Error'
import Success from '../../components/others/Success'

export default function Editfood() {
    const { id } = useParams();
    const foodstate = useSelector((state) => state.getFoodByIdReducer);
    const { food, error, loading } = foodstate;
    const updatefoodstate = useSelector((state) =>state.updateFoodReducer)
  
    const {success , updateerror , updateloading} = updatefoodstate
  
    const dispatch = useDispatch();
    const [name, setname] = useState("");
    const [calories, setcalories] = useState("");
    const [imageurl, setimageurl] = useState("");
    const [vitamin, setvitamin] = useState("");
    const [description1, setdescription1] = useState("");
    const [totalstock, settotalstock] = useState("");
    const [price, setprice] = useState();
    const [countInStock, setcountInStock] = useState();
    const [category, setcategory] = useState("");
    const [disease, setdisease] = useState("");
    const [email, setemail] = useState("");
    const [platter, setplatter] = useState("");
    const [num_orders, setnum_orders] = useState("");

    
    useEffect(() => {
      if (food) {
        if (food._id == id) {
          setname(food.name);
          setprice(food.price);
          setvitamin(food.vitamin);
          setdescription1(food.description1);
          settotalstock(food.totalstock);
          setimageurl(food.image);
          setcalories(food.calories);
          setcountInStock(food.countInStock);
          setnum_orders(food.num_orders);
          setcategory(food.category);
          setdisease(food.disease);
          setemail(food.email);
          setplatter(food.platter);
        } else {
          dispatch(getFoodById(id));
        }
      } else {
        dispatch(getFoodById(id));
      }
    }, [dispatch, food,id]);
  
    function editfood(e) {
      e.preventDefault();
      const updatedfood = {
        name: name,
        price: price,
        vitamin: vitamin,
        description1:description1,
        totalstock:totalstock,
        num_orders:num_orders,
        calories: calories,
        email:email,
        image: imageurl,
        countInStock:countInStock,
        category : category,
        disease : disease,
        
        platter  : platter,
      };
      dispatch(updateFood(id, updatedfood));
     
    }
  return (
    <div className="table-responsive-sm me-4 ms-3 card text-center shadow p-3 mb-5 bg-white rounded">
     <h2>Edit Food</h2>
     {loading && <Loader />}
     {updateloading && <Loader />}
    {updateerror && (<Error error='Something went wrong' />)}
     {success && (<Success success='Food Updated Successfully'/>)}
      {error && <Error error="something went wrong" />}
     {food && (
        <div>
          <form onSubmit={editfood}>
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="name"
              required
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <input
              type="number"
              className="form-control mb-2 mr-sm-2"
              placeholder="calories"
              value={calories}
              required
              onChange={(e) => {
                setcalories(e.target.value);
              }}
            />
              <input
              type="number"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="price"
              value={price}
              onChange={(e) => {
                setprice(e.target.value);
              }}
            />
            <input
              type="number"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="countInStock"
              value={countInStock}
              onChange={(e) => {
                setcountInStock(e.target.value);
              }}
            />
          
             <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="Recipe description imageurl"
              value={description1}
              onChange={(e) => {
                setdescription1(e.target.value);
              }}
            />
              <input
              type="number"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="totalstock"
              value={5}
              onChange={(e) => {
                settotalstock(e.target.value);
              }}
            />
             <input
              type="number"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="Number of orders of Particular food item"
              value={food.num_orders}
              onChange={(e) => {
                setnum_orders(e.target.value);
              }}
            />
            <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="category"
              value={category}
              onChange={(e) => {
                setcategory(e.target.value);
              }}
            />
             <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="vitamin"
              value={vitamin}
              onChange={(e) => {
                setvitamin(e.target.value);
              }}
            />
              <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="disease"
              value={disease}
              onChange={(e) => {
                setdisease(e.target.value);
              }}
            />
            <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="imageurl"
              value={imageurl}
              onChange={(e) => {
                setimageurl(e.target.value);
              }}
            />
            <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
             <input
              type="text"
              
              className="form-control mb-2 mr-sm-2"
              placeholder="platter"
              value={platter}
              onChange={(e) => {
                setplatter(e.target.value);
              }}
            />
            <button
              className="btn mt-5 mb-n2 btn-primary"
              type="submit"
              style={{ float: "left" }}
            >
              Edit Food
            </button>
          </form>
        </div>
      )}
      
    </div>
  )
}
