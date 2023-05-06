import React from "react";
import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from '../../components/others/Loader'
import Error from '../../components/others/Error'
import Success from '../../components/others/Success'
import { deleteUser, getAllUsers } from "../../actions/userActions";
import Nav1 from "../../components/Navbarfooter/Nav1";
export default function Userslist() {
  const dispatch = useDispatch()
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const getallusersstate = useSelector((state) => state.getAllUsersReducer);
  const { users, loading, error } = getallusersstate;
  useEffect(() => {
    dispatch(getAllUsers());
      // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [dispatch])
  
  function abc (){
    window.location.href ='/admin'
  }
  window.setTimeout( function() {
    window.location.reload();
  }, 20000);
  return (

    <div className="table-responsive me-3 ms-2 mt-2 card text-center shadow p-3 mb-5 bg-white rounded">
    <Nav1/>
      <h2 className="justify-content-center ">User list</h2>
      <table className='table table-striped table-bordered '>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {loading && <Loader />}
          {error && <Error error="Something went wrong" />}
          {users &&  users.map((user) => {
              return (
                (currentUser._id ==  user._id  ?
                (
                  <tr>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>   
                  <td>
                    <i
                      class="far fa-trash-alt"
                      onClick={() => {
                        dispatch(deleteUser(user._id));
                      }}
                    ></i>
                  </td>
                </tr>
                ):(<div></div>))            
              );
            })}
             {loading && <Loader />}
          {error && <Error error="Something went wrong" />}
          {users &&  users.map((user) => {
              return (
                (currentUser._id ==  "630b7eb20acb2c86f8d4e85a" 
                  ?
                (
                  <tr>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>          
                  <td>
                    <i
                      class="far fa-trash-alt"
                      onClick={() => {
                        dispatch(deleteUser(user._id));
                      }}
                    ></i>
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
