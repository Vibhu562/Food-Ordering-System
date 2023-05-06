import React from "react";
import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from '../../components/others/Loader'
import Error from '../../components/others/Error'
import { Link } from "react-router-dom";
import { getAllRestaurants,deleteRestaurant } from "../../actions/restaurantAction";
import Nav1 from "../../components/Navbarfooter/Nav1";
export default function Restaurantlist() {
    const dispatch = useDispatch();
  const getallrestaurantsstate = useSelector(
    (state) => state.getAllRestaurantsReducer
  )
  const { restaurants, loading, error } = getallrestaurantsstate;
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    dispatch(getAllRestaurants());
          // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [dispatch])
  function abc (){
    window.location.href ='/admin'
  }
  return (
    
    <div className="table-responsive me-3 ms-2 mt-2 card text-center shadow p-3 mb-5 bg-white rounded">
      <Nav1/>
      <h2>Restaurant list</h2>

      <table className="table table-bordered ">
        <thead>
          <tr>
            <th>Name</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Email id</th>
            <th>Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
              {loading && <Loader />}
          {error && <Error error="something went wrong" />}
          {  restaurants &&
            restaurants.map((restaurant) => {
              return (
                (currentUser.email == restaurant.email  ?(
                  <tr>
                  <td>{restaurant.name}</td>
                  <td>{restaurant.latitude}</td>
                  <td>{restaurant.longitude}</td>
                  <td>{restaurant.email}</td>
                  <td>{restaurant._id}</td>
                  <td>
                    <i
                      className="far fa-trash-alt"
                      style={{ marginRight: "10px" }} onClick={()=>{dispatch(deleteRestaurant(restaurant._id))}}
                    ></i>
                    <Link to={`/admin/editrestaurant/${restaurant._id}`}><i className="fas fa-edit"></i></Link>
                  </td> 
                </tr>
                ):(<div></div>))
              )})}
               {loading && <Loader />}
          {error && <Error error="something went wrong" />}
          {  restaurants &&
            restaurants.map((restaurant) => {
              return (
                (currentUser._id == "630b7eb20acb2c86f8d4e85a"   ?(
                  <tr>
                  <td>{restaurant.name}</td>
                  <td>{restaurant.latitude}</td>
                  <td>{restaurant.longitude}</td>
                  <td>{restaurant.email}</td>
                  <td>{restaurant._id}</td>
                  <td>
                    <i
                      className="far fa-trash-alt"
                      style={{ marginRight: "10px" }} onClick={()=>{dispatch(deleteRestaurant(restaurant._id))}}
                    ></i>
                    <Link to={`/admin/editrestaurants/${restaurant._id}`}><i className="fas fa-edit"></i></Link>
                  </td> 
                </tr>
                ):(<div></div>))
              )})}
        </tbody>
      </table>
    </div>
  )
}
