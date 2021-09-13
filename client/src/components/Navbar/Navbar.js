// hooks
import useNavbar from "../../hooks/useNavbar";

// Styles
import {
  Wrapper,
  LogoWrapper,
  LogoImg,
  Nav,
  NavItem,
  Menu,
  LeftNav,
  RightNav,
} from "./Styles";

// Components
import Search from "../Search/Search";
import AuthNav from "../AuthNav/AuthNav";

const Navbar = () => {
  const [user, showMenu, setShowMenu] = useNavbar();

  return (
    <Wrapper>
      <LeftNav>
        <LogoWrapper to="/">
          <LogoImg />
        </LogoWrapper>
        <Search />
      </LeftNav>
      <Nav show={showMenu}>
        <NavItem
          onClick={() => setShowMenu(false)}
          to={
            user.isLoading
              ? `/tournaments?location.city=null&location.state=null`
              : `/tournaments?location.city=${user.data.profile.location.city}&location.state=${user.data.profile.location.state}`
          }
        >
          Tournaments
        </NavItem>
        <NavItem onClick={() => setShowMenu(false)} to="/matches">
          Matches
        </NavItem>
        <NavItem onClick={() => setShowMenu(false)} to="/about">
          About
        </NavItem>
        <NavItem onClick={() => setShowMenu(false)} to="/support">
          Support
        </NavItem>
        <NavItem onClick={() => setShowMenu(false)} to="/shop" last="true">
          Shop
        </NavItem>
      </Nav>
      <RightNav>
        <AuthNav />
        <Menu onClick={() => setShowMenu(!showMenu)} />
      </RightNav>
    </Wrapper>
  );
};

export default Navbar;
