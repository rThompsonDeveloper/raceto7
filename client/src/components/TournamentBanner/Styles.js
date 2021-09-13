import styled from "styled-components";

// Routing
import { Link } from "react-router-dom";

// Globals
import { mobile, blue } from "../../Globals";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  background: white;
  box-sizing: border-box;
  box-shadow: 1px 1px 5px #989898;
  border-radius: 10px;
  margin-bottom: 10px;
  @media screen and (max-width: ${mobile}) {
    flex-direction: column;
  }
`;

export const DateAndTime = styled.p`
  color: #333;
  font-size: 0.9em;
  font-weight: 600;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopBar = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0px 1px 4px -2px #989898;
`;

export const BasicInfo = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #e4e6eb;
  flex-direction: column;
  background: #f7f7f7;
  transition: all 0.3s ease-in-out;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const TournamentImage = styled.img`
  transition: all 0.3s ease-in-out;
`;

export const Content = styled(Link)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &: hover {
    padding: 4px;
    ${TournamentImage} {
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
    }
    ${BasicInfo} {
      background: #e0eeff;
    }
  }
`;

export const Name = styled(Link)`
  font-weight: 600;
  cursor: pointer;
  color: #333;
  &:hover {
    text-decoration: underline;
  }
`;

export const ProfileImage = styled(Link)`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  border: 2px solid #c7c7c7;
  background-image: url(${(p) => p.image});
  background-position: center center;
  background-size: cover;
  cursor: pointer;
  margin-right: 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    border-color: ${blue};
  }
`;

export const TournamentName = styled.p`
  font-size: 1.2em;
  font-weight: 600;
  color: #333;
`;

export const Text = styled.p`
  font-size: 0.9em;
  color: #333;
`;

export const Description = styled.p`
  font-size: 1.1em;
  color: #333;
  padding: 6px;
`;
