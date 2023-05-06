import React from "react";
import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from '../../components/others/Loader'
import Error from '../../components/others/Error'
import Success from '../../components/others/Success'
import { Link } from "react-router-dom";
import { getAllFoods,deleteFood } from "../../actions/foodAction";
import Nav1 from "../../components/Navbarfooter/Nav1";

export default function Foodlist() {
    const dispatch = useDispatch();
    const getallfoodsstate = useSelector(
      (state) => state.getAllFoodsReducer
    )
    const { foods, loading, error } = getallfoodsstate;
  
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    useEffect(() => {
      dispatch(getAllFoods());
    }, [dispatch])
    function abc (){
      window.location.href ='/admin'
    }
    window.setTimeout( function() {
      window.location.reload();
    }, 50000);
  return (
    <div className="table-responsive me-3 ms-2 mt-2 card text-center shadow p-3 mb-5 bg-white rounded">
      <Nav1/>
    <h2>Foods list</h2>

    <table className="table table-striped table-bordered ">
      <thead>
        <tr>
          <th>Name</th>
          <th>CountInStock</th>
          <th>Calories</th>
          <th>Id</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {loading && <Loader />}
        {error && <Error error="something went wrong" />}
        {foods &&
          foods.map((food) => {
            return (
              ( currentUser.email == food.email ?(<tr>
                <td>{food.name}</td>
                <td>{food.countInStock}</td>
                <td>{food.calories}</td>
                <td>{food._id}</td>
                <td>{food.email}</td>
                <td>
                  <i
                    className="far fa-trash-alt"
                    style={{ marginRight: "10px" }} onClick={()=>{dispatch(deleteFood(food._id))}}
                  ></i>
                  <Link to={`/admin/editfood/${food._id}`}><i className="fas fa-edit"></i></Link>
                </td>
              </tr>):(<div></div>))
              
            );
          })}
          {foods &&
          foods.map((food) => {
            return (
              ( currentUser.email == "vibhunohria4@gmail.com" ?(<tr>
                <td>{food.name}</td>
                <td>{food.countInStock}</td>
                <td>{food.calories}</td>
                <td>{food._id}</td>
                <td>{food.email}</td>
                <td>
                  <i
                    className="far fa-trash-alt"
                    style={{ marginRight: "10px" }} onClick={()=>{dispatch(deleteFood(food._id))}}
                  ></i>
                  <Link to={`/admin/editfood/${food._id}`}><i className="fas fa-edit"></i></Link>
                </td>
              </tr>):(<div></div>))
              
            );
          })}
      </tbody>
    </table>
  </div>
  )
}
