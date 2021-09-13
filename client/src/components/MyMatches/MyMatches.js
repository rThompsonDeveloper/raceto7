// Components
import MatchForm from "../MatchForm/MatchForm";

// Hooks
import useMyMatches from "../../hooks/useMyMatches";

// Styles
import { Wrapper, Row, Title, AddNew } from "./Styles";

const MyMatches = () => {
  const { add, show, handleShow } = useMyMatches();
  return (
    <Wrapper>
      {show && <MatchForm func={add} close={handleShow} />}
      <Row>
        <Title>My Matches</Title>
        <AddNew onClick={handleShow}>Add New</AddNew>
      </Row>
    </Wrapper>
  );
};

export default MyMatches;
