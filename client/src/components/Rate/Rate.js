import { useState } from "react";

// Styles
import { Wrapper, Title, StarWrapper, Submit, StarIcon } from "./Styles";

const Star = ({ marked, starId }) => {
  return (
    <StarIcon data-star-id={starId} className="star" role="button">
      {marked ? "\u2605" : "\u2606"}
    </StarIcon>
  );
};

const Rate = ({ name, myRating, show, rateProfile }) => {
  const [rating, setRating] = useState(parseInt(myRating));
  const [selection, setSelection] = useState(0);
  const [rated, setRated] = useState(false);

  const hoverOver = (e) => {
    let val = 0;
    if (e && e.target && e.target.getAttribute("data-star-id"))
      val = e.target.getAttribute("data-star-id");
    setSelection(val);
  };

  const rate = () => {
    // update rating in user database
    rateProfile(rating);
    // setRated to true
    setRated(true);
    // Hide the component after some time
    setTimeout(() => show(false), 2000);
  };

  return rated ? (
    <Wrapper>
      <Title>Thank you for your feedback</Title>
    </Wrapper>
  ) : (
    <Wrapper>
      <Title>{`How would you rate your experience with ${name}`}</Title>
      <StarWrapper>
        <div
          onMouseOut={() => hoverOver(null)}
          onClick={(e) =>
            setRating(e.target.getAttribute("data-star-id") || rating)
          }
          onMouseOver={hoverOver}
        >
          {Array.from({ length: 5 }, (v, i) => (
            <Star
              starId={i + 1}
              key={`star_${i + 1}`}
              marked={selection ? selection >= i + 1 : rating >= i + 1}
            />
          ))}
        </div>
      </StarWrapper>
      <Submit onClick={rate}>Submit</Submit>
    </Wrapper>
  );
};

export default Rate;
