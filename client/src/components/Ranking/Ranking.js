import { useRef, useState } from "react";

// Styles
import { Wrapper, Title, Select, Row, Submit, ThankYou } from "./Styles";

// Globals
import { skillLevels } from "../../Globals";

const Ranking = ({ show, name, rankProfile, myRanking }) => {
  const rankRef = useRef();
  const [ranked, setRanked] = useState(false);

  const rank = () => {
    rankProfile(rankRef.current.value);
    setRanked(true);

    // Hide the component after some time
    setTimeout(() => show(false), 2000);
  };

  return ranked ? (
    <ThankYou>Thank you for your feedback</ThankYou>
  ) : (
    <Wrapper>
      <Row>
        <Title>{`I think ${name} is an `}</Title>
        <Select ref={rankRef} defaultValue={skillLevels[myRanking]}>
          {skillLevels.map((skill, i) => (
            <option value={skill} key={i}>
              {skill}
            </option>
          ))}
        </Select>
        <Title>player</Title>
      </Row>
      <Submit onClick={rank}>Submit</Submit>
    </Wrapper>
  );
};

export default Ranking;
