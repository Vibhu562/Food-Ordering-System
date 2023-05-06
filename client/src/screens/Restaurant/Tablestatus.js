import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTablesByUserId,deleteTable } from "../../actions/tableActions";
import Loader from '../../components/others/Loader'
import Error from '../../components/others/Error'
import Success from '../../components/others/Success'
import { Link } from "react-router-dom";
import { getRestaurantById,updateRestaurant } from "../../actions/restaurantAction";
export default function Tablestatus() {

  const tablestate = useSelector(state=>state.getTablesByUserIdReducer)

  const {tables , error , loading} = tablestate
  const getrestaurantbyidstate = useSelector( state => state.getRestaurantByIdReducer );
  const { restaurant } = getrestaurantbyidstate;
  const [tablestatus, settablestatus] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      dispatch(getTablesByUserId());
    } else {
      window.location.href = "/login";
    }
  }, [dispatch]);

  useEffect(() => {
    if (restaurant) {
      if (restaurant._id == restaurant._id) {
        settablestatus(restaurant.tablestatus);
      
      } else {
        dispatch(getRestaurantById(restaurant._id));
      }
    } else {
      dispatch(getRestaurantById(restaurant._id));
    }
  }, [dispatch, restaurant._id,restaurant._id]);
  function editrestaurant(e) {
    e.preventDefault();
    const updatedrestaurant = {    
      tablestatus:tablestatus+1,
    
    };
    dispatch(updateRestaurant(restaurant._id, updatedrestaurant));
   
  }

  return (
    <div className="table-responsive m-2">
      <div className="row justify-content-center mt-5">
        <div className="col-md-10">
          <h2>MY TABLE</h2>

          <table className="table table-striped  table-responsive">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Members</th>
                <th>Restaurant Name</th>
                <th>Table Available</th>
                <th>Delete Table</th>
              </tr>
            </thead>
            <tbody>
                  {loading && (<Loader/>)}
                  {tables && (tables.map(table=>{
                    return <tr >
                     <td>{table.name}</td>
                      <td>{table.email}</td>  
                      <td>{table.members}</td>  
                      <td>{table.restaurant}</td>  
                      <td>{table.tableavailable}</td>  
                      <td><form onSubmit={editrestaurant}>
                   <button style={{border:"none"}}> <i
                      class="far fa-trash-alt"  style={{ marginRight: "10px" }}
                      onClick={() => {
                        dispatch(deleteTable(table._id));
                      }}
                    ></i></button></form></td>
                      </tr>
                  }))}
                  {error && (<Error error='something went wrong'/>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
