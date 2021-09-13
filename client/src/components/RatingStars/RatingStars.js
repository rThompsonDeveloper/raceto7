// Styles
import { StarIcon, Wrapper, Text } from "./Styles";

// Star Component
const Star = ({ marked, starId }) => {
  return (
    <StarIcon data-star-id={starId} className="star" role="button">
      {marked ? "\u2605" : "\u2606"}
    </StarIcon>
  );
};

const RatingStars = ({ rating, totalRatings }) => {
  return (
    <Wrapper>
      {Array.from({ length: 5 }, (v, i) => (
        <Star starId={i + 1} key={`star_${i + 1}`} marked={rating >= i + 1} />
      ))}
      <Text>{`(${totalRatings})`}</Text>
    </Wrapper>
  );
};

export default RatingStars;
