import styled from "styled-components";

// Routing
import { Link } from "react-router-dom";

// Icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// colors
import { blue } from "../../Globals";

// sizing
import { mobile } from "../../Globals";

export const Wrapper = styled.div`
  display: flex;
  padding: 6px 20px;
  width: 100%;
  background: white;
  box-sizing: border-box;
  box-shadow: 0px 1px 4px -2px #989898;
  z-index: 200;
  @media screen and (max-width: ${mobile}) {
    padding: 6px;
  }
`;

export const LeftNav = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const RightNav = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
`;

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const LogoImg = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("https://github.githubassets.com/images/modules/logos_page/Octocat.png");
  background-size: cover;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  z-index: 100;
  flex: 1;
  @media screen and (max-width: ${mobile}) {
    display: ${(p) => (p.show ? "flex" : "none")};
    opacity: ${(p) => (p.show ? "1" : "0")};
    flex-direction: column;
    position: fixed;
    background: white;
    top: 56px;
    right: 0px;
    padding: 0px 10px;
    border-radius: 6px;
    box-shadow: 1px 1px 5px #989898;
  }
`;

export const NavItem = styled(Link)`
  font-size: 0.8em;
  text-transform: uppercase;
  color: #333;
  font-weight: 600;
  padding: 10px;
  cursor: pointer;
  box-sizing: border-box;
  &:hover {
    color: ${blue};
  }
  @media screen and (max-width: ${mobile}) {
    font-size: 1em;
    text-transform: none;
    border-bottom: ${(p) => (p.last === "true" ? "none" : "1px solid #c7c7c7")};
    width: 100%;
  }
`;

export const Auth = styled(Link)`
  font-size: 1em;
  padding: 4px 12px;
  background: ${blue};
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  color: white;'
`;

export const Menu = styled(ExpandMoreIcon)`
  display: none !important;
  width: 1em !important;
  height: 1em !important;
  border-radius: 100%;
  background: #f0f2f5;
  padding: 10px;
  cursor: pointer;
  margin-right: 6px;
  transition: all 0.3s ease-in-out !important;
  &:hover {
    background: #deebff;
  }
  @media screen and (max-width: ${mobile}) {
    display: inline-block !important;
  }
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
`;

export const ProfileImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-image: ${(p) => `url(${p.image})`};
  background-size: cover;
  margin-right: 4px;
`;

export const Name = styled.p`
  font-weight: 600;
  color: #333;
  @media screen and (max-width: ${mobile}) {
    display: none;
  }
`;
