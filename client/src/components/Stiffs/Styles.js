import styled from "styled-components";

// Globals
import { brown } from "../../Globals";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  align-items: center;
  background: ${brown};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Title = styled.p`
  font-size: 1.1em;
  font-weight: 600;
  text-align: center;
  padding: 0px 10px;
  color: white;
`;

export const Submit = styled.p`
  margin: 0px 4px;
  color: ${brown};
  font-weight: 600;
  background: white;
  cursor: pointer;
  border-radius: 6px;
  padding: 4px 10px;
`;

export const Cancel = styled.p`
  margin: 0px 4px;
  color: white;
  font-weight: 600;
  background: #a22d00;
  cursor: pointer;
  border-radius: 6px;
  padding: 4px 10px;
`;

export const Row = styled.div`
  display: flex;
  margin-top: 10px;
`;
