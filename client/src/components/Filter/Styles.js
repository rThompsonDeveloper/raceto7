import styled from "styled-components";

// Icons
import { SearchRounded } from "@material-ui/icons";

// Globals
import { blue, silver } from "../../Globals";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${silver};
  width: 100%;
  padding: 10px;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
`;

export const Label = styled.label`
  font-size: 0.9em;
  margin: 0px 4px;
`;

export const Select = styled.select`
  font-size: 1em;
  border-radius: 6px;
  background: white;
  padding: 1px;
  width: 50px;
`;

export const Option = styled.option`
  font-size: 1em;
`;

export const Input = styled.input`
  font-size: 1em;
  width: 100px;
  border-radius: 6px;
  border: 1px solid #333;
  padding: 2px;
`;

export const Search = styled(SearchRounded)`
  color: white;
  background: ${blue};
  cursor: pointer;
  padding: 6px;
  text-align: center;
  border-radius: 100%;
  margin-left: 10px;
`;
