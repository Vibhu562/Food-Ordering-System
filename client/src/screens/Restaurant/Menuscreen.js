import {getRestaurantById} from '../../actions/restaurantAction';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from '../../components/others/Loader'
import Error from '../../components/others/Error'
import Success from '../../components/others/Success'
import Review from "../../components/others/Review";
import { useParams } from "react-router-dom";
import Footer from '../Chatbot/Footer';
import { Link } from "react-router-dom";
import { addOrder } from '../../actions/orderActions';
import Rating from "react-rating";
import ScrollToTop from "react-scroll-to-top";
import Chatbots from '../Chatbot/Chatbot';

export default function Menuscreen() {
    let { id } = useParams();
    const dispatch = useDispatch()
    function abc(){
      window.open("https://maps.google.com?q="+restaurant.latitude +","+restaurant.longitude );
    }
    const getrestaurantbyidstate = useSelector( state => state.getRestaurantByIdReducer );
    const { restaurant ,loading,error} = getrestaurantbyidstate;
    useEffect(() => {
        dispatch(getRestaurantById(id));
    }, [dispatch]);  

 
  return (
    <div>
  {loading ? (
        <Loader/>
      ) : error ? (
        <Error error='Something Went Wrong' />
      ) : (
        <div className='col m-1'>
        <div className="row p-4 mt-2 align-items-center" style={{backgroundColor: "black"}}>
        <div className="col-md-4">
          <div className="img-wrapper">
          <img src={restaurant.image} className="bigimg" /> 
          </div>
        </div>
        <div className="col-md-6 text-start">
          <h5 style={{fontSize: '2.5em'}} className="text-light d-flex m-0 justify-content-start mb-2"><b>{restaurant.name}</b></h5>
          <h5 className='text-light' style={{fontsize: '10px'}}>{restaurant.location1}</h5>
          <br></br>
          <div className='row justfy-content-center text-start' >
            <div className='col-md-2 text-light text-center margins' style={{borderRight: "2px solid white", marginLeft: "-35px"}}>★ {Number(restaurant.rating).toFixed(1)}</div>
            <div className='col-md-4 text-light text-center margins' style={{borderRight: "2px solid white"}} >Open: {restaurant.timing}</div>
            <div className='col-md-2 text-light text-center marginss' >{restaurant.description1}</div>
          </div>
        </div>
        <div className='col-md-2'>
        <Link className='row mb-2' to={`/restaurant/menu/${restaurant._id}/food`} style={{ textDecoration: 'none',color:"black" }}>
          <button className='btn btn-warning text-dark fw-bold'>Food Menu</button>
        </Link>                      
        <Link className='row  mb-2' to={`/restaurant/menu/${restaurant._id}/table`} style={{ textDecoration: 'none',color:"black" }}>
          <button className='btn btn-warning text-dark fw-bold'>Reserve a Table</button>
        </Link>
        <Link className='row  mb-2' to={`/restaurant/menu/${restaurant._id}/tablestatus`} style={{ textDecoration: 'none',color:"black" }}>
          <button className='btn btn-warning text-dark fw-bold'>Table Status</button>
        </Link>
        <Link className='row  mb-2' to={`/restaurant/${restaurant._id}/csv`} style={{ textDecoration: 'none',color:"black" }}>
          <button className='btn btn-warning text-dark fw-bold'>Recommendation</button>
        </Link>
        <div className='row'>
        <button className='btn btn-warning text-dark fw-bold' onClick={abc} >Show on Map</button>
        </div>
        </div>
      </div>
      <Review  key = {restaurant._id} restaurant={restaurant}/>
      <Footer></Footer>
      </div>
    )}
  </div>
  );
}
