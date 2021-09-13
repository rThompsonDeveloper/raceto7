import styled from "styled-components";

// Globals
import { green } from "../../Globals";

export const Wrapper = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.p`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.p`
  color: white;
  font-size: 1em;
  font-weight: 600;
`;

export const AddNew = styled.button`
  color: ${green};
  background: none;
  outline: none;
  border: none;
  font-size: 1em;
  font-weight: 600;
`;
