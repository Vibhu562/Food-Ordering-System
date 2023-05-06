import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterFoods } from "../../actions/foodAction";

export default function Filteree() {
  const [searchkey, setsearchkey] = useState("");
  const [sort, setsort] = useState("popular");
  const [sorta, setsorta] = useState("popular");
  const [categoryabc, setcategoryabc] = useState("Calories");
  const [category, setcategory] = useState("all");
  const [disease, setdisease] = useState("all");
  const [vitamin, setvitamin] = useState("all");
  const [platter, setplatter] = useState("all");
  
  const handleInput = (e)=>{
    var msg = document.getElementById("checkmsg").value;
    if (msg === "") {
      window.location.reload();
    }
  }
  const dispatch = useDispatch()
  return (
    <div className="responsive-sm">
      <div className="row justify-content-center">
    
        <div className="col-md-2 mt-4">
          <select  className="form-control " value={platter} onChange={(e)=>setplatter(e.target.value)}>
            <option value="all">Platter </option>
            <option value="southindian">South Indian Platter</option>
            <option value="northindian">North Indian Platter</option>
            <option value="chinese">Chinese Platter</option>
            <option value="pannermenu">Panner platter</option>
          </select>
        </div>
          <button className="col-md-2 mt-4 btn btn-warning text-dark fw-bold" onClick={()=>{dispatch(filterFoods(searchkey , sort ,sorta, categoryabc , category , disease,vitamin , platter))}}>Filter</button>
      </div>      
    </div>
  );
}
