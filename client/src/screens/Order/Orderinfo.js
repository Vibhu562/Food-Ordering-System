import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../actions/orderActions";
import Loader from '../../components/others/Loader'
import Error from '../../components/others/Error'
import Success from '../../components/others/Success'
import { useParams } from "react-router-dom";
export default function Orderinfo() {
  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.getOrderByIdReducer);
  let { id } = useParams();
  const { order, loading, error } = orderstate;
  useEffect(() => {
    dispatch(getOrderById(id));
  }, [dispatch,id]);
  return (
    <div>
      {error && <Error error="Something went wrong" />}
      {loading && <Loader />}
      {order && (
        <div>
          <div className="row justify-content-center shadow p-3 mb-5 bg-white rounded">
            <div className="col-md-5 card">
              <h2>Items In Your Order</h2>
           
              <hr />
              {order.orderItems.map((item) => {
                return (
                 
                  <div className="orderitem">
                     <h1>Restaurant Phone Number : {item.phonenumber} </h1>
                    <h1>
                      Restaurant name  : {item.name1}
                    </h1>
                    <h1>Platter type : {item.platter}</h1>
                    <h1>Customer Name : {item.currentUser}</h1>
                    <h1>Customer phonenumber : {item.currentUserphonenumber}</h1>
                    <h1>Customer otp : {item.otp}</h1>
                    <h1>Food Name : {item.name}</h1>
                    <h1>
                      Quantity : {item.quantity}
                    </h1>           
                    <hr />
                  </div>
                );
              })}
            </div>
            <div className="col-md-5 text-right card ms-2">
              <h2>Order Details</h2>
              <hr />

              <h1>Order Id : {order._id}</h1>
              <h1>Total Amount : {order.orderAmount}</h1>
              <h1>Date Of order : {order.createdAt.substring(0, 10)}</h1>
              <h1>Transaction ID : {order.transactionId}</h1>

           

              <hr />

              <div className="text-right">
                <h2>Shipping Details</h2>

                <hr />

                <h1 className="text-right">
                  Address : <b>{order.shippingAddress.address}</b>
                </h1>
                <h1 className="text-right">
                  City : <b>{order.shippingAddress.city}</b>
                </h1>

                <h1 className="text-right">
                  Country : <b>{order.shippingAddress.country}</b>
                </h1>
                <hr/>
                <h2> Arriving Details </h2>
                <hr/>
                <h1 className="text-right">
                Delivery Boy Name :- <b>{order.deliveryboyname}</b>                 </h1>
                <h1 className="text-right">
                Delivery Boy Number :- <b>{order.deliveryboyphonenumber}</b>                 </h1>
                <h1 className="text-right">
                 
                  Arrival : <b>{order.arrival}</b>
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}


      <div className="row justify-content-center">
        <div className="col-md-10">
      
        </div>
      </div>
    </div>
  );
}