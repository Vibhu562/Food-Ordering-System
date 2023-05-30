import React , {useState,useEffect} from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { tableNewUser } from '../../actions/tableActions'
import {registerNewTable} from '../../actions/tableActions'
import Loader from '../../components/others/Loader'
import Error from '../../components/others/Error'
import Success from '../../components/others/Success'
import {getRestaurantById ,updateRestaurant} from '../../actions/restaurantAction'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import './table.css'
export default function Tablebookings() {
  const dispatch= useDispatch()
  const getrestaurantbyidstate = useSelector( state => state.getRestaurantByIdReducer );
  const { restaurant } = getrestaurantbyidstate;
  const registerstate = useSelector(state=>state.registerNewTableReducer)

  const {loading , error,success} = registerstate
  let { id } = useParams();

  const[name , setname] = useState("")
  const[email , setemail] = useState("")
  const[otp , setotp] = useState("")
  const[members , setmembers] = useState()
  const[phonenumber , setphonenumber] = useState()
  const[time , settime] = useState("")
  const[date , setdate] = useState("")
  const [tablestatus, settablestatus] = useState("");
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

useEffect(() => {
    if (restaurant) {
      if (restaurant._id == restaurant._id) {
        settablestatus(restaurant.tablestatus);
      
      } else {
        dispatch(getRestaurantById(restaurant._id));
      }
    } else {
      dispatch(getRestaurantById(restaurant._id));
    }
  }, [dispatch, restaurant._id,restaurant._id]);
  function editrestaurant(e) {
    e.preventDefault();
    const updatedrestaurant = {    
      tablestatus:tablestatus-1,
    
    };
    dispatch(updateRestaurant(id, updatedrestaurant));
  }

  function register(e) {  
  e.preventDefault()
      const table = {         
          name : name ,
          email : email ,
          members : members,
          phonenumber : phonenumber,
          otp :currentUser.otp,
          date : date,
          time : time, 
          restaurant:restaurant.name,
          restaurantemail : restaurant.email,
      }
      if (phonenumber.length == 10  ){
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (filter.test(email)) {
          dispatch(registerNewTable(table))
        }
          else
            { alert('Email id format is wrong ');
            }
      }
    else{
        alert("Password Not Match or phone number not 10 digit or email is incorrect ");
    }
  }
 
  function x(){
    window.location.href = "/"
  }
  var today = new Date();
    const times = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const todays = new Date().toISOString().split("T")[0];

  return (
    (times > "09:00"  ?(<div className='login1'>
     
    <div className='row justify-content-center m-3'>
      <h3>{restaurant.restaurantstatus}</h3>
    <div className='col-md-6 card p-3 shadow p-3 mb-5 bg-white rounded' style={{marginTop: '100px'}}>
         <div className='div' onSubmit={register}>
         <h2 className='text-center m-3'style={{display: 'inline'}}>Table booking</h2>
             <i className='fa fa-user-plus'></i>
             {error && (<Error error="Table already bookedS" />)}
            {loading && (<Loader />)}
            {success && (<Success success='Your Table Registration is Successful'/>)}
             <form onSubmit={editrestaurant}>
             <input type = "text" placeholder='Name' className='form-control' value = {name} required onChange = {(e)=>{setname(e.target.value)}}  />
             <input type = "text" placeholder='email (same as login email only)' className='form-control' value = {email} required onChange = {(e)=>{setemail(e.target.value)}} />
             <input type = "number" placeholder='Phone Number' className='form-control' min = {0}   value = {phonenumber} required onChange = {(e)=>{setphonenumber(e.target.value)}}/>
             <input type = "number" placeholder='Members Count' className='form-control' min = {0} max ={7} value = {members} required onChange = {(e)=>{setmembers(e.target.value)}}  />
             
             {/*<div className='rowC'>
             <input  type="time"  placeholder='Time for booking '  className='form-control timeInput '  min="12:00" max="21:00" value = {time} required onChange = {(e)=>{settime(e.target.value)}}  />
             <span className=' validity' id='icon'></span>
  </div>*/}
            <select  id="time" name="time" className='form-control mt-2' type="time" value = {time} required onChange = {(e)=>{settime(e.target.value)}}>
            <option value ="">Time</option>
              <option value="17:00">17:00</option>
              <option value="19:00">19:00</option>
              <option value="21:00">21:00</option>
              </select>
             <input type = "date" placeholder='name' className='form-control' min={todays} max ={todays}  value = {date} required onChange = {(e)=>{setdate(e.target.value)}}/>
              <input type = "text" placeholder='Restaurant Name ' className='form-control'  value = {restaurant.name} required   />

              {restaurant.tablestatus > 0 && restaurant.restaurantstatus == ""?(
                <div className='text-center'>
                 <button type = 'submit' className='btn mt-3 btn-primary' onClick={x}>Book Table</button>
             </div>
              ):(<h3 className='mt-2'>Restaurant is not accepting any more tables</h3>)}
            
             </form>
         </div>
       </div>
      </div>      
    </div>):(<h3 className='mt-2'>Restaurant is not accepting tables for time being</h3>))
    
  )
}
