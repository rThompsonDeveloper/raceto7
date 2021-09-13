import styled from "styled-components";

// Globals
import { red, lightBlue } from "../../Globals";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 100%;
  background: #c7c7c7;
  display: flex;
  justify-content: center;
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 1.4em;
  margin-top: 4px;
  color: ${lightBlue};
`;

export const Text = styled.p`
  font-size: 1em;
  color: ${(p) => (p.important ? red : "white")};
  margin-bottom: 2px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 10px;
`;

export const SubTitle = styled.p`
  font-size: 1em;
  font-weight: 600;
  margin-bottom: 2px;
  color: ${lightBlue};
`;

export const MoneyAdded = styled.p`
  font-weight: 600;
  font-size: 1.4em;
  color: gold;
`;

export const ShowContact = styled.button`
  padding: 4px 10px;
  width: fit-content;
  cursor: pointer;
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
`;

export const Description = styled.p`
  font-size: 1.2em;
  color: white;
  margin: 10px 0px;
`;
