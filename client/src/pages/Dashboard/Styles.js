import { Link } from "react-router-dom";
import styled from "styled-components";

// Globals
import { mobile } from "../../Globals";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #f2f2f2;
  z-index: 1;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  background: #e2e2e2;
  border-top: 2px solid #d2d2d2;
  width: 100%;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  @media screen and (max-width: ${mobile}) {
    flex-direction: column;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 1em;
  margin: 0px 2px;
`;

export const Name = styled.div`
  font-size: 1.6em;
  color: #333;
  padding: 2px;
`;

export const NavBar = styled.div`
  display: flex;
  @media screen and (max-width: ${mobile}) {
    display: ${(p) => (p.show ? "flex" : "none")};
    position: absolute;
    flex-direction: column;
    background: #f2f2f2;
    top: 564px;
    left: 0;
  }
`;

export const NavBarMenu = styled.p`
  font-size: 1em;
  display: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  @media screen and (max-width: ${mobile}) {
    display: block;
  }
`;

export const NavLink = styled.p`
  padding: 10px 20px;
  cursor: pointer;
  margin: 0px 2px;
  border-bottom: 2px solid ${(p) => p.color};
  &:hover {
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    background-color: #d2d2d2;
  }
`;

export const NavButton = styled.p`
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  border-radius: 6px;
  background: ${(p) => p.color};
  color: white;
  margin: 2px;
`;

export const NavBarWrapper = styled.div`
  border-top: 1px solid #d2d2d2;
  display: flex;
  margin-top: 10px;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 768px;
  box-sizing: border-box;
  @media screen and (max-width: ${mobile}) {
    padding: 0px 10px;
  }
`;

export const Group = styled.div`
  display: flex;
`;

export const MyProfileLink = styled(Link)`
  padding: 10px 20px;
  cursor: pointer;
  margin: 0px 2px;
  border-bottom: 2px solid #f2f2f2;
  color: #333;
  &:hover {
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    background-color: #d2d2d2;
  }
`;
