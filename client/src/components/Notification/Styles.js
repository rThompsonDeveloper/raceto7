import styled from "styled-components";

// Routing
import { Link } from "react-router-dom";

// Globals
import { red } from "../../Globals";

export const Wrapper = styled.div`
  display: ${(p) => (p.show ? "flex" : "none")};
  padding: 10px;
  align-items: center;
  justify-content: center;
  background: ${red};
  width: 100%;
  box-sizing: border-box;
`;
export const Message = styled.p`
  color: white;
  font-size: 1em;
`;

export const Close = styled.p`
  color: white;
  font-size: 1em;
  margin-left: 4px;
  padding: 2px 6px;
  border-radius: 100%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${red};
    background: white;
  }
`;

export const LinkTo = styled(Link)`
  text-decoration: underline;
  margin: 0px 4px;
  color: white;
`;
