import React from "react";

// Hooks
import useSignup from "../../hooks/useSignup";

// Styles
import {
  Form,
  Select,
  InputWrapper,
  Input,
  SubmitWrapper,
  Submit,
  Disclaimer,
  Legal,
  Label,
  Row,
  TermsOfService,
} from "../../pages/Auth/Styles";

const Signup = () => {
  const {
    emailRef,
    passwordRef,
    handleSignup,
    firstNameRef,
    lastNameRef,
    birthdateRef,
    skillLevelRef,
    cityRef,
    stateRef,
    skillLevels,
    states,
  } = useSignup();
  return (
    <Form onSubmit={handleSignup}>
      <Row>
        <InputWrapper>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            required
            type="text"
            name="firstName"
            id="firstName"
            ref={firstNameRef}
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            required
            type="text"
            name="lastName"
            id="lastName"
            ref={lastNameRef}
          />
        </InputWrapper>
      </Row>
      <Row>
        <InputWrapper>
          <Label htmlFor="email">Email</Label>
          <Input required type="email" name="email" ref={emailRef} />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="password">Password</Label>
          <Input
            required
            minLength="8"
            type="password"
            name="password"
            ref={passwordRef}
          />
        </InputWrapper>
      </Row>
      <Row>
        <InputWrapper>
          <Label htmlFor="birthDate">DOB</Label>
          <Input required type="date" name="birthDate" ref={birthdateRef} />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="skillLevel">Skill Level</Label>
          <Select required name="skillLevel" ref={skillLevelRef}>
            {skillLevels.map((skill, i) => (
              <option key={i} value={skill}>
                {skill}
              </option>
            ))}
          </Select>
        </InputWrapper>
      </Row>
      <Row>
        <InputWrapper>
          <Label htmlFor="city">City</Label>
          <Input
            required
            type="text"
            name="city"
            ref={cityRef}
            placeholder="city"
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="state">State</Label>
          <Select required ref={stateRef}>
            {states.map((state, i) => (
              <option key={i} value={state}>
                {state}
              </option>
            ))}
          </Select>
        </InputWrapper>
      </Row>
      <SubmitWrapper>
        <Submit type="submit">Sign up</Submit>
        <Legal>
          <Disclaimer>By clicking Sign up you agree to our</Disclaimer>
          <TermsOfService>Terms of service.</TermsOfService>
        </Legal>
      </SubmitWrapper>
    </Form>
  );
};

export default Signup;
