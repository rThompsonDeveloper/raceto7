import styled from "styled-components";

import { green } from "../../Globals";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px 0px;
`;

const setColor = (type) => {
  switch (type) {
    case "error":
      return "red";
    default:
      return green;
  }
};

export const Message = styled.p`
  font-size: 1em;
  color: ${(p) => setColor(p.type)};
`;
