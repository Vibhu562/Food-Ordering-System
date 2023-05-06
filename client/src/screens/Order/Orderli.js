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

export default function Orderli() {
    
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
        <h3>Total Orders : - {orders.length}</h3>
        {orders.length == 50 ? (alert("Orders are too much")):(
            ''
        )}
            <Nav1/>
            {loading && (<Loader/>)}
            {error && (<Error error='something went wrong'/>)}
            <h2>Orders List<h1>Click on Order Id for more info</h1></h2>
            <table className='table table-striped table-bordered table-responsive '>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Email</th>
                        <th>User Id</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Transaction Id</th>
                        <th>Customer otp</th>
                        <th>Order Cancelled</th>
                       
                    </tr>
                    </thead>

                    <tbody>
                         {orders && (orders.map(order=>{
                            return (
                                (currentUser.email == "vibhunohria4@gmail.com" && order.deletes== false ?(
                        <tr >
                                <td onClick={()=>{window.location.href=`/orderinfo/${order._id}`}}>{order._id}</td>
                                <td>{order.email}</td>
                                <td>{order.userid}</td>
                                <td>{order.orderAmount}</td>
                                <td>{order.date}</td>
                                <td>{order.time}</td>
                                <td>{order.transactionId}</td>
                                <td>{order.otp}</td>
                                <td>{order.cancel == true ? <i className='material-icons'>&#xe5c9;</i> : 
                                <i className='material-icons'></i>}</td>
                                
                               
                            </tr>  
                              ):(<div></div>)))
                        }))}
                    </tbody>   
            </table>          
            
        </div>
  )
}
