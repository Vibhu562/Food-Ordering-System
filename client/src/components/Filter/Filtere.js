import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterFoods } from "../../actions/foodAction";

export default function Filtere() {
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
      <div className="col-md-3"  style={{marginTop:'15px'}}>
          <input
           value={searchkey}
           onChange={(e) => {
             setsearchkey(e.target.value);
           }}
            type="text"
            placeholder="Search Foods By Name "
            className="form-control"
            name = "myname" id="checkmsg" 
          />
        </div >
        <div className="col-md-1 mt-4" >
          <select  className="form-control" value ={categoryabc} onChange={(e)=>{setcategoryabc(e.target.value)}}>
            <option value="Calories">Calories</option>
            <option value="htl">high to Low (Calories)</option>
            <option value="lth">Low To High (Calories)</option>
          </select>
        </div>
        <div className="col-md-1 mt-4" >
          <select  className="form-control" value ={sorta} onChange={(e)=>{setsorta(e.target.value)}}>
            <option value="Popular">Rating</option>
            <option value="htl">high to Low (Rating)</option>
            <option value="lth">Low To High (Rating)</option>
          </select>
        </div>
        <div className="col-md-1 mt-4" >
          <select  className="form-control" value ={sort} onChange={(e)=>{setsort(e.target.value)}}>
            <option value="Popular">Price</option>
            <option value="htl">high to Low (Price)</option>
            <option value="lth">Low To High (Price)</option>
          </select>
        </div>
        <div className="col-md-1 mt-4">
          <select  className="form-control " value={vitamin} onChange={(e)=>setvitamin(e.target.value)}>
            <option value="all">Vitamin</option>
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
            <option value="d">D</option>
            <option value="e">E</option>
            <option value="k">K</option>
          </select>
        </div>
        
        <div className="col-md-1 mt-4">
          <select  className="form-control " value={category} onChange={(e)=>setcategory(e.target.value)}>
            <option value="all">Type</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="nonveg">Non Veg</option>
          </select>
        </div>
        <div className="col-md-2 mt-4">
          <select  className="form-control " value={disease} onChange={(e)=>setdisease(e.target.value)}>
            <option value="all">Food to be Eaten in Disease</option>
            <option value="diabetes">Diabetes</option>
            <option value="flu">Flu</option>
            <option value="headache">Headache</option>
            <option value="malaria">Malaria</option>
            <option value="dengue">Dengue</option>
            <option value="asthma">Asthma</option>
            <option value="cancer">Cancer</option>
            <option value="cough">Cough</option>
          </select>
        </div>
       
          <button className="col-md-1 mt-4 btn btn-warning text-dark fw-bold" onClick={()=>{dispatch(filterFoods(searchkey , sort ,sorta, categoryabc , category , disease,vitamin , platter))}}>Filter</button>
      </div>      
    </div>
  );
}
