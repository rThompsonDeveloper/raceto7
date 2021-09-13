import styled from "styled-components";
import { Link } from "react-router-dom";

// Icons
import MessageIcon from "@material-ui/icons/Message";
import SwapVertIcon from "@material-ui/icons/SwapVert";
import MoneyOffIcon from "@material-ui/icons/MoneyOff";
import FlagIcon from "@material-ui/icons/Flag";
import StarIcon from "@material-ui/icons/Star";
import EditIcon from "@material-ui/icons/Edit";

// Globals
import { red, blue, mobile, green, purple, brown, teal } from "../../Globals";

// Helper function
const pickColor = (color) => {
  switch (color) {
    case "red":
      return red;
    case "blue":
      return blue;
    case "green":
      return green;
    case "purple":
      return purple;
    case "brown":
      return brown;
    case "teal":
      return teal;
    default:
      return "black";
  }
};

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 1em;
  margin: 0px 2px;
  color: white;
`;

export const Name = styled.div`
  font-size: 1.6em;
  color: white;
  padding: 2px;
`;

export const Group = styled.div`
  display: flex;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  border-top: 2px solid #d2d2d2;
  width: 100%;
  justify-content: center;
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

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Wrapper = styled.div`
  margin-top: 20px;
`;

export const ProfilePhoto = styled.img`
  border-radius: 100%;
  border: 4px solid white;
  width: 200px;
  height: 200px;
  border: 4px solid white;
  margin-bottom: 10px;
`;

export const EditProfileIcon = styled(EditIcon)`
  height: 1em !important;
  width: 1em !important;
  color: ${blue};
  background: background: #f2f2f2;
  border-radius: 10px;
  border: 2px solid ${blue};
  padding: 2px;
  cursor: pointer;
  position: relative;
  top: -40px;
  left: 110px;
  transition: all 0.3s ease-in-out !important;
  &:hover {
    background: ${blue};
    color: white;
  }
`;

export const TopBarWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin: 0px 2px;
  padding: 6px 10px;
  background: ${(p) => pickColor(p.color)};
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  justify-content: center;
  align-items: center;
  margin-top: 1px;
  cursor: pointer;
  height: fit-content;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1, 1.1);
  }
  @media screen and (max-width: ${mobile}) {
    margin: 0px 1px;
  }
`;

export const Message = styled(MessageIcon)`
  width: 30px !important;
  height: 30px !important;
  color: white;
`;

export const Star = styled(StarIcon)`
  width: 30px !important;
  height: 30px !important;
  color: white;
`;

export const Rank = styled(SwapVertIcon)`
  width: 30px !important;
  height: 30px !important;
  color: white;
`;

export const Stiff = styled(MoneyOffIcon)`
  width: 30px !important;
  height: 30px !important;
  color: white;
`;

export const Report = styled(FlagIcon)`
  width: 30px !important;
  height: 30px !important;
  color: white;
`;

export const LoginLink = styled(Link)`
  color: ${blue};
  margin: 0px 2px;
`;

export const SectionHeading = styled.p`
  font-size: 1em;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px;
`;

export const SearchWrapper = styled.div`
  border-radius: 10px;
  background: white;
  padding: 10px;
  box-shadow: 1px 1px 5px #989898;
`;

export const Results = styled.p`
  font-size: 1.4em;
  font-weight: 300;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const Title = styled.p`
  font-size: 1em;
  text-transform: uppercase;
  font-weight: 600;
  color: ${(p) => (p.color === "danger" ? red : blue)};
`;
