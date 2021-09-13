import styled from "styled-components";

// Globals
import { blue } from "../../Globals";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 5px #989898;
  margin: 10px;
  border-radius: 10px;
  max-width: 300px;
  background: white;
`;

export const Image = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  border: 2px solid #c7c7c7;
  background-image: url(${(p) => p.image});
  background-position: center center;
  background-size: cover;
  margin-right: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    border-color: ${blue};
  }
`;

export const Content = styled.div`
  border-top: 1px solid ${blue};
  padding: 10px;
  margin-top: 10px;
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.p`
  font-weight: 600;
`;
