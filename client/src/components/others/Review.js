import React, { useState } from "react";
import Rating from "react-rating";
import { useDispatch, useSelector } from "react-redux";
import { addRestaurantReview } from "../../actions/restaurantAction";
export default function Review({ restaurant }) {
  const dispatch = useDispatch();
  const [rating, setrating] = useState(5);
  const [ratinga, setratinga] = useState(5);
  const [ratingb, setratingb] = useState(5);
  const [comment, setcomment] = useState("");

  function sendreview() {
    if (localStorage.getItem('currentUser')){
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    var alreadyreviewed;

    for (var i = 0; i < restaurant.reviews.length; i++) {
      if (restaurant.reviews[i].userid == currentUser._id) {
        alreadyreviewed = true;
      }
    }
    if (alreadyreviewed) {
      alert("You have already reviewed this product");
    } else {
      const review = {
        rating: rating,
        ratinga,ratinga,
        ratingb,ratingb,
        comment: comment,
      };
      dispatch(addRestaurantReview(review, restaurant._id , restaurant.name));
      window.location.reload()
    } 
    }
    else{
     window.location.href = '/login'
    }
  }
  
  return (
    <div className="text-start p-4 ms-2 justify-content-center">
      <h4>Leave a review</h4>
      <div className="fw-bold" style={{borderRadius: '5px', backgroundColor: '#3772FF', padding: '5px 10px', display:'inline-block', color:'white'}}>
      <div><Rating
        initialRating={rating}
        emptySymbol="fa fa-star fa-1x text-light "
        fullSymbol="fa fa-star fa-1x text-warning"
        readonly={false}
        onChange={(e) => {
          setrating(e);
        }}
      /><span className="ms-2">Food Quality</span> </div>
      
      <div><Rating
        initialRating={ratinga}
        emptySymbol="fa fa-star fa-1x text-light "
        fullSymbol="fa fa-star fa-1x text-warning"
        readonly={false}
        onChange={(e) => {
          setratinga(e);
        }}
      /> <span className="ms-2">Ambience</span></div>
      <div><Rating
        initialRating={ratingb}
        emptySymbol="fa fa-star fa-1x text-light "
        fullSymbol="fa fa-star fa-1x text-warning"
        readonly={false}
        onChange={(e) => {
          setratingb(e);
        }}
      /> <span className="ms-2">Service</span></div>
      </div>
     
      <input
        type="text"
        className="form-control mt-2 widths"
        value={comment} placeholder="What did you like about this restaurant?"
        onChange={(e) => {
          setcomment(e.target.value);
        }}
      />
      <button className="btn mt-3 btn-primary fw-bold" onClick={sendreview}>
        Submit
      </button>
  <hr/>
      <h4 className="mt-3">Latest Reviews</h4>
      {restaurant.reviews && restaurant.reviews.map(review => {
          return (
            <div className="text-start mt-2">
              <h1 className="mt-3 ">{review.comment} </h1>
             
              <div className="fw-bold" style = {{backgroundColor:"#3772FF",display:'inline-block', color:'white' , padding:"2px 5px", borderRadius:"5px"}}><Rating
                initialRating={review.rating}
                emptySymbol="fa fa-star fa-1x text-white "
                fullSymbol="fa fa-star fa-1x text-warning"
                readonly
              /><span className="ms-2">Food Quality</span> 
      
               <Rating
                initialRating={review.ratinga}
                className="ms-2"
                emptySymbol="fa fa-star fa-1x text-white "
                fullSymbol="fa fa-star fa-1x text-warning"
                readonly
              /><span className="ms-2">Ambience</span>
                
                <Rating
                initialRating={review.ratingb}
                className="ms-2"
                emptySymbol="fa fa-star fa-1x text-white "
                fullSymbol="fa fa-star fa-1x text-warning"
                readonly
              /><span className="ms-2">Service</span></div>
              <h6 className="mt-2 text-muted text-small">By: {review.name}</h6> 
              <hr />
            </div>
          );
        })}
    </div>
  );
}
