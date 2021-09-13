import styled from "styled-components";

import { orange, mobile } from "../../Globals";

export const Image = styled.div`
  background-image: url(${(p) => p.image});
  width: 100%;
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(p) => p.height}px;
  &:after {
    content: "";
    position: relative;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(180deg, black, #0000006b);
  }
  @media screen and (max-width: ${mobile}) {
    height: ${(p) => p.height - 20}px;
  }
`;

export const Content = styled.div`
  flex-direction: column;
  padding-top: 60px;
  position: absolute;
  z-index: 1;
  @media screen and (max-width: ${mobile}) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const Title = styled.p`
  font-size: 2em;
  color: ${orange};
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  @media screen and (max-width: ${mobile}) {
    font-size: 1.6em;
    margin-bottom: 4px;
  }
`;

export const SubTitle = styled.p`
  font-size: 2.6em;
  color: white;
  font-weight: 300;
  text-align: center;
  @media screen and (max-width: ${mobile}) {
    font-size: 1.6em;
  }
`;
