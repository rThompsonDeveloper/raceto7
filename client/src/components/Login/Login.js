import React from "react";

// Componen
import Alert from "../Alert/Alert";

// Hooks
import useLogin from "../../hooks/useLogin";

// Styles
import {
  Form,
  InputWrapper,
  Input,
  SubmitWrapper,
  Submit,
  Legal,
  Disclaimer,
  TermsOfService,
} from "../../pages/Auth/Styles";

const Login = () => {
  const { emailRef, passwordRef, handleLogin } = useLogin();
  return (
    <Form onSubmit={handleLogin}>
      <Alert />
      <InputWrapper>
        <Input
          required
          type="email"
          name="email"
          ref={emailRef}
          placeholder="email"
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          required
          type="password"
          name="password"
          ref={passwordRef}
          placeholder="password"
        />
      </InputWrapper>
      <SubmitWrapper>
        <Submit type="submit">Login</Submit>
        <Legal>
          <Disclaimer>By clicking log in you agree to our</Disclaimer>
          <TermsOfService>Terms of service.</TermsOfService>
        </Legal>
      </SubmitWrapper>
    </Form>
  );
};

export default Login;
