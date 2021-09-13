import { useContext, useState } from "react";

// Context
import { UserContext } from "../../contexts/UserContext";

// Components
import Banner from "../../components/Banner/Banner";
import Tournaments from "../../components/Tournaments/Tournaments";
import EditProfile from "../../components/EditProfile/EditProfile";
import Alert from "../../components/Alert/Alert";
import ImageEdit from "../../components/ImageEdit/ImageEdit";
import Following from "../../components/Following/Following";
import Navbar from "../../components/Navbar/Navbar";
import Matches from "../../components/Matches/Matches";

// Styles
import {
  Wrapper,
  ProfileWrapper,
  Name,
  TopSection,
  Section,
  Text,
  NavBar,
  NavLink,
  NavButton,
  Container,
  NavBarWrapper,
  MainContent,
  Group,
  NavBarMenu,
  MyProfileLink,
} from "./Styles";

const Dashboard = () => {
  const { logout, state } = useContext(UserContext);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [currentSelect, setCurrentSelect] = useState("tournaments");

  const showCurrentSelection = () => {
    switch (currentSelect) {
      case "tournaments":
        return <Tournaments />;
      case "editProfile":
        return <EditProfile />;
      case "matches":
        return <Matches />;
      default:
        return;
    }
  };

  const setSelected = (type) => {
    setCurrentSelect(type);
    setShowMobileMenu(false);
  };

  const checkSelected = (type) => {
    if (type === currentSelect) {
      return "#4484CE";
    } else {
      return "#f2f2f2";
    }
  };

  const {
    profilePhoto,
    name: { firstName, lastName },
    age,
    gender,
    location,
    _id,
  } = state.user;

  return (
    <>
      <Navbar />
      <Banner
        height="300"
        image="https://thumbs.dreamstime.com/b/billiard-pool-balls-rack-cue-blue-cloth-table-banner-copy-space-billiard-pool-balls-rack-cue-blue-cloth-220840670.jpg"
        title=" My Dashboard"
        subTitle="Edit profile, check messages & manage your posts"
      />
      <Wrapper>
        <TopSection>
          <Container>
            <Section>
              <ImageEdit image={profilePhoto} />
              <Group>
                <Name>{firstName}</Name>
                <Name>{lastName}</Name>
              </Group>
              <Group>
                <Text>{age}</Text>
                <Text>{gender}</Text>
                <Text>
                  {location.city}, {location.state}
                </Text>
              </Group>
              <Following />
              <NavBarWrapper>
                <NavBarMenu onClick={() => setShowMobileMenu(!showMobileMenu)}>
                  Menu
                </NavBarMenu>
                <NavBar show={showMobileMenu}>
                  <MyProfileLink to={`/profile?profile=${_id}`}>
                    My Profile
                  </MyProfileLink>
                  <NavLink
                    color={checkSelected("matches")}
                    onClick={() => setSelected("matches")}
                  >
                    Matches
                  </NavLink>
                  <NavLink
                    color={checkSelected("tournaments")}
                    onClick={() => setSelected("tournaments")}
                  >
                    Tournaments
                  </NavLink>
                  <MyProfileLink to="/messages">Inbox</MyProfileLink>
                  <NavLink color={checkSelected("notifications")}>
                    Notifications
                  </NavLink>
                </NavBar>
                <NavButton
                  color="#4484CE"
                  onClick={() => setSelected("editProfile")}
                >
                  Edit Profile
                </NavButton>
                <NavButton onClick={logout} color="#ce4444">
                  Logout
                </NavButton>
              </NavBarWrapper>
            </Section>
          </Container>
        </TopSection>
        <Alert />
        <ProfileWrapper>
          <MainContent>{showCurrentSelection()}</MainContent>
        </ProfileWrapper>
      </Wrapper>
    </>
  );
};

export default Dashboard;
