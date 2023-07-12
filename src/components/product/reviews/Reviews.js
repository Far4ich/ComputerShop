import "../../../styles/Reviews.scss"
import Review from "./Review";
import ReviewForm from "./ReviewForm";
import React, { createContext, useEffect, useState } from "react";

export const ReviewsContext = createContext();

function Reviews(props) {
  const [reviews, setReviews] = useState([]);
 
  useEffect(()=>{
    setReviews(props.reviews);
  }, [props.reviews])

  const addReview = (review) => {
    let result = reviews.slice();
    result.push(review)
    setReviews(result);
  }

  return (
    <div className="Product-reviews">
      <ReviewsContext.Provider
        value={{
          addReview
        }}
      >
        <h2>Отзывы</h2>
        <div className="Product-reviews-list">
            {reviews.map((review, idx) =>
                <Review 
                    key={idx} 
                    userName={review.userName} 
                    text={review.text}/>
            )}
        </div>
        <ReviewForm />
      </ReviewsContext.Provider>
    </div>
  );
}

export default Reviews;