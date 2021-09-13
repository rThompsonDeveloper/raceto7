// Styles
import styled from "styled-components";

// Colors
import { lightBlue } from "../../Globals";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 10px;
  box-sizing: border-box;
`;

export const SearchTitle = styled.p`
  font-size: 1em;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 20px;
`;

export const Found = styled.p`
  font-size: 1em;
  color: ${lightBlue};
  margin-bottom: 20px;
`;

export const Text = styled.p`
  color: white;
  text-align: center;
  box-sizing: border-box;
`;
