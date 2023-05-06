import Rating from "react-rating";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFoodReview } from "../../actions/foodAction";
import { Link } from "react-router-dom";
import Sentiment from 'sentiment';
const sentiment = new Sentiment();

export default function Reviewfood({ food }) {
  const dispatch = useDispatch();
  const [rating, setrating] = useState(5);
  const getrestaurantbyidstate = useSelector( state => state.getRestaurantByIdReducer );
  const { restaurant } = getrestaurantbyidstate;
  const [phrase, setPhrase] = useState('');
  const [sentimentScore, setSentimentScore] = useState(null);
 
  function sendreview() {
   
    if (localStorage.getItem('currentUser')){
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    var alreadyreviewed;

    for (var i = 0; i < food.reviews.length; i++) {
      if (food.reviews[i].userid == currentUser._id) {
        alreadyreviewed = true;
      }
    }
    const review = {
      rating: rating,
      sentimentScore : sentimentScore.score ,
    };
    dispatch(addFoodReview(review, food._id , food.name));
    window.location.reload()
    }
    else{
     window.location.href = '/login'
    }
  }
  
  // Sentimental Analysis
  
  useEffect(() => {
    setSentimentScore(sentiment.analyze(phrase) );
  }, [phrase]);

  return (
    <div className="text-start ms-3  justify-content-center">
      <h4>Leave a review</h4>
      <Rating
        initialRating={rating}
        emptySymbol="fa fa-star fa-1x text-info "
        fullSymbol="fa fa-star fa-1x text-warning"
        readonly={false}
        onChange={(e) => {
          setrating(e);
        }}
      /><br></br>
<input value={phrase} onChange={e => setPhrase(e.target.value)}
  style={{ padding: '20px', fontSize: '20px', width: '90%' }} maxLength={20}
/>
{
  sentimentScore !== null ?
    <p>Sentiment Score: {sentimentScore.score}</p>
    : ''
}
          <Link to={`/restaurant/menu/${restaurant._id}`}  style={{textDecoration: "none", color: "white"}}>
      <button className="btn mt-3 btn-primary fw-bold" onClick={sendreview}>
        Submit
      </button></Link>
      <h4 className="mt-3">Latest Reviews</h4>
      {food.reviews && food.reviews.map(review => {
          return (
            <div className="text-start mt-2">
              <h1 className="mt-3 ">{review.comment} </h1>
             
              <div className="fw-bold" ><Rating
                initialRating={review.rating}
                emptySymbol="fa fa-star fa-1x text-white "
                fullSymbol="fa fa-star fa-1x text-warning"
                readonly
              /> </div>
              <h6 className="mt-2 text-muted text-small">Sentimental Score: {review.sentimentScore}</h6>
              <h6 className="mt-2 text-muted text-small">By: {review.name}</h6> 

              <hr />
            </div>
          );
        })}
        
    </div>
  );
}
