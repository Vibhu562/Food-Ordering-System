import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../actions/userActions";
import Loader from '../../components/others/Loader'
import Error from '../../components/others/Error'
import Success from '../../components/others/Success'
import { logoutUser } from "../../actions/userActions";
export default function Profilescreen() {
  const loginstate = useSelector((state) => state.loginReducer);
  const updateuserstate = useSelector((state) => state.updateReducer);
  const currentUser = loginstate.currentUser;
  const {loading , success,error} = updateuserstate
  const dispatch = useDispatch()
  const [name, setname] = useState(currentUser.name);
  const [email, setemail] = useState(currentUser.email);
  const [Address, setaddress] = useState(currentUser.Address);
  const [phonenumber, setphonenumber] = useState(currentUser.phonenumber);
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  function update(e) {

    e.preventDefault()
    if (password == cpassword) {
      const updateduser = {
        name: name,
        email: email,
        Address : Address ,
        phonenumber : phonenumber,
        password: password,
      }
      dispatch(updateUser(currentUser._id , updateduser),dispatch(logoutUser()));
      window.location.href ="/"
    }
    else{
        alert('Passwords Not matched')
    }
  }

  return (
    <div className="login1">
      <div className="row justify-content-center me-3 ms-2 responsive-sm ">
        <div className="col-md-5 card p-3 " style={{ marginTop: "50px" }}>
          <div className="div">
            <h2 className="text-center m-3">Update</h2>

            {loading && <Loader />}
            {error && (
              <Error error="Something went wrong"></Error>
            )}
            {success && <Success success="Your Details updated success , please re-login" />}

            <form onSubmit={update}>
              <input
                type="text"
                placeholder="name"
                className="form-control"
                required
                
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
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
          <input type = "text" placeholder='Address' className='form-control'  value = {Address} required onChange = {(e)=>{setaddress(e.target.value)}} />
            <input type = "number" placeholder='phonenumber' className='form-control' value = {phonenumber} required onChange = {(e)=>{setphonenumber(e.target.value)}} />
          
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

              <input
                type="password"
                placeholder="confirm password"
                className="form-control"
                value={cpassword}
                required
                onChange={(e) => {
                  setcpassword(e.target.value);
                }}
              />
              <div className="text-right ">
                <button type="submit" className="btn mt-3 btn-primary">
                  UPDATE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}