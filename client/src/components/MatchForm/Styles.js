import styled from "styled-components";

// Icons
import CloseIcon from "@material-ui/icons/Close";

// Globals
import { red, blue } from "../../Globals";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 9999999;
  top: 0;
  left: 0;
  justify-content: center;
  background: #000000db;
  padding: 0px 10px;
  box-sizing: border-box;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 10px;
  align-items: center;
  width: 100%;
  min-width: 340px;
  max-width: 440px;
`;

export const TopBar = styled.div`
  padding: 10px;
  background: ${blue};
  width: 100%;
  box-sizing: border-box;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const Title = styled.p`
  color: white;
`;

export const Content = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const BottomBar = styled.div`
  width: 100%;
  box-sizing: border-box;
  justify-content: flex-end;
  display: flex;
  padding: 10px;
  background: ${blue};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Submit = styled.button`
  color: #333;
  background: white;
  padding: 4px 10px;
  border: none;
  border-radius: 6px;
  outline: none;
  font-weight: 600;
`;

export const Close = styled(CloseIcon)`
  color: ${red};
  background: transparent;
  padding: 4px;
  border: 2px solid ${red};
  border-radius: 100%;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out !important;
  &:hover {
    background: #962121;
    color: white;
  }
`;

export const Input = styled.input`
  padding: 3px;
  border-radius: 4px;
  border: 1px solid #bfbfbf;
  box-sizing: border-box;
  font-size: 0.9em;
  max-width: ${(p) => (p.large ? "100%" : "179px")};
  width: 100%;
  outline: none;
  &:focus {
    box-shadow: 0 0 2pt 1pt ${blue};
  }
`;

export const Label = styled.label`
  font-size: 0.8em;
  color: #292929;
  font-weight: 600;
  margin-left: 2px;
  margin-bottom: 2px;
`;

export const Textarea = styled.textarea`
  padding: 2px;
  border-radius: 4px;
  border: 1px solid #8a8a8a;
  font-size: 1em;
  outline: none;
  margin-bottom: 6px;
  resize: none;
  height: 140px;
  &:focus {
    box-shadow: 0 0 2pt 1pt ${blue};
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 2px;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
`;

export const Group = styled.div`
  display: flex;
  width: 50%;
`;

export const Select = styled.select`
  padding: 2px;
  border-radius: 4px;
  border: 1px solid #bfbfbf;
  font-size: 0.9em;
  outline: none;
  &:focus {
    box-shadow: 0 0 2pt 1pt ${blue};
  }
`;
