import styled from "styled-components";

import { blue, mobile } from "../../Globals";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.p`
  font-size: 1em;
  color: #333;
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 10px;
`;

export const Container = styled.div`
  margin: 10px;
  margin-bottom: 0px;
  display: flex;
  border-radius: 10px;
  background: white;
  padding: 10px;
  box-shadow: 1px 1px 5px #989898;
  @media screen and (max-width: ${mobile}) {
    flex-direction: column;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
  @media screen and (max-width: ${mobile}) {
    margin: 10px;
  }
`;

export const SectionTitle = styled.p`
  font-weight: 600;
  color: ${blue};
  border-bottom: 1px solid ${blue};
  @media screen and (max-width: ${mobile}) {
    margin-bottom: 6px;
  }
`;

export const Group = styled.div`
  display: flex;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px;
`;

export const Label = styled.label`
  font-size: 0.8em;
  margin-bottom: 2px;
`;

export const Input = styled.input`
  border: 1px solid #333;
  border-radius: 6px;
`;

export const Select = styled.select`
  border: 1px solid #333;
  border-radius: 6px;
`;

export const Button = styled.p`
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  background: ${blue};
  color: white;
  padding: 10px 20px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
