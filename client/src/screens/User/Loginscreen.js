import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../actions/userActions";
import Loader from "../../components/others/Loader";
import Error from "../../components/others/Error";
import Success from "../../components/others/Success";
import Button from "react-bootstrap/Button";
import { ButtonGroup } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
export default function Loginscreen() {
  const loginreducer = useSelector((state) => state.loginReducer);
  const { loading, error, success } = loginreducer;

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();
  function login(e) {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    dispatch(loginUser(user));
  }

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);
  function xyz() {
    window.location.href = "/register/customer";
  }
  function xyza() {
    window.location.href = "/register";
  }
  return (
    <div className="login1">
      <div className="row justify-content-center m-5">
        <div
          className="col-md-4 card p-3 shadow p-3 mb-2 bg-white rounded"
          style={{ marginTop: "100px" }}
        >
          <div className="div" onSubmit={login}>
            <h2 className="text-center m-3" style={{ display: "inline" }}>
              Login
            </h2>
            <i className="fa fa-sign-in"></i>
            {error && <Error error="Invalid Credentials" />}
            {loading && <Loader />}
            {success && <Success success="Login Successfull" />}
            <form>
              <input
                type="text"
                placeholder="email"
                className="form-control"
                value={email}
                required
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="password"
                className="form-control"
                value={password}
                required
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              <div className="row justify-content-center">
                <button type="submit" className="btn mt-3 col-md-4 btn-primary">
                  Login
                </button>
              <ButtonGroup className="col-md-4 mt-3">
              <DropdownButton
                as={ButtonGroup}
                title="Create Account"
                id="bg-nested-dropdown"
              >
                <Dropdown.Item eventKey="1" onClick={xyz}>
                  <a style={{ textDecoration: "none" }}>Customer</a>
                </Dropdown.Item>
                <Dropdown.Item eventKey="2" onClick={xyza}>
                  <a style={{ textDecoration: "none" }}>Restaurant owner</a>
                </Dropdown.Item>
              </DropdownButton>
            </ButtonGroup>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
