import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterRestaurants } from "../../actions/restaurantAction";
export default function Filter() {
// Restaurant main page
  const [searchkey, setsearchkey] = useState("");
  const [sort, setsort] = useState("popular");
  const [description, setdescription] = useState("all");
  const [location , setlocation] = useState("all");
 
  const dispatch = useDispatch()
  const handleInput = (e)=>{
    var msg = document.getElementById("checkmsg").value;
    if (msg === "") {
      window.location.reload();
    }
  }
  return (
    <div className="responsive-sm">
      <div className="row justify-content-center">
        <div className="col-md-3"  style={{marginTop:'15px'}}>
          <input
           value={searchkey}
           onChange={(e) => {
             setsearchkey(e.target.value);
           }}
            type="text"
            placeholder="Search Restaurants By Name "
            className="form-control"
            name = "myname" id="checkmsg" onInput={ handleInput }
          />
        </div >
        <div className="col-md-2 mt-4" >
          <select  className="form-control" value ={sort} onChange={(e)=>{setsort(e.target.value)}}>
            <option value="Popular">Rating</option>
            <option value="htl">high to Low (Rating)</option>
            <option value="lth">Low To High (Rating)</option>
          </select>
        </div>
        <div className="col-md-2 mt-4">
          <select  className="form-control " value={description} onChange={(e)=>setdescription(e.target.value)}>
            <option value="all">Type</option>
            <option value="northindianrestaurant">North Indian Restaurant</option>
            <option value="fastfoodrestaurant">Fast food restaurant</option>
            <option value="alltyperestaurant">All type Restaurant</option>
          </select>
        </div>
        <div className="col-md-2 mt-4">
          <select  className="form-control " value={location} onChange={(e)=>setlocation(e.target.value)}>
            <option value="all">Location</option>
            <option value="faridabad">Faridabad</option>
            <option value="delhi">Delhi</option>
            <option value="noida">Noida</option>
            <option value="gurugram">Gurugram</option>
            <option value="ghaziabad">Ghaziabad</option>
            <option value="banglore">Bangalore</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="ahmedabad">Ahmedabad</option>
            <option value="pune">Pune</option>
            <option value="lucknow">Lucknow</option>
            <option value="chennai">Chennai</option>
            <option value="bhopal">Bhopal</option>
            <option value="patna">Patna</option>
            <option value="agra">Agra</option>
            <option value="srinagar">Srinagar</option>
            <option value="ranchi">Ranchi</option>
          </select>
        </div>
          <button className="col-md-2 mt-4 ms-2 btn btn-warning text-dark fw-bold" onClick={()=>{dispatch(filterRestaurants(searchkey , sort , description,location))}}>Filter</button>
      </div>
    </div>
  );
}
