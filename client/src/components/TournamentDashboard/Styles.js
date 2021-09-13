import styled from "styled-components";
import { blue, red, mobile, green } from "../../Globals";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background: white;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 1px 1px 5px #989898;
  @media screen and (max-width: ${mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Container = styled.div`
  display: column;
  width: 100%;
  margin: 10px 0px;
  background: white;
  box-shadow: 1px 1px 5px #989898;
  border-radius: 10px;
  justify-content: space-between;
`;

const buttonColor = (type) => {
  switch (type) {
    case "edit":
      return blue;
    case "red":
    case "delete":
      return red;
    case "green":
      return green;
    default:
      return "black";
  }
};

export const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Name = styled.p`
  font-size: 1.1em;
  font-weight: 400;
  text-align: center;
  color: #333;
  margin-right: 10px;
  @media screen and (max-width: ${mobile}) {
    font-size: 1em;
  }
`;

export const ActiveStatus = styled.p`
  color: ${(p) => buttonColor(p.color)};
  font-size: 1.1em;
  font-weight: 500;
  margin-right: 10px;
  text-align: center;
  @media screen and (max-width: ${mobile}) {
    font-size: 1em;
  }
`;

export const Button = styled.button`
  font-size: 1.1em;
  font-weight: 400;
  padding: 10px;
  flex: 1;
  border: none;
  outline: none;
  text-align: center;
  color: ${(p) => (p.open ? "white" : blue)}};
  background: ${(p) => (p.open ? blue : "white")}};
  &:hover {
    color: white;
    background: ${blue};
  }
  @media screen and (max-width: ${mobile}) {
    font-size: 1em;
  }
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
    box-shadow: 0 0 2pt 1pt #8a8a8a;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  flex: 1;
  justify-content: flex-end;
`;

export const Form = styled.form`
  background: ${blue};
  padding: 10px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  display: flex;
`;

export const Label = styled.label`
  font-size: 0.8em;
  color: #292929;
  font-weight: 600;
  margin-left: 2px;
  margin-bottom: 2px;
`;

export const Remove = styled.button`
  color: #333333;
  background: none;
  border: none;
  outline: none;
  font-size: 1em;
  font-weight: 600;
  border-radius: 6px;
  &:hover {
    color: white;
  }
`;

export const Save = styled.button`
  color: #333333;
  background: none;
  border: none;
  outline: none;
  font-size: 1em;
  font-weight: 600;
  border-radius: 6px;
  &:hover {
    color: white;
  }
`;
