import styled from "styled-components";

// Icons
import CameraAltIcon from "@material-ui/icons/CameraAlt";

export const UploadIcon = styled(CameraAltIcon)`
  border-radius: 100%;
  padding: 3px 4px 2px 4px;
  width: 1em !important;
  height: 1em !important;
  position: relative;
  top: -40px;
  left: 145px;
  background: #f2f2f2;
  color: #4484ce;
  border: 2px solid #333333;
  transition: all 0.3s ease-in-out !important;
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  color: white;
  font-weight: 600;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  background: #000000b0;
`;

export const Wrapper = styled.div`
  background-size: cover;
  background-image: ${(p) => `url(${p.image})`};
  border-radius: 100%;
  width: 200px;
  height: 200px;
  &:hover {
    ${Label} {
      opacity: 1;
    }
    ${UploadIcon} {
      background: #333;
      color: white;
      border-color: white;
    }
  }
`;

export const Save = styled.button`
  color: white;
  background: blue;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  padding: 5px 20px;
  margin: 0px 4px;
`;

export const Menu = styled.div`
  display: ${(p) => (p.show ? "flex" : "none")};
`;

export const Cancel = styled.button`
  color: white;
  background: red;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  padding: 5px 20px;
  margin: 0px 4px;
`;

export const Upload = styled.input``;
