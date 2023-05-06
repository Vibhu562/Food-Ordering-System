import './Signup.module.css';
import React from 'react'; 
function Validate(valid) {
  if (document.myform.Name1.value === "") {
    alert("Please fill in the 'Your Name' box.");
    valid = false;
  }
  if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      document.myform.email1.value
    )
  ) {
    valid = true;
  } else {
    alert("You have entered an invalid email address!");
    valid = false;
  }
  var y = document.myform.zip1.value;
  console.log(y);
  if (y.length !== 6) {
    alert("Please fill in the 'Your zip code' box.");
    valid = false;
  }
  if (document.myform.abc.value === "-1") {
    alert("Please select country from list");
    valid = false;
  }
}

export default function Signup() {
 
return (
	<div className="form">
	<div>
		<h1 className="text-center">User Registration</h1>
	</div>

	{/* Calling to the methods */}
	<div className="messages">
	</div>
	<form className="m">
		{/* Labels and inputs for form data */}<br></br><br></br>
		<label className="label" >Full Name</label>
		<input  className="input"	 type="text" name = "Name1" required/><br></br><br></br>
    <label className="label">Email ID</label>
		<input  className="input"  type="email" name= "email1" required /><br></br><br></br>
		<label className="label">Password</label>
		<input  className="password" type="password" /><br></br><br></br>
		<button  className="btn border border-dark bg-warning" type="submit" onClick={Validate} >
		Sign UP
		</button>
	</form>
	</div>
);
}
