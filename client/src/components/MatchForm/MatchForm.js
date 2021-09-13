// Logic
import useLogic from "./useLogic";

// globals
import { states } from "../../Globals";

// Styles
import {
  Form,
  Wrapper,
  TopBar,
  Title,
  Content,
  BottomBar,
  Submit,
  Close,
  Label,
  Input,
  Textarea,
  Row,
  Group,
  Column,
  Select,
} from "./Styles";

const MatchForm = (props) => {
  const { handleSubmit } = useLogic(props.func);

  return (
    <Wrapper>
      <Close onClick={props.close} />
      <Form onSubmit={handleSubmit}>
        <TopBar>
          <Title>Match Form</Title>
        </TopBar>
        <Content>
          <Label htmlFor="description">Description</Label>
          <Textarea />
          <Row>
            <Column>
              <Label htmlFor="price">Price</Label>
              <Row>
                <Input
                  style={{ marginRight: "1px" }}
                  type="text"
                  placeholder="min"
                />
                <Input
                  style={{ marginLeft: "1px" }}
                  type="text"
                  placeholder="max"
                />
              </Row>
            </Column>
            <Column>
              <Label htmlFor="location">Location</Label>
              <Row>
                <Input type="text" placeholder="city" />
                <Select style={{ marginLeft: "2px" }}>
                  {states.map((state, i) => (
                    <option key={i} value={state}>
                      {state}
                    </option>
                  ))}
                </Select>
              </Row>
            </Column>
          </Row>
        </Content>
        <BottomBar>
          <Submit type="submit">
            {props.match ? "Update Match" : "Add Match"}
          </Submit>
        </BottomBar>
      </Form>
    </Wrapper>
  );
};

export default MatchForm;
