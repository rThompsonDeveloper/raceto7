import styled from "styled-components";

// Globals
import { blue, green, mobile } from "../../Globals";

export const PostTournament = styled.p`
  color: ${green};
  font-size: 1.2em;
  font-weight: 600;
  cursor: pointer;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
`;

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: ${mobile}) {
    align-items: flex-start;
  }
`;

export const SectionTitle = styled.p`
  font-size: 1em;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
`;

export const Notification = styled.p`
  font-size: 1.4em;
  font-weight: 400;
`;

export const Section = styled.div`
  border-radius: 10px;
  background: white;
  padding: 10px;
  box-shadow: 1px 1px 5px #989898;
`;

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${blue};
  padding: 10px 0px;
  width: 100%;
`;

export const FilterTitle = styled.p`
  color: white;
  margin-right: 10px;
  font-size: 1em;
`;

export const Select = styled.select`
  padding: 4px 2px;
  border-radius: 6px;
  color: ${blue};
  border: none;
  outline: none;
  background: white;
  font-size: 1em;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: ${(p) => (p.isShowing === "true" ? "column" : "row")}
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 0px 10px;
  box-sizing: border-box;
  @media screen and (max-width: ${mobile}){
    padding: 0px;
  }
`;
