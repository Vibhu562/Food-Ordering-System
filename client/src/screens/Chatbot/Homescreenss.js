import React , {useState,useEffect} from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/others/Loader'
import Error from '../../components/others/Error'
import Success from '../../components/others/Success'
import {getRestaurantById ,updateRestaurant} from '../../actions/restaurantAction'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import '../Restaurant/table.css'
import { registerNewComplaint } from '../../actions/complaintAction'
export default function Homescreenss() {
    const getrestaurantbyidstate = useSelector( state => state.getRestaurantByIdReducer );
    const { restaurant } = getrestaurantbyidstate;
  return (
    <div>
        <h1>If issue is not resolved then you may contact restaurant</h1>
        <h1>Restaurant Phone number :- {restaurant.phonenumber}</h1>
    </div>
  )
}
