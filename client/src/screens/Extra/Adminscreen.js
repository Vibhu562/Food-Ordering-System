import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Addfood from "../Add/Addfood";
import Editrestaurant from "../Edit/Editrestaurant";
import { Routes,Route} from 'react-router-dom';
import Userslist from "../User/Userslist";
import Addrestaurant from "../Add/Addrestaurant";
import Restaurantlist from "../Restaurant/Restaurantlist";
import Editfood from "../Edit/Editfood";
import Orderlists from "../Order/Orderlists";
import Foodlist from "../Foodlist/Foodlist";
export default function Adminscreen() {
  const dispatch = useDispatch();
  const cartreducerstate = useSelector((state) => state.cartReducer);
  const { cartItems } = cartreducerstate;
  
  return (
    <div style={{ color: "black" }}>
      <div className="row justify-content-center mt-5">
        <div className="col-md-10">
          <ul className="admin p-2">
            <li>
              <Link to="/admin/" style={{ color: "black" }} disabled>
                Users list
              </Link>
            </li>
            <li>
              <Link to="/admin/restaurantslist" style={{ color: "black" }}>
                Restaurants list
              </Link>
            </li>
            <li>
              <Link to="/admin/addnewrestaurant" style={{ color: "black" }}>
                Add New Restaurant
              </Link>
            </li>
            <li>
              <Link to="/admin/orderlists" style={{ color: "black" }}>
                Orders list
              </Link>
            </li>
            <li>

            <Link to="/admin/addnewfood" style={{ color: "black" }}>
                Add New Food
              </Link>
            </li>
            <li>
            <Link to="/admin/foodslist" style={{ color: "black" }}>
                Food list
              </Link>
            </li>
          </ul>
          <Routes>
          <Route path="/" element={<Userslist/>} exact/>
          <Route path= '/admin/restaurantslist'  element ={<Restaurantlist/>}  exact/>
      <Route path= '/admin/addnewrestaurant'  element ={<Addrestaurant/>} exact />
      <Route path= '/admin/addnewfood'  element ={<Addfood/>}  exact/>
      <Route path= '/admin/foodslist'  element ={<Foodlist/>}  exact/>
      <Route path= '/admin/editrestaurant/:id'  element ={<Editrestaurant/>} exact />
      <Route path= '/admin/editfood/:id'  element ={<Editfood/>} exact />
      <Route path= '/admin/orderlists'  element ={<Orderlists/>}  exact/>
          </Routes>
          <div></div>
        </div>
      </div>
    </div>
  );
}
