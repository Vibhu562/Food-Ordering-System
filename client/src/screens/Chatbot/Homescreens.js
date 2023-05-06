import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersByUserId } from "../../actions/orderActions";
import Loader from '../../components/others/Loader'
import Error from '../../components/others/Error'
import Success from '../../components/others/Success'
import { getComplaintById, getComplaintsByUserId } from "../../actions/complaintAction";
export default function Homescreens() {

  const complaintstate=useSelector(state=>state.getComplaintsByUserIdReducer)

  const {complaints , error , loading} = complaintstate
  
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      dispatch(getComplaintsByUserId());
    } else {
      window.location.href = "/login";
    }
  }, [dispatch]);

  return (
    <div className="table-responsive">
          <h2 className="mb-0">MY COMPLAINTS</h2> 
          <table className="table table-striped table-responsive ">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Complaints About</th> 
                <th>Response from Restaurant</th>
              </tr>
            </thead>
            <tbody>
                  {loading && (<Loader/>)}
                  {complaints && (complaints.map(complaint=>{
                    return <tr >
                      <td>{complaint.orderid}</td>
                      <td>{complaint.complaints}</td>
                      <td>{complaint.complainstatus}</td>
                      </tr>
                  }))}
                  {error && (<Error error='something went wrong'/>)}
            </tbody>
          </table>
    </div>
  );
}