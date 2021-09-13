import styled from "styled-components";

// Routing
import { Link } from "react-router-dom";

// Globals
import { mobile, blue, red } from "../../Globals";

// Icons
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-height: 44px;
  box-sizing: border-box;
`;

export const Profile = styled.div`
  display: none;
  align-items: center;
  border-radius: 20px;
  margin-right: 6px;
  background: #f0f2f5;
  cursor: pointer;
  &:hover {
    background: #deebff;
  }
  @media screen and (max-width: ${mobile}) {
    display: flex;
  }
`;

export const Image = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 100%;
`;

export const ProfileMenu = styled.div`
  position: absolute;
  top: 56px;
  background: white;
  display: ${(p) => (p.show ? "flex" : "none")};
  flex-direction: column;
  padding: 0px 10px;
  border-radius: 6px;
  box-shadow: 1px 1px 5px #989898;
`;

export const AuthLink = styled(Link)`
  font-size: 1em;
  text-transform: none;
  border-bottom: 1px solid #c7c7c7;
  padding: 10px;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  color: #333;
  font-weight: 600;
  &:hover {
    color: ${blue};
  }
`;

export const Messages = styled(ChatIcon)`
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
`;

export const Notifications = styled(NotificationsIcon)`
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
`;

export const Logout = styled.button`
  color: white;
  background: ${red};
  border: none;
  width: 100%;
  padding: 6px;
  border-radius: 4px;
  margin: 10px 0px;
  font-weight: 600;
  font-size: 1em;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: #a92727;
  }
`;
