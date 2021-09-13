import styled from "styled-components";

// Globals
import { teal } from "../../Globals";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  align-items: center;
  background: ${teal};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Title = styled.p`
  font-size: 1.1em;
  font-weight: 600;
  text-align: center;
  padding: 0px 10px;
`;

export const StarWrapper = styled.div`
  display: flex;
`;

export const Submit = styled.p`
  margin: 10px 0px;
  padding: 6px 20px;
  font-size: 1em;
  font-weight: 600;
  background: white;
  border-radius: 10px;
  cursor: pointer;
`;

export const StarIcon = styled.span`
  color: #000000;
  cursor: pointer;
  font-size: 2em;
`;
