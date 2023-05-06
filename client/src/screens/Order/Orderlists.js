import React from 'react'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from "react-router-dom";
import Loader from '../../components/others/Loader'
import Error from '../../components/others/Error'
import Success from '../../components/others/Success'
import { getAllOrders } from '../../actions/orderActions'
import { deleteOrder } from '../../actions/orderActions'
import Nav1 from "../../components/Navbarfooter/Nav1";
import { Link } from "react-router-dom";

export default function Orderlists() {
    
    const getordersstate = useSelector(state => state.getAllOrdersReducer)
    const {loading , error , orders} = getordersstate
  
    const dispatch = useDispatch()
    let { id } = useParams();
    useEffect(() => {
       dispatch(getAllOrders())
        
    }, [dispatch])
    
    function x (){
        window.location.reload()
    }
    window.setTimeout( function() {
        window.location.reload();
      }, 20000);
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <div className='table-responsive me-3 ms-3 mt-2 shadow p-3 mb-5 bg-white rounded'>
            <Nav1/>
            {loading && (<Loader/>)}
            {error && (<Error error='something went wrong'/>)}
            <h2>Orders List<h1>Click on Order Id for more info</h1></h2>
            <table className='table table-striped table-bordered table-responsive '>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Email</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Transaction Id</th>
                        <th>Customer otp</th>
                        <th>Order Cancelled</th>
                        <th>Payment Provide for order cancelling</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                    </thead>

                    <tbody>
                        {orders && (orders.map(order=>{
                            return (
                                (currentUser.email == order.restaurantemail  ?(
                        <tr > 
                                <td onClick={()=>{window.location.href=`/orderinfo/${order._id}`}}>{order._id}</td>
                                <td>{order.email}</td>
                                <td>{order.orderAmount}</td>
                                <td>{order.date}</td>
                                <td>{order.time}</td>
                                <td>{order.transactionId}</td>
                                <td>{order.otp}</td>
                                <td>{order.cancel == true ? <i className='material-icons'>&#xe5c9;</i> : 
                                <i className='material-icons'></i>}</td>
                                                      <td ><Link to={`/admin/editordersss/${order._id}`}><i className="fas fa-edit"></i></Link></td>

                                {order.otp != "" || order.cancel == true ? (
                                     <i
                                     className="far fa-trash-alt"
                                     style={{ marginRight: "10px" }} onClick={()=>{dispatch(deleteOrder(order._id),x)}}
                                   ></i>
                                ) :(<div></div>)}
                                <td><Link to={`/admin/editorder/${order._id}`}><i className="fas fa-edit"></i></Link></td>
                                 
                            </tr>  
                              ):(<div></div>)))
                        }))}
                        
                    </tbody>   
            </table>          
            
        </div>
  )
}
