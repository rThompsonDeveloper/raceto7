import styled from "styled-components";

// Colors
import { blue, orange } from "../../Globals";

export const Wrapper = styled.div`
  background-image: url("https://cdn.wallpapersafari.com/6/62/xW9BCK.jpg");
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center bottom;
`;

export const Overlay = styled.div`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(180deg, black, transparent);
  position: absolute;
  top: 0;
  left: 0;
`;

export const FormWrapper = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  top: 20%;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  background-color: ${blue};
  border-radius: 10px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0px;
`;

export const Logo = styled.div`
  font-size: 1.4em;
  color: white;
  cursor: pointer;
  margin-left: 10px;
`;

export const LogoImg = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("https://github.githubassets.com/images/modules/logos_page/Octocat.png");
  background-size: cover;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  justify-content: space-between;
`;

export const Nav = styled.p`
  font-size: 1.2em;
  font-weight: 500;
  padding: 4px 30px;
  cursor: pointer;
  color: ${(p) => (p.show ? "black" : "white")};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background: ${(p) => (p.show ? "white" : "transparent")};
`;

export const Form = styled.form`
  background: white;
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
`;

export const FormTitle = styled.p`
  font-size: 1.4em;
  width: 100%;
  padding: 20px 0px;
  text-align: center;
`;

export const InputWrapper = styled.div`
  margin: 4px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 0.9em;
  margin-bottom: 2px;
  margin-left: 4px;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  border: 1px solid #4484ce;
  background: #f5faff;
  border-radius: 4px;
  font-size: 1em;
  box-sizing: border-box;
  padding: 6px 6px;
`;

export const Row = styled.div`
  display: flex;
`;

export const Select = styled.select`
  border: none;
  width: 100%;
  border: 1px solid #4484ce;
  background: #f5faff;
  border-radius: 4px;
  font-size: 1em;
  padding: 6px 6px;
`;

export const SubmitWrapper = styled.div`
  display: flex;
  margin: auto;
  margin-top: 10px;
`;

export const Submit = styled.button`
  padding: 10px 0px;
  width: 160px;
  font-size: 1em;
  background: ${blue};
  border-radius: 4px;
  color: white;
  cursor: pointer;
  text-align: center;
`;

export const Legal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;

export const Disclaimer = styled.p`
  color: gray;
  font-size: 0.8em;
  text-align: right;
`;

export const TermsOfService = styled.p`
  font-size: 0.8em;
  color: ${orange};
  text-align: right;
`;
