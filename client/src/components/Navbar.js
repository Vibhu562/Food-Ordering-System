import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./others/Loader";
import Error from "./others/Error";
import { logoutUser } from "../actions/userActions";
import { getAllRestaurants } from "../actions/restaurantAction";
import Navbar from "react-bootstrap/Navbar";
import icon from "../photo/icon.png";

export default function MyNavbar() {
  const EMPTY_CART = { cartItems: [] };
  const cartreducer = useSelector((state) => state.cartReducer || EMPTY_CART);
  const { cartItems } = cartreducer;
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const dispatch = useDispatch();
  // this_is_an_example is the key against translation in locales/en/translation.json file.
  const getallrestaurantsstate = useSelector(
    (state) => state.getAllRestaurantsReducer
  );
  const { restaurants, loading, error } = getallrestaurantsstate;
  useEffect(() => {
    dispatch(getAllRestaurants());
  }, [dispatch]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-warning px-4">
        <Navbar.Brand
          href="/"
          className="text-dark"
          style={{ fontFamily: "Kalam", fontSize: "20px" }}
        >
          <img
            alt=""
            src={icon}
            width="30"
            height="30"
            className="d-inline-block"
          />{" "}
          DishDash
        </Navbar.Brand>
        {currentUser ? (
          <div>
            {currentUser._id == "630b7eb20acb2c86f8d4e85a" ? (
              <div>
                <a href="/admin" className="navbar-brand text-dark">
                  Admin
                </a>
              </div>
            ) : (
              <div className=""> </div>
            )}
          </div>
        ) : (
          <div></div>
        )}

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="fas fa-bars" style={{ color: "white" }}></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            {currentUser ? (
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i style={{ color: "white" }} className="fa fa-user"></i>{" "}
                  {currentUser.name}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="/contact">
                    Super Admin Contact
                  </a>
                  {currentUser._id == "630b7eb20acb2c86f8d4e85a" ? (
                    ""
                  ) : (
                    <div>
                      <a href="/orders" className="dropdown-item">
                        Order Status
                      </a>
                    </div>
                  )}
                  <a className="dropdown-item" href="/profile">
                    Profile
                  </a>

                  {currentUser ? (
                    <div>
                      {loading && <Loader />}
                      {error && <Error error="something went wrong" />}
                      {restaurants &&
                        restaurants.map((restaurant) => {
                          return currentUser.email == restaurant.email &&
                            restaurant.approval == true ? (
                            <div>
                              <a href="/admin" className="dropdown-item">
                                Admin
                              </a>
                            </div>
                          ) : (
                            <div className=""></div>
                          );
                        })}
                    </div>
                  ) : (
                    ""
                  )}

                  <li
                    className="dropdown-item"
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    Logout<i className="fas fa-sign-out-alt ms-2"></i>
                  </li>
                </div>
              </div>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
