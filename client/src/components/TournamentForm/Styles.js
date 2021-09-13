import styled from "styled-components";

// Icons
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CloseIcon from "@material-ui/icons/Close";

// Globals
import { blue, hoverBlue, red } from "../../Globals";

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

export const UploadIcon = styled(CameraAltIcon)`
  border-radius: 100%;
  padding: 3px 4px 2px 4px;
  width: 1em !important;
  height: 1em !important;
  position: relative;
  top: -40px;
  left: calc(50% - 16px);
  background: #f2f2f2;
  color: #4484ce;
  border: 2px solid #333333;
  transition: all 0.3s ease-in-out !important;
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

export const UploadImage = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  background: #000000b0;
`;

export const Image = styled.div`
  background-size: cover;
  background-image: ${(p) => `url(${p.image})`};
  border-radius: 10px;
  width: 100%;
  height: 240px;
  margin 4px 0px;
  border: 2px solid #333;
  background-position: center center;
  box-sizing: border-box;
  &:hover {
    ${UploadImage} {
      opacity: 1;
    }
    ${UploadIcon} {
      background: ${blue};
      color: white;
      border-color: white;
    }
  }
`;

export const Label = styled.label`
  font-size: 0.8em;
  color: #292929;
  font-weight: 600;
  margin-left: 2px;
  margin-bottom: 2px;
`;

export const Upload = styled.input``;

export const TopBar = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  background: ${blue};
  padding: 10px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  align-items: center;
`;

export const BottomBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${(p) => (p.hasOneItem ? "flex-end" : "space-between")};
  padding: 10px;
  box-sizing: border-box;
`;

export const Submit = styled.button`
  background: ${blue};
  color: white;
  font-weight: 600;
  font-size: 1em;
  border: none;
  outline: none;
  padding: 4px 20px;
  border-radius: 6px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: ${hoverBlue};
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
`;

export const Title = styled.p`
  font-size: 1.2em;
  color: white;
  font-weight: 600;
`;

export const Input = styled.input`
  padding: 3px;
  border-radius: 4px;
  border: 1px solid #bfbfbf;
  box-sizing: border-box;
  font-size: 0.9em;
  max-width: ${(p) => (p.large ? "100%" : "179px")};
  outline: none;
  &:focus {
    box-shadow: 0 0 2pt 1pt ${blue};
  }
`;

export const Row = styled.div`
  display: flex;
  box-sizing: border-box;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  flex: ${(p) => (p.small ? "none" : "1")};
  padding: 2px;
  width: ${(p) => p.small && "50px"};
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

export const CheckBox = styled.input`
  padding: 2px;
  border-radius: 4px;
  border: 1px solid #8a8a8a;
  width: 26px;
  height: 26px;
  outline: none;
  &:focus {
    box-shadow: 0 0 2pt 1pt ${blue};
  }
`;

export const Textarea = styled.textarea`
  padding: 2px;
  border-radius: 4px;
  border: 1px solid #8a8a8a;
  font-size: 1em;
  outline: none;
  resize: none;
  height: 200px;
  &:focus {
    box-shadow: 0 0 2pt 1pt ${blue};
  }
`;

export const Back = styled.button`
  background: ${blue};
  color: white;
  font-weight: 600;
  font-size: 1em;
  border: none;
  outline: none;
  padding: 4px 20px;
  border-radius: 6px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: ${hoverBlue};
  }
`;

export const Progress = styled(FiberManualRecordIcon)`
  color: ${(p) => (p.on === "true" ? "#98ff91" : "white")};
`;

export const ProgressWrapper = styled.div`
  display: flex;
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
