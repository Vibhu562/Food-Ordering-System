import React , {useState,useEffect} from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/others/Loader'
import Error from '../../components/others/Error'
import Success from '../../components/others/Success'
import { useParams } from "react-router-dom";
import '../Restaurant/table.css'
import { registerNewFeedback } from '../../actions/feedbackAction'
export default function Feedback() {
  const dispatch= useDispatch()
  const getrestaurantbyidstate = useSelector( state => state.getRestaurantByIdReducer );
  const { restaurant } = getrestaurantbyidstate;
  const registerstate = useSelector(state=>state.registerNewTableReducer)

  const {loading , error,success} = registerstate
  let { id } = useParams();

  
  const[orderid , setorderid] = useState("")
  const[feedbacks , setfeedbacks] = useState()
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  function register(e) {  
  e.preventDefault()
      const feedback = {         
          name : currentUser.name ,
          email : currentUser.email ,
          orderid : orderid,
          feedbacks : feedbacks,
          otp :currentUser.otp,
          date:todays,
          phonenumber :currentUser.phonenumber,
          time : times,
          restaurant:restaurant.name,
          restaurantemail : restaurant.email,
      }
      dispatch(registerNewFeedback(feedback))
  }
  var today = new Date();
  const times = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const todays = new Date().toISOString().split("T")[0];
// Get all inputs that have a word limit
document.querySelectorAll('input[data-max-words]').forEach(input => {
  // Remember the word limit for the current input
  let maxWords = parseInt(input.getAttribute('data-max-words') || 0)
  // Add an eventlistener to test for key inputs
  input.addEventListener('keydown', e => {
    let target = e.currentTarget
    // Split the text in the input and get the current number of words
    let words = target.value.split(/\s+/).length
    // If the word count is > than the max amount and a space is pressed
    // Don't allow for the space to be inserted
    if (!target.getAttribute('data-announce'))
      // Note: this is a shorthand if statement
      // If the first two tests fail allow the key to be inserted
      // Otherwise we prevent the default from happening
      words >= maxWords && e.keyCode == 32 && e.preventDefault()
    else
      words >= maxWords && e.keyCode == 32 && (e.preventDefault() || alert('Word Limit Reached'))
  })
})
  return (
     <div className=''>     
    <div className='row justify-content-center m-3'>
      <h3>{restaurant.restaurantstatus}</h3>
    <div className='card p-3 shadow bg-white rounded'>
         <div className='div' onSubmit={register}>
         <h2 className='text-center m-3'style={{display: 'inline'}}> </h2>
             {error && (<Error error="Feedback already booked" />)}
            {loading && (<Loader />)}
            {success && (<Success success='Your Feedback raised is Successful'/>)}
             <form>
             <input type = "text" placeholder='Order id' className='form-control'    value = {orderid} required onChange = {(e)=>{setorderid(e.target.value)}}/>
             <input type = "text" placeholder='Feedback About' className='form-control'  maxlength="25" data-max-words="6" value = {feedbacks} required onChange = {(e)=>{setfeedbacks(e.target.value)}}  />     
             <input type = "text" placeholder='Restaurant Name ' className='form-control'  value = {restaurant.name} required   />
              <div className='text-center'>
                 <button type = 'submit' className='btn mt-3 btn-primary' >Raise Feedback</button>
             </div>
             </form>
         </div>
       </div>
      </div>      
    </div>
  )
}
