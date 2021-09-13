import styled from "styled-components";

// globals
import { headerHeight, tablet, mobile } from "./Globals";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

export const Main = styled.div`
  display: flex;
  height: calc(100vh - ${headerHeight});
`;

export const Dashboard = styled.div`
  height: 100%;
  min-width: 280px;
  max-width: 360px;
  @media screen and (max-width: ${mobile}) {
    display: none;
  }
`;

export const Feed = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  overflow-y: scroll;
  background: #333;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Sponsered = styled.div`
  height: 100%;
  min-width: 280px;
  max-width: 360px;
  @media screen and (max-width: ${tablet}) {
    display: none;
  }
`;
