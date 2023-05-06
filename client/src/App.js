import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Homescreen from "./screens/Extra/Homescreen";
import Cartscreen from "./screens/Extra/Cartscreen";
import Registerscreen from "./screens/User/Registerscreen";
import Loginscreen from "./screens/User/Loginscreen";
import Profilescreen from "./screens/User/Profilescreen";
import Adminscreen from "./screens/Extra/Adminscreen";
import Userslist from "./screens/User/Userslist";
import Footer from "./components/Footer";
import Addfood from "./screens/Add/Addfood";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import NewsletterForm from "./components/News/NewsletterForm";
import Restaurantscreen from "./screens/Restaurant/Restaurantscreen";
import Addrestaurant from "./screens/Add/Addrestaurant";
import Restaurantlist from "./screens/Restaurant/Restaurantlist";
import Editrestaurant from "./screens/Edit/Editrestaurant";
import Menuscreen from "./screens/Restaurant/Menuscreen";
import Foodlist from "./screens/Foodlist/Foodlist";
import Editfood from "./screens/Edit/Editfood";
import Foodmenu from "./screens/Foodmenu/Foodmenu";
import Geolocation from "./screens/Other/Geolocation";
import Orderinfo from "./screens/Order/Orderinfo";
import Recipe from "./screens/Other/Recipe";
import Editorder from "./screens/Edit/Editorder";
import Tablelist from "./screens/Restaurant/Tableslist";
import Edittable from "./screens/Edit/Edittable";
import Tablestatus from "./screens/Restaurant/Tablestatus";
import Orderlists from "./screens/Order/Orderlists";
import Tablebookings from "./screens/Restaurant/Tablebookings";
import React, { Component } from "react";
import Ordersscreens from "./screens/Order/Ordersscreens";
import Foodmenus from "./screens/Foodmenu/Foodmenus";
import Cartscreens from "./screens/Extra/Cartscreens";
import Orderli from "./screens/Order/Orderli";
import Contact from "./screens/Extra/Contact";
import Complaintlist from "./screens/Restaurant/Complaintlist";
import Editcomplaint from "./screens/Edit/Editcomplaint";
import Registersscreen from "./screens/User/Registersscreen";
import Editres from "./screens/Edit/Editres";
import Instruction from "./screens/Other/Instruction";
import Sample from "./screens/Add/Sample";
import Foodsample from "./screens/Add/Foodsample";
import Complaintslist from "./screens/Restaurant/Complaintslist";
import Feedbacklist from "./screens/Restaurant/Feedbacklist";
import Feedbacklists from "./screens/Restaurant/Feedbacklists";
import Editorders from "./screens/Edit/Editorders";
import Editorderss from "./screens/Edit/Editorderss";
import Editordersss from "./screens/Edit/Editordersss";
import Extra from "./screens/Other/Extra";
import Csv from "./screens/Other/Csv";
import MyNavbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <PayPalScriptProvider />
      <BrowserRouter>
        <Routes>
          <Route exact path="/restaurant" element={<Homescreen />} />
          <Route path="" element={<Restaurantscreen />} />
          <Route path="/restaurant/menu/:id" element={<Menuscreen />} />
          <Route path="/sample" element={<Sample />} />
          <Route path="/foodsample" element={<Foodsample />} />
          <Route path="/restaurant/menu/:id/food" element={<Foodmenu />} />
          <Route
            path="/restaurant/menu/:id/table"
            element={<Tablebookings />}
          />
          <Route path="/restaurant/menu/:id/cart" element={<Cartscreen />} />
          <Route path="/restaurant/menu/:id/platter" element={<Foodmenus />} />
          <Route path="/food/:id/:id" element={<Recipe />} />
          <Route path="/food/:id/:id/extra" element={<Extra />} />
          <Route path="/restaurant/menu/:id/carts" element={<Cartscreens />} />
          <Route path="/register" element={<Registerscreen />} />
          <Route path="/login" element={<Loginscreen />} />
          <Route path="/orders" element={<Ordersscreens />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/csv" element={<Csv />} />
          <Route
            path="/restaurant/menu/:id/tablestatus"
            element={<Tablestatus />}
          />
          <Route path="/orderinfo/:id" element={<Orderinfo />} />
          <Route path="/profile" element={<Profilescreen />} />
          <Route path="/admin" element={<Adminscreen />} />
          <Route path="/admin/" element={<Userslist />} />
          <Route path="/register/restaurant" element={<Addrestaurant />} />
          <Route path="/register/customer" element={<Registersscreen />} />
          <Route path="/admin/restaurantslist" element={<Restaurantlist />} />
          <Route path="/admin/addnewrestaurant" element={<Addrestaurant />} />
          <Route path="/admin/addnewfood" element={<Addfood />} />
          <Route path="/admin/foodslist" element={<Foodlist />} />
          <Route path="/admin/tableslist" element={<Tablelist />} />
          <Route path="/instruction" element={<Instruction />} />
          <Route
            path="/admin/editrestaurant/:id"
            element={<Editrestaurant />}
          />
          <Route path="/admin/editrestaurants/:id" element={<Editres />} />
          <Route path="/admin/editfood/:id" element={<Editfood />} />
          <Route path="/admin/edittable/:id" element={<Edittable />} />
          <Route path="/admin/editorder/:id" element={<Editorder />} />
          <Route path="/admin/editorders/:id" element={<Editorders />} />
          <Route path="/admin/editorderss/:id" element={<Editorderss />} />
          <Route path="/admin/editordersss/:id" element={<Editordersss />} />
          <Route path="/admin/editcomplaint/:id" element={<Editcomplaint />} />
          <Route path="/admin/orderlists" element={<Orderlists />} />
          <Route path="/admin/complaintlist" element={<Complaintlist />} />
          <Route path="/admin/feedbacklist" element={<Feedbacklist />} />
          <Route path="/admin/feedbacklists" element={<Feedbacklists />} />
          <Route path="/admin/orderli" element={<Orderli />} />
          <Route path="/GeoLocation" element={<Geolocation />} />
          <Route path="/admin/complaintslist" element={<Complaintslist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
