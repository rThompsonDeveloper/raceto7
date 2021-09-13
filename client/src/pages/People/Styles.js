import styled from "styled-components";
import { Link } from "react-router-dom";

// Globals
import { mobile, blue } from "../../Globals";

export const Wrapper = styled.div``;

export const FilterBar = styled.div`
  max-width: 768px;
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
`;

export const State = styled.select`
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  border: 1px solid #333;
  padding: 3px;
  font-size: 1em;
  width: 10%;
  background: ${blue};
  color: white;
  font-weight: 600;
  cursor: pointer;
  @media screen and (max-width: ${mobile}) {
    width: 20%;
  }
`;

export const SearchBar = styled.input`
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border: 1px solid #333;
  border-right: none;
  font-size: 1em;
  padding: 4px;
  width: 90%;
  box-sizing: border-box;
  @media screen and (max-width: ${mobile}) {
    width: 80%;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchResults = styled.div`
  max-width: 768px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 1em;
  margin-left: 6px;
`;

export const ResultsFound = styled.p`
  font-size: 0.9em;
  color: red;
  margin-bottom: 10px;
  margin-left: 6px;
`;

export const Person = styled(Link)`
  display: flex;
  margin-bottom: 4px;
  width: 100%;
  padding: 4px;
  border-radius: 10px;
  background: white;
  box-sizing: border-box;
  align-items: center;
  cursor: pointer;
`;

export const Image = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 100%;
  margin-right: 10px;
`;

export const Name = styled.p`
  font-size: 1em;
  font-weight: 600;
  color: #333;
`;
