import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFood } from "../../actions/foodAction";
import Loader from '../../components/others/Loader'
import Error from '../../components/others/Error'
import Success from '../../components/others/Success'
import Nav1 from "../../components/Navbarfooter/Nav1";

export default function Addfood() {
  const [name, setname] = useState("");
  const [price, setprice] = useState();
  const [imageurl, setimageurl] = useState("");
  const [vitamin, setvitamin] = useState("");
  const [description1, setdescription1] = useState("");
  const [totalstock, settotalstock] = useState("");
  const [calories, setcalories] = useState();
  const [num_orders, setnum_orders] = useState();
  const [countInStock, setcountInStock] = useState();
  const [category, setcategory] = useState("");
  const [disease, setdisease] = useState("");
  const [email, setemail] = useState("");
  const [platter, setplatter] = useState("");

  const dispatch = useDispatch();
 
  const addfoodstate=useSelector(state=>state.addFoodReducer)
 
  const {success , error , loading } = addfoodstate

  const addfood = (e) => {
    e.preventDefault();
    const food = {
      name: name,
      price: price,
      image: imageurl,
      description1:description1,
      totalstock:5,
      vitamin: vitamin,
      calories:calories,
      countInStock: countInStock,
      num_orders:num_orders,
      category: category,
      disease:disease,
      email : email,
      platter : platter,
    };
    
    dispatch(addFood(food));
  }
  function abc (){
    window.location.href ='/admin'
  }
  return (
    <div className="table-responsive-sm mt-2 me-3 ms-2">
      <Nav1/>
      <div className="row justify-content-center">
        <div className="col-md-8 shadow p-3 mb-5 bg-white rounded">

          {success && (<Success success='Food Added Succesfully'/>)}
          {loading && (<Loader />)}
          {error && (<Error error='Something went wrong'/>)}

          <h2>Add Food</h2>
          <div className="col-md-10"><h1><a style= {{color:'black'}} href='/foodsample' className=''>Sample</a></h1></div>

          <form onSubmit={addfood}>
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="Name of Food Item"
              required
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <input
              type="number"
              className="form-control mb-2 mr-sm-2"
              placeholder="price (Platter price is added else original price is added)"
              value={price}
              min = {1}
              required
              onChange={(e) => {
                setprice(e.target.value);
              }}
            /> 
             <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="Vitamin (a,b,c,d,e,k) (Lower Case)"
              value={vitamin}
              onChange={(e) => {
                setvitamin(e.target.value);
              }}
            />
              <input
              type="number"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="Standardize calories"
              value={calories}
              min = {0}
              onChange={(e) => {
                setcalories(e.target.value);
              }}
            />
            <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="Category (vegetarian,nonveg) (Lower case) "
              value={category}
              onChange={(e) => {
                setcategory(e.target.value);
              }}
            />
              <input
              type="number"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="CountInStock should be greater than 0"
              value={countInStock}
              min = {0}
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
              placeholder="total stock for one day"
              value={5}
              onChange={(e) => {
                settotalstock(e.target.value);
              }}
            />
            <input
              type="number"
              className="form-control mb-2 mr-sm-2"
              placeholder="Number of orders of particular item"
              value={0}
              required
              onChange={(e) => {
                setnum_orders(e.target.value);
              }}
            /> 
              <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="disease (flu,diabetes,headache,malaria,dengue) (Lowercase) (food consumed in above disease)"
              value={disease}
              onChange={(e) => {
                setdisease(e.target.value);
              }}
            />
            <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="imageurl "
              value={imageurl}
              onChange={(e) => {
                setimageurl(e.target.value);
              }}
            />
           <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="Email same as restaurant email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
             <input
              type="text"              
              className="form-control mb-2 mr-sm-2"
              placeholder="platter (southindian,northindian,chinese,pannermenu) (Lowercase)"
              value={platter}
              onChange={(e) => {
                setplatter(e.target.value);
              }}
            />
            <button
              className="btn mt-1 btn-primary"
              type="submit"
              style={{ float: "left" }}
            >
              Add Food
            </button>
          </form>
        </div>
      </div>
      
    </div>
  )
}
