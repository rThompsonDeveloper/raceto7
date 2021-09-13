import styled from "styled-components";

// Globals
import { purple } from "../../Globals";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  align-items: center;
  background: ${purple};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Row = styled.div`
  display: flex;
`;

export const Title = styled.p`
  font-size: 1.1em;
  font-weight: 600;
  text-align: center;
  padding: 0px 10px;
  color: white;
`;

export const ThankYou = styled.p`
  font-size: 1.1em;
  font-weight: 600;
  text-align: center;
  padding: 0px 10px;
  color: ${purple};
  margin-top: 10px;
`;

export const Select = styled.select`
  border-radius: 4px;
  font-size: 1em;
`;

export const Submit = styled.p`
  background-color: white;
  padding: 4px 10px;
  color: ${purple};
  border: none;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;
`;
