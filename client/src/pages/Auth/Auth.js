// Components
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";

// Hooks
import useAuth from "../../hooks/useAuth";

// Styles
import {
  Wrapper,
  Overlay,
  FormWrapper,
  FormContainer,
  Logo,
  LogoWrapper,
  LogoImg,
  NavigationWrapper,
  Nav,
} from "./Styles";

const Auth = () => {
  const { newAccount, setNewAccount } = useAuth();
  return (
    <>
      <Wrapper>
        <Overlay />
      </Wrapper>
      <FormWrapper>
        <FormContainer>
          <LogoWrapper>
            <LogoImg />
            <Logo>raceto7.com</Logo>
          </LogoWrapper>
          <NavigationWrapper>
            <Nav
              onClick={() => setNewAccount(false)}
              show={newAccount ? false : true}
            >
              Login
            </Nav>
            <Nav
              onClick={() => setNewAccount(true)}
              show={!newAccount ? false : true}
            >
              Sign up
            </Nav>
          </NavigationWrapper>
          {newAccount ? <Signup /> : <Login />}
        </FormContainer>
      </FormWrapper>
    </>
  );
};

export default Auth;
