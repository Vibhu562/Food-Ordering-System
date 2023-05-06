import {getRestaurantById} from '../../actions/restaurantAction';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from '../../components/others/Loader'
import Error from '../../components/others/Error'
import Success from '../../components/others/Success'
import Review from "../../components/others/Review";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import { getFoodById } from '../../actions/foodAction';
import Reviewfood from '../../components/others/Reviewfood';
import Sentiment from 'sentiment';
const sentiment = new Sentiment();

export default function Recipe() {
  let { id } = useParams();
  const dispatch = useDispatch()

  const getfoodbyidstate = useSelector( state => state.getFoodByIdReducer );
  const { food ,loading,error} = getfoodbyidstate;
  useEffect(() => {
      dispatch(getFoodById(id));
  }, [dispatch]);  

  const getrestaurantbyidstate = useSelector( state => state.getRestaurantByIdReducer );
  const { restaurant } = getrestaurantbyidstate;
  
  const [phrase, setPhrase] = useState('');
  const [sentimentScore, setSentimentScore] = useState(null);

  useEffect(() => {
    setSentimentScore(sentiment.analyze(phrase));
  }, [phrase]);

  return (
    <div>
    {loading ? (
          <Loader/>
        ) : error ? (
          <Error error='Something Went Wrong' />
        ) : (
          <div className="row mt-5 justify-content-center table-responsive">
          <div className="col-md-5">
            <div className="img-wrapper">
            <img
                src={food.image}
                className="img-fluid m-3 bigimg"
                alt=""   /> 
            </div>
            <Reviewfood  key = {food._id} food={food}/>
          </div>
          <div className='col-md-6 ms-5 '>
          <h7 style={{fontSize: '2.5em'}} className="d-flex m-0 justify-content-start"><b>{food.name} - Recipe</b></h7>
          <div className="d-flex m-0 justify-content-start">Calories - {food.calories}</div><br/>
          <div style={{alignItems:"right"}} className="d-flex m-0 justify-content-start">
            <img src={food.description1} style={{
              height: "100%" ,width:"100%", objectFit: "cover", borderRadius: "15px",
              }} className="mb-2 " alt="" />
          </div>
          
          </div>
         <div>
          </div>
        </div>
      )}
     
    </div>
  )
}
