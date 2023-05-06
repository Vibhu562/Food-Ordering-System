import React from 'react'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from "react-router-dom";
import Loader from '../../components/others/Loader'
import Error from '../../components/others/Error'
import Nav1 from "../../components/Navbarfooter/Nav1";
import { Link } from "react-router-dom";
import { deleteComplaint, getAllComplaints } from '../../actions/complaintAction';

export default function Complaintlist() {
    
    const getcomplaintsstate = useSelector(state => state.getAllComplaintsReducer)
    const {loading , error , complaints} = getcomplaintsstate
  
    const dispatch = useDispatch()
    let { id } = useParams();
    useEffect(() => {
       dispatch(getAllComplaints())
        
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
            <h2>Complaints List</h2><h1>Click on Order Id for more info</h1>
            <table className='table table-striped table-bordered table-responsive '>
                <thead>
                    <tr>
                <th>Complaint ID</th>
                <th>Name</th>
                <th>Order ID</th>
                <th>Complaints About</th>
                <th>Date</th>
                <th>Restaurant Name</th>
                <th>Response from Restaurant</th>
                <th>Delete</th>
                <th>Edit</th>
                    </tr>
                    </thead>
                    <tbody>
                        {complaints && (complaints.map(complaint=>{
                            return (
                                (currentUser.email == complaint.restaurantemail  ?(
                        <tr > 
                                <td >{complaint._id}</td>
                                <td>{complaint.name}</td>
                      <td onClick={()=>{window.location.href=`/orderinfo/${complaint.orderid}`}}>{complaint.orderid}</td>
                      <td>{complaint.complaints}</td>
                      <td>{complaint.date.substring(0,10)}</td>
                      <td>{complaint.restaurantemail} </td>
                      <td>{complaint.complainstatus}</td>
                      <i
                      className="far fa-trash-alt"
                      style={{ marginRight: "10px" }} onClick={()=>{dispatch(deleteComplaint(complaint._id))}}
                    ></i>
                                <td><Link to={`/admin/editcomplaint/${complaint._id}`}><i className="fas fa-edit"></i></Link></td>                                 
                            </tr>  
                              ):(<div></div>)))
                        }))}
                        
                    </tbody>   
            </table>          
            
        </div>
  )
}
