import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const NavLink = styled(Link)`
  display: flex;
  padding: 6px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #dbdee2;
  }
`;

export const Image = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 100%;
  margin-right: 10px;
`;

export const Name = styled.p`
  font-weight: bold;
  color: #333;
  margin-right: 4px;
`;

export const Counter = styled.p`
  background-color: ${(p) => p.color};
  padding: 2px 8px;
  color: white;
  margin: 0px 2px;
  border-radius: 4px;
`;
