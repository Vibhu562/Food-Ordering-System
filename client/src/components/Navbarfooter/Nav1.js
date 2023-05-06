import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Nav1() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const dispatch = useDispatch()

  return (
    <div style={{ color: "black" }}>
      <div className="row justify-content-center mt-3">
         <div className="col-md-8 admins"> 
          <ul className="admin py-2">
            <li>
              <Link to="/admin/" style={{ color: "black" }}>
                Users list
              </Link>
            </li>
            <li>
              <Link to="/admin/restaurantslist" style={{ color: "black" }}>
                Restaurants list
              </Link>
            </li>
         
            <li>         
           
              <Link to="/admin/addnewfood" style={{ color: "black" }}>
              Add New Food
              </Link> 
            </li>
            <li>      
            <Link to="/admin/foodslist" style={{ color: "black" }}>
           Food List
              </Link>     
            </li>
            <li>           
           
           <Link to="/admin/tableslist" style={{ color: "black" }}>
          Table list
             </Link>  
              
             {currentUser._id == '630b7eb20acb2c86f8d4e85a'  ?(<Link to="/admin/complaintslist" style={{ color: "black",marginLeft:"19px" }}>
             Complaint list
              </Link>) : ( <Link to="/admin/complaintlist" style={{ color: "black" ,marginLeft:"19px" }}>
              Complaint list
              </Link>)}
           </li>
           <li>           
           
            
             {currentUser._id == '630b7eb20acb2c86f8d4e85a'  ?(<Link to="/admin/orderli" style={{ color: "black" }}>
             Order list
              </Link>) : ( <Link to="/admin/orderlists" style={{ color: "black" }}>
              Order list
              </Link>)}
           </li>
           <li>
           {currentUser._id == '630b7eb20acb2c86f8d4e85a'  ?(<Link to="/admin/feedbacklists" style={{ color: "black" }}>
             Feedback list
              </Link>) : ( <Link to="/admin/feedbacklist" style={{ color: "black" }}>
              Feedback list
              </Link>)}
           </li>
            
           
          
            <li>
           
            
            </li>
           
          </ul>
           </div> 
          </div>
          </div>
  );
}