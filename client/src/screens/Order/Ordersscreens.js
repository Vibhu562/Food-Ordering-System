import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersByUserId } from "../../actions/orderActions";
import Loader from "../../components/others/Loader";
import Error from "../../components/others/Error";
import Success from "../../components/others/Success";
import { Link } from "react-router-dom";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import './indexa.css'
export default function Ordersscreens() {
  const orderstate = useSelector((state) => state.getOrdersByUserIdReducer);

  const { orders, error, loading } = orderstate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      dispatch(getOrdersByUserId());
    } else {
      window.location.href = "/login";
    }
  }, [dispatch]);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="table-responsive">
      <div className="row justify-content-center mt-5">
        <div className="col-md-12">
          <h2>MY ORDERS</h2> <br></br>
          <h1>Click on Order Id for more info and image to view full view image</h1>
          <table className="table table-striped table-responsive">
            <thead>
              <tr style={{ textAlign: "center", verticalAlign: "middle" }}>
                <th>Order ID</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Time</th>
                <th>Transaction ID</th>
                <th>Confirmation from Restaurant</th>
                <th>Status for delivery</th>
                <th>Provide otp after food delivery</th>
                <th>Cancel your order</th>
                <th>Payment image if order is cancelled</th>
              </tr>
            </thead>
            <tbody>
              {loading && <Loader />}
              {orders &&
                orders.map((order) => {
                  return (
                    <tr>
                      <td
                        onClick={() => {
                          window.location = `/orderinfo/${order._id}`;
                        }}
                      >
                        {order._id}
                      </td>
                      <td>{order.orderAmount}</td>
                      <td>{order.createdAt.substring(0, 10)}</td>
                      <td>{order.time}</td>
                      <td>{order.transactionId}</td>
                      <td>{order.isConfirmed} </td>
                      <td>{order.isDelivered}</td>

                      <td>
                        <Link to={`/admin/editorderss/${order._id}`}>
                          <i className="fas fa-edit"></i>
                        </Link>
                      </td>
                      <td>
                        <Link to={`/admin/editorders/${order._id}`}>
                          <i className="material-icons">&#xe5c9;</i>
                        </Link>
                      </td>
                      <td>
                        {order.paymentlink == "" ? (
                          ""
                        ) : (<div>                          {isZoomed ? (
                            <div className="zoomed-image">
                              <img
                             
                                src={order.paymentlink}
                                alt="My Image"
                                onClick={() => setIsZoomed(false)}
                                
                              />
                            </div>
                          ) : (
                            <img
                            style={{width:"100px", height:"70px"}}
                              src={order.paymentlink}
                              alt="My Image"
                              onClick={() => setIsZoomed(true)}
                            />
                          )}</div>

                        )}
                      </td>
                    </tr>
                  );
                })}
              {error && <Error error="something went wrong" />}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
