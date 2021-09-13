import { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";

// Globals
import { states } from "../../Globals";

// Contexts
import { AlertContext } from "../../contexts/AlertContext";

import {
  Wrapper,
  Label,
  Input,
  Select,
  Option,
  Group,
  Container,
  Search,
} from "./Styles";

const Filter = ({ page, city, state }) => {
  // Local State
  const history = useHistory();

  // Contexts
  const { setAlert } = useContext(AlertContext);

  // Refs
  const stateRef = useRef("");
  const cityRef = useRef("");

  const setQueryParams = () => {
    // Check values of refs
    const stateVal = stateRef.current.value;
    const cityVal = cityRef.current.value;

    let query = `/${page}?`;
    if (stateVal.length === 0 && cityVal.length === 0) {
      setAlert("minumum filter requirement is city or state", "error");
    } else {
      if (stateVal !== "") query += `location.state=${stateVal}&`;
      if (cityVal !== "") query += `location.city=${cityVal}&`;
      // Returns the query to the link
      history.push(query);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Group>
          <Label htmlFor="city">City</Label>
          <Input ref={cityRef} defaultValue={city} name="city" id="city" />
        </Group>
        <Group>
          <Label htmlFor="state">State</Label>
          <Select ref={stateRef} defaultValue={state} id="state" name="state">
            {states.map((option, i) => (
              <Option name={option} key={i}>
                {option}
              </Option>
            ))}
          </Select>
        </Group>
      </Container>
      <Search onClick={setQueryParams}>Search</Search>
    </Wrapper>
  );
};

export default Filter;
