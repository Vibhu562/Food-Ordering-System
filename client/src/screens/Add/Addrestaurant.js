import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRestaurant } from "../../actions/restaurantAction";
import Loader from '../../components/others/Loader'
import Error from '../../components/others/Error'
import Success from '../../components/others/Success'
import Nav1 from "../../components/Navbarfooter/Nav1";

export default function Addrestaurant() {
  const [name, setname] = useState("");
  const [location, setlocation] = useState("");
  const [location1, setlocation1] = useState("");
  const [imageurl, setimageurl] = useState("");
  const [longitude, setlongitude] = useState("");
  const [description, setdescription] = useState("");
  const [description1, setdescription1] = useState("");
  const [latitude, setlatitude] = useState("");
  const [timing, settiming] = useState("");
  const [phonenumber, setphonenumber] = useState();
  const [email, setemail] = useState("");
  const [amenitites, setamenitites] = useState("");
  const [restaurantstatus, setrestaurantstatus] = useState("");
  const [tablestatus, settablestatus] = useState();
  const [totalorders, settotalorder] = useState();
  const [approval, setapproval] = useState(false);


  const dispatch = useDispatch();
 
  const addrestaurantstate=useSelector(state=>state.addRestaurantReducer)
 
  const {success , error , loading } = addrestaurantstate

  const addrestaurant = (e) => {
    e.preventDefault();
    const restaurant = {
      name: name,
      location: location,
      location1:location1,
      image: imageurl,
      description: description,
      description1:description1,
      latitude: latitude,
      longitude:longitude,
      timing: timing,
      phonenumber:phonenumber,
      email : email,
      totalorders:totalorders,
      amenitites:amenitites,
      restaurantstatus:restaurantstatus,
      tablestatus:tablestatus,
      approval:approval,
    };
    
    dispatch(addRestaurant(restaurant));
  }
  function abc (){
    window.location.href ='/admin'
  }
  return (
    <div className="table-responsive-sm me-3 ms-2">
      <h2 className="text-align-center fw-bold fs-1 mt-2 mb-2">Add Restaurant</h2> 
      <div className="row justify-content-center">
        <div className="col-md-8 shadow p-3 mb-5 bg-white rounded">

          {success && (<Success success='Restaurant Added Succesfully'/>)}
          {loading && (<Loader />)}
          {error && (<Error error='Something went wrong'/>)}

          <h4 className="fs-5" style={{textAlign:'end'}}><a style= {{color:'black'}} href='/sample' className=''>Sample</a></h4> 
          <h4 className="fs-5" style={{textAlign:'end'}}><a style= {{color:'black'}} href='/instruction' className=''>Instruction of Restaurant Admin</a></h4>
          <form onSubmit={addrestaurant}>
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="Restaurant Full Name"
              required
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder=" Short location (with city name) (Like Abc , Ghaziabad)"
              value={location}
              required
              onChange={(e) => {
                setlocation(e.target.value);
              }}
            /> 
             <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="Full location (with city name , state , shop number)"
              value={location1}
              required
              onChange={(e) => {
                setlocation1(e.target.value);
              }}
            /> 
             <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="Restaurant email (same as login email)"
              value={email}
              required
              onChange={(e) => {
                setemail(e.target.value);
              }}
            /> 
             <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="latitude (Like 28.3866199)"
              value={latitude}
              onChange={(e) => {
                setlatitude(e.target.value);
              }}
            />
              <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="longitude (Like 77.3488673)"
              value={longitude}
              onChange={(e) => {
                setlongitude(e.target.value);
              }}
            />
            <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="decription (northindianrestaurant,fastfoodrestaurant,alltyperestaurant) (Lowercase)"
              value={description}
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            />
            <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="Price for 2,3 or more people (like 500 Rs/ for 2)"
              value={description1}
              onChange={(e) => {
                setdescription1(e.target.value);
              }}
            />
             <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="Restaurant Timing (like 10am-10pm)"
              value={timing}
              onChange={(e) => {
                settiming(e.target.value);
              }}
            />
            <input
              type="number"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="Restaurant Owner Phonenumber"
              value={phonenumber}
              onChange={(e) => {
                setphonenumber(e.target.value);
              }}
            />
             <input
              type="number"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="total order for acceptance at current time "
              value={totalorders}
              onChange={(e) => {
                settotalorder(e.target.value);
              }}
            />
            <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="imageurl for restaurant image"
              value={imageurl}
              onChange={(e) => {
                setimageurl(e.target.value);
              }}
            />
           <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="amenities (like parking)"
              value={amenitites}
              onChange={(e) => {
                setamenitites(e.target.value);
              }}
            />
       <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="Restaurant Status (Write Restaurant Unavailable if restaurant is not accepting Restaurant food otherwise leave blank)"
              value={restaurantstatus}
              onChange={(e) => {
                setrestaurantstatus(e.target.value);
              }}
            />
      
      <input
              type="number"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="Table countinstock (total table available for today)"
              value={tablestatus}
              onChange={(e) => {
                settablestatus(e.target.value);
              }}
            />     
            <button
              className="btn mt-1 btn-primary"
              type="submit"
              style={{ float: "left" }}
            >
              Add Restaurant
            </button>
          </form>
        </div>
      </div>
      
    </div>
  )
}
