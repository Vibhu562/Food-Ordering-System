import React from "react";
import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from '../../components/others/Loader'
import Error from '../../components/others/Error'
import { Link } from "react-router-dom";
import Success from '../../components/others/Success'
import { deleteUser, getAllUsers } from "../../actions/userActions";
import { deleteTable,getAllTables } from "../../actions/tableActions";
import Nav1 from "../../components/Navbarfooter/Nav1";
export default function Tablelist() {
  const dispatch = useDispatch()
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const getalltablesstate = useSelector((state) => state.getAllTablesReducer);
  const { tables, loading, error } = getalltablesstate;
  useEffect(() => {
    dispatch(getAllTables());
      // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [dispatch])
  const getrestaurantbyidstate = useSelector( state => state.getRestaurantByIdReducer );
  const { restaurant } = getrestaurantbyidstate;

  function abc (){
    window.location.href ='/admin'
  }
  window.setTimeout( function() {
    window.location.reload();
  }, 20000);
  return (

    <div className="table-responsive me-3 ms-2 mt-2 card text-center shadow p-3 mb-5 bg-white rounded">
    <Nav1/>
   
      <h2 className="justify-content-center ">Table list</h2> 
      <table className='table table-striped table-bordered table-responsive'>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Restaurant</th>
            <th>Email id</th>
            <th>User id Otp</th>
            <th>Phone Number</th>
            <th>Date</th>
            <th>Time</th>
            <th>Members Count</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {loading && <Loader />}
          {error && <Error error="Something went wrong" />}
          {tables &&  
          tables.map((table) => {
              return (
                (table.restaurantemail == currentUser.email  ?
                  (
                  <tr>
                  <td>{table._id}</td>
                  <td>{table.name}</td>
                  <td>{table.restaurant}</td>
                  <td>{table.email}</td>
                  <td>{table.otp}</td>
                  <td>{table.phonenumber}</td>
                  <td>{table.date.substring(0,10)}</td>
                  <td>{table.time}</td>
                  <td>{table.members}</td>
                  <td>
                    <i
                      class="far fa-trash-alt"  style={{ marginRight: "10px" }}
                      onClick={() => {
                        dispatch(deleteTable(table._id));
                      }}
                    ></i></td>
                 <td>
                        <Link to={`/admin/edittable/${table._id}`}><i className="fas fa-edit"></i></Link>
                  </td>
                </tr>  
                                ):(<div></div>))             
              );
              })}
            
               {loading && <Loader />}
          {error && <Error error="Something went wrong" />}
          {tables &&  
          tables.map((table) => {
              return (
                (currentUser._id == "630b7eb20acb2c86f8d4e85a"  ?
                  (
                  <tr>
                   <td>{table._id}</td>
                  <td>{table.name}</td>
                  <td>{table.restaurant}</td>
                  <td>{table.email}</td>
                  <td>{table.otp}</td>
                  <td>{table.phonenumber}</td>
                  <td>{table.date.substring(0,10)}</td>
                  <td>{table.time}</td>
                  <td>{table.members}</td> 
                  <td>
                    <i
                      class="far fa-trash-alt"  style={{ marginRight: "10px" }}
                      onClick={() => {
                        dispatch(deleteTable(table._id));
                      }}
                    ></i></td><td>
                        <Link to={`/admin/edittable/${table._id}`}><i className="fas fa-edit"></i></Link>
                  </td>
                </tr>  
                                ):(<div></div>))             
              );
              })}
        </tbody>
      </table>
    </div>
  );
}
