// Styles
import { Wrapper, Title, Row, Submit, Cancel } from "./Styles";

const Stiffs = ({ name, show, reported, reportStiff }) => {
  const report = async () => {
    reportStiff();

    // Hide the component after some time
    setTimeout(() => show(false), 2000);
  };

  const showReportedMessage = () => {
    // Hide the component after some time
    setTimeout(() => show(false), 2000);

    return (
      <Wrapper>
        <Title>Thank you for your feedback</Title>
      </Wrapper>
    );
  };

  return reported ? (
    showReportedMessage()
  ) : (
    <Wrapper>
      <Title>
        {`Are you sure you would like to report ${name} for stiffing you?`}
      </Title>
      <Row>
        <Submit onClick={report}>Yes</Submit>
        <Cancel onClick={() => show(false)}>No</Cancel>
      </Row>
    </Wrapper>
  );
};

export default Stiffs;
