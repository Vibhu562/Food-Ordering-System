import React from 'react'
import { useParams } from "react-router-dom";
import { getRestaurantById, updateRestaurant } from "../../actions/restaurantAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loader from '../../components/others/Loader'
import Error from '../../components/others/Error'
import Success from '../../components/others/Success'

export default function Editres() {
  const { id } = useParams();
  const restaurantstate = useSelector((state) => state.getRestaurantByIdReducer);
  const { restaurant, error, loading } = restaurantstate;
  const updaterestaurantstate = useSelector((state) =>state.updateRestaurantReducer)
  const {success , updateerror , updateloading} = updaterestaurantstate
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [location, setlocation] = useState("");
  const [location1, setlocation1] = useState("");
  const [imageurl, setimageurl] = useState("");
  const [longitude, setlongitude] = useState("");
  const [description, setdescription] = useState("");
  const [latitude, setlatitude] = useState("");
  const [timing, settiming] = useState("");
  const [phonenumber, setphonenumber] = useState();
  const [email, setemail] = useState("");
  const [amenitites, setamenitites] = useState("");
  const [restaurantstatus, setrestaurantstatus] = useState("");
  const [tablestatus, settablestatus] = useState();
  const [totalorders, settotalorder] = useState();
  const [approval, setapproval] = useState("");


  
  useEffect(() => {
    if (restaurant) {
      if (restaurant._id == id) {
        setname(restaurant.name);
        setlocation(restaurant.location);
        setlocation1(restaurant.location1);
        setlongitude(restaurant.longitude);
        setdescription(restaurant.description);
        setimageurl(restaurant.image);
        setlatitude(restaurant.latitude);
        settiming(restaurant.timing);
        setphonenumber(restaurant.phonenumber);
        setemail(restaurant.email);
        setamenitites(restaurant.amenitites);
        settotalorder(restaurant.totalorders);
        settablestatus(restaurant.tablestatus);
        setrestaurantstatus(restaurant.restaurantstatus);
        setapproval(restaurant.approval);
      
      } else {
        dispatch(getRestaurantById(id));
      }
    } else {
      dispatch(getRestaurantById(id));
    }
  }, [dispatch, restaurant,id]);

  function editrestaurant(e) {
    e.preventDefault();
    const updatedrestaurant = {
      name: name,
      location: location,
      location1:location1,
      longitude: longitude,
      description: description,
      latitude: latitude,
      image: imageurl,
      timing : timing,
      phonenumber : phonenumber,
      email : email,
      amenitites : amenitites,
      tablestatus:tablestatus,
      restaurantstatus:restaurantstatus,
      totalorders:totalorders,
      approval:approval,
    };
    dispatch(updateRestaurant(id, updatedrestaurant));
    
   
  }
  function x(){
    window.location.href = "/admin/restaurantslist"
  }
  return (
    <div className="table-responsive-sm me-4 ms-3 card text-center shadow p-3 mb-5 bg-white rounded">
     <h2>Edit Restaurant</h2>
     {loading && <Loader />}
     {updateloading && <Loader />}
    {updateerror && (<Error error='Something went wrong' />)}
     {success && (<Success success='Restaurant Updated Successfully'/>)}
      {error && <Error error="something went wrong" />}
     {restaurant && (
        <div>
          <form onSubmit={editrestaurant}>
          <input
              type="text"      
              className="form-control mb-2 mr-sm-2"
              placeholder="Approval of adding restaurant or not (type yes/no)"
              value={approval}
              onChange={(e) => {
                setapproval(e.target.value);
              }}
            />
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
              className="form-control mb-2 mr-sm-2"
              placeholder="Restaurant Status (Write Restaurant Unavailable if restaurant is not accepting Restaurant or Orders are more else leave blank)"
              value={restaurantstatus}
              onChange={(e) => {
                setrestaurantstatus(e.target.value);
              }}
            />
              <input
              type="text"      
              className="form-control mb-2 mr-sm-2"
              placeholder="Table countinstock (total table available for today)"
              value={tablestatus}
              onChange={(e) => {
                settablestatus(e.target.value);
              }}
            />
             
            <button
              className="btn mt-3 mb-n2 btn-primary"
              type="submit"
              style={{ float: "left" }}
              onClick={x}
            >
              Edit Restaurant
            </button>
          </form>
        </div>
      )}
      
    </div>
  )
}
