import React from "react";
// import { FaStar } from "react-icons/fa";
import "./StarRating.css";
const StarRating = (props) => {
  // const [rating, setRating] = useState(null);
  // const [hover, setHover] = useState(null);
  const rateTotal = 5;
  const ratePerscentage = (props.rate / rateTotal) * 100;
  //round ratePercentage to the neareast 10
  const ratePercentageRounded = `${Math.round(ratePerscentage / 10) * 10}%`;
  return (
    <div className="stars">
      {/* {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })} */}
      {/* {[...Array(5)].map(() => {
        return (
          <div className="outer-star">
            <FaStar />
            <div className="inner-star">
              <FaStar />
            </div>
          </div>
        );
      })} */}
      <div className="stars-outer">
        <div
          className="stars-inner"
          style={{ width: ratePercentageRounded }}
        ></div>
      </div>
    </div>
  );
};

export default StarRating;
