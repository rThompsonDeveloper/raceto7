import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const User = styled(Link)`
  display: flex;
  padding: 10px;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #a4a4a4;
  }
`;

export const Image = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
  border-radius: 100%;
`;

export const Name = styled.p`
  font-size: 1.2em;
  font-weight: 600;
  color: white;
`;
