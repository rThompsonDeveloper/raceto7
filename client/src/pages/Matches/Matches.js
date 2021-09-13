// Components
import Match from "../../components/Match/Match";

// Styles
import {
  Wrapper,
  FilterWrapper,
  Container,
  Filter,
  Label,
  Select,
  Input,
} from "./Styles.js";

const data = [
  {
    profilePhoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1H81w4SmKH5DZmIbxU7EB0aMSkNQDoPQA1mRQxf2Y0wMF1NSa7vghbwwKASi1q4NPmNw&usqp=CAU",
    name: {
      firstName: "Harry",
      lastName: "BallSack",
    },
    price: {
      min: 10,
      max: 5000,
    },
    gameType: "9 ball",
    tablePreferance: "Diamond",
    poolHallPreferance: "Bucks Billiards",
    raceTo: "9",
    minSets: 3,
    skillLevel: "advanced",
    reputation: "⭐⭐⭐⭐⭐",
    location: {
      city: "Raleigh",
      state: "NC",
    },
  },
  {
    profilePhoto:
      "https://www.landed.no/wp-content/uploads/2019/05/Sam-Pope-400x400-thegem-person.png",
    name: {
      firstName: "Harry",
      lastName: "BallSack",
    },
    price: {
      min: 10,
      max: 5000,
    },
    gameType: "9 ball",
    tablePreferance: "Diamond",
    poolHallPreferance: "Bucks Billiards",
    raceTo: "9",
    minSets: 3,
    skillLevel: "beginner",
    reputation: "⭐⭐⭐⭐⭐",
    location: {
      city: "Raleigh",
      state: "NC",
    },
  },
];

const Matches = () => {
  return (
    <Wrapper>
      <FilterWrapper>
        <Filter>
          <Label>City:</Label>
          <Input type="text" />
        </Filter>
        <Filter>
          <Label>State:</Label>
          <Select>
            <option>NC</option>
          </Select>
        </Filter>
      </FilterWrapper>
      <Container>
        {data.map((match, i) => (
          <Match key={i} match={match} />
        ))}
      </Container>
    </Wrapper>
  );
};

export default Matches;
