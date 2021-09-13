import styled from "styled-components";
import { Link } from "react-router-dom";

// Icons
import SearchIcon from "@material-ui/icons/Search";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

// Globals
import { mobile, blue } from "../../Globals";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  @media screen and (max-width: ${mobile}) {
    position: absolute;
    width: 100%;
    padding: 6px 10px;
    background: white;
    z-index: 500;
    top: 0;
    left: 0;
  }
`;

export const Row = styled.div`
  display: flex;
  box-sizing: border-box;
`;

export const BackIcon = styled(KeyboardBackspaceIcon)`
  display: none !important;
  width: 1em !important;
  height: 1em !important;
  border-radius: 100%;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out !important;
  &:hover {
    color: ${blue};
  }
  @media screen and (max-width: ${mobile}) {
    display: flex !important;
  }
`;

export const SearchBar = styled.input`
  font-size: 1em;
  border-radius: 20px;
  padding: 10px;
  border: none;
  background: #f0f2f5;
  outline: none;
  max-width: 200px;
  width: 100%;
  @media screen and (max-width: ${mobile}) {
    max-width: 100%;
    box-sizing: border-box;
  }
`;

export const Icon = styled(SearchIcon)`
  width: 1em !important;
  height: 1em !important;
  border-radius: 100%;
  background: #f0f2f5;
  padding: 10px;
  cursor: pointer;
  margin-right: 6px;
  transition: all 0.3s ease-in-out !important;
  &:hover {
    background: #deebff;
  }
`;

export const SearchResults = styled.div`
  max-width: 200px;
  width: 100%;
  padding: 10px;
  position: absolute;
  z-index: 100;
  top: 48px;
  background: white;
  display: ${(p) => (p.show ? "flex" : "none")};
  flex-direction: column;
`;

export const ResultTitle = styled.p``;

export const User = styled(Link)`
  display: flex;
  padding: 4px;
  align-items: center;
  width: 100%;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 4px;
  &:hover {
    background: #f0f2f5;
  }
`;
export const Image = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 100%;
  margin-right: 4px;
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 1em;
  color: #333;
`;
