import { useContext, useRef } from "react";

import { UserContext } from "../../contexts/UserContext";

// Globals
import { states, skillLevels } from "../../Globals";

import {
  Wrapper,
  Title,
  Container,
  Section,
  SectionTitle,
  Group,
  Field,
  Label,
  Input,
  Select,
  Button,
  ButtonWrapper,
} from "./Styles";

const EditProfile = () => {
  const { state, edit } = useContext(UserContext);
  const { user } = state;

  // Refs
  const ageRef = useRef();
  const genderRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const emailRef = useRef();
  const skillLevelRef = useRef();

  const submitEdit = () => {
    const age = ageRef.current.value;
    const gender = genderRef.current.value;
    const city = cityRef.current.value;
    const state = stateRef.current.value;
    const email = emailRef.current.value;
    const skillLevel = skillLevelRef.current.value;

    edit(user._id, age, gender, city, state, skillLevel, email);
  };

  // Destructure Items i need
  const { age, gender, location, email, skillLevel } = state.user;

  return (
    <Wrapper>
      <Title>Edit Profile</Title>
      <Container>
        <Section>
          <SectionTitle>General</SectionTitle>
          <Group>
            <Field>
              <Label>Age</Label>
              <Input defaultValue={age} type="text" ref={ageRef} />
            </Field>
            <Field>
              <Label>Gender</Label>
              <Select defaultValue={gender} ref={genderRef}>
                <option name="male">M</option>
                <option name="female">F</option>
              </Select>
            </Field>
          </Group>
          <Group>
            <Field>
              <Label>City</Label>
              <Input defaultValue={location.city} type="text" ref={cityRef} />
            </Field>
            <Field>
              <Label>State</Label>
              <Select defaultValue={location.state} ref={stateRef}>
                {states.map((option, i) => (
                  <option key={i} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </Field>
          </Group>
        </Section>
        <Section>
          <SectionTitle>About</SectionTitle>
          <Field>
            <Label>Skill Level</Label>
            <Select defaultValue={skillLevel} ref={skillLevelRef}>
              {skillLevels.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </Field>
        </Section>
        <Section>
          <SectionTitle>Account</SectionTitle>
          <Field>
            <Label>Email</Label>
            <Input type="text" defaultValue={email} ref={emailRef} />
          </Field>
        </Section>
      </Container>
      <ButtonWrapper>
        <Button onClick={submitEdit}>Submit</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default EditProfile;
