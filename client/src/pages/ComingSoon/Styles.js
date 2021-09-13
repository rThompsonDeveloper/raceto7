import styled from "styled-components";

// Globals
import { headerHeight } from "../../Globals";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  height: calc(100vh - ${headerHeight});
`;

export const Title = styled.p`
  font-size: 2em;
  color: white;
  font-weight: 600;
`;
