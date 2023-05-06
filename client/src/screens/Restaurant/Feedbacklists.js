import React from 'react'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from "react-router-dom";
import Loader from '../../components/others/Loader'
import Error from '../../components/others/Error'
import Nav1 from "../../components/Navbarfooter/Nav1";
import { Link } from "react-router-dom";
import { deleteFeedback, getAllFeedbacks } from '../../actions/feedbackAction';

export default function Feedbacklists() {
    
    const getfeedbacksstate = useSelector(state => state.getAllFeedbacksReducer)
    const {loading , error , feedbacks} = getfeedbacksstate
  
    const dispatch = useDispatch()
    let { id } = useParams();
    useEffect(() => {
       dispatch(getAllFeedbacks())
        
    }, [dispatch])
    
    function x (){
        window.location.reload()
    }
    window.setTimeout( function() {
        window.location.reload();
      }, 30000);
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <div className='table-responsive me-3 ms-3 mt-2 shadow p-3 mb-5 bg-white rounded'>
            <Nav1/>
            {loading && (<Loader/>)}
            {error && (<Error error='something went wrong'/>)}
            <h2>Feedbacks List</h2><h1>Click on Order Id for more info</h1>
            <table className='table table-striped table-bordered table-responsive '>
                <thead>
                    <tr>
                <th>Feedback ID</th>
                <th>Name</th>
                <th>Order ID</th>
                <th>Feedbacks About</th>
                <th>Date</th>
                <th>Restaurant Name</th>
                <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {feedbacks && (feedbacks.map(feedback=>{
                            return (
                                (currentUser.email == "vibhunohria4@gmail.com"  ?(
                        <tr > 
                                <td >{feedback._id}</td>
                                <td>{feedback.name}</td>
                      <td onClick={()=>{window.location.href=`/orderinfo/${feedback.orderid}`}}>{feedback.orderid}</td>
                      <td>{feedback.feedbacks}</td>
                      <td>{feedback.date.substring(0,10)}</td>
                      <td>{feedback.restaurant} </td>
                      <td>
                    <i
                      className="far fa-trash-alt"
                      style={{ marginRight: "10px" }} onClick={()=>{dispatch(deleteFeedback(feedback._id))}}
                    ></i></td>
                            </tr>  
                              ):(<div></div>)))
                        }))}
                        
                    </tbody>   
            </table>          
            
        </div>
  )
}
