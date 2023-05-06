import React from 'react'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loader from '../../components/others/Loader'
import Error from '../../components/others/Error'
import Success from '../../components/others/Success'
import { updateOrder,getOrderById } from '../../actions/orderActions';

export default function Editorder() {
    const { id } = useParams();
    const orderstate = useSelector((state) => state.getOrderByIdReducer);
    const { order, error, loading } = orderstate;
    const updateorderstate = useSelector((state) =>state.updateOrderReducer)
    const {success , updateerror , updateloading} = updateorderstate
    const dispatch = useDispatch();
    const [isDelivered, setisDelivered] = useState("");
    const [isConfirmed, setisConfirmed] = useState("");
    const [arrival, setarrival] = useState("");
    const [deletes, setdeletes] = useState("");
    const [deliveryboyname ,setdeliveryboyname] = useState("");
    const [deliveryboyphonenumber ,setdeliveryboyphonenumber] = useState("");

    useEffect(() => {
      if (order) {
        if (order._id == id) {
          setisDelivered(order.isDelivered);
          setarrival(order.arrival);
          setisConfirmed(order.isConfirmed);
          setdeletes(order.deletes);
          setdeliveryboyname(order.deliveryboyname);
          setdeliveryboyphonenumber(order.deliveryboyphonenumber);
        } else {
          dispatch(getOrderById(id));
        }
      } else {
        dispatch(getOrderById(id));
      }
    }, [dispatch, order,id]);
  
    function editorder(e) {
      e.preventDefault();
      const updatedorder = {
        isDelivered: isDelivered,
        arrival: arrival,
        isConfirmed : isConfirmed,
        deletes:deletes,
        deliveryboyname : deliveryboyname,
        deliveryboyphonenumber : deliveryboyphonenumber,
      };
      dispatch(updateOrder(id, updatedorder));
     
    }
  return (
    <div className="table-responsive-sm me-4 ms-3 mt-3 card text-center shadow p-3 mb-5 bg-white rounded">
     <h2>Edit Order</h2>
     {loading && <Loader />}
     {updateloading && <Loader />}
    {updateerror && (<Error error='Something went wrong' />)}
     {success && (<Success success='Order Updated Successfully'/>)}
      {error && <Error error="something went wrong" />}
     {order && (
        <div>
          <form onSubmit={editorder}>
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="Status for delivery"
              required
              value={isDelivered}
              onChange={(e) => {
                setisDelivered(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="Confirmation from Restaurant	"
              required
              value={isConfirmed}
              onChange={(e) => {
                setisConfirmed(e.target.value);
              }}
            />
          
              <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="Arrival details"
              value={arrival}
              onChange={(e) => {
                setarrival(e.target.value);
              }}
            />
             <input
              type="boolean"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="deletes"
              value={deletes}
              onChange={(e) => {
                setdeletes(e.target.value);
              }}
            />
             <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="Delivery Boy Name"
              value={deliveryboyname}
              onChange={(e) => {
                setdeliveryboyname(e.target.value);
              }}
            />
            <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="Delivery Boy Phone Number"
              value={deliveryboyphonenumber}
              onChange={(e) => {
                setdeliveryboyphonenumber(e.target.value);
              }}
            />
            <button
              className="btn mt-5 mb-n2 btn-primary justify-content-center"
              type="submit"
              style={{ float: "left" }}
            >
              Edit Order
            </button>
          </form>
        </div>
      )}
      
    </div>
  )
}
