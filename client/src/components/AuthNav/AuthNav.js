import { useState, useContext } from "react";

// Context
import { UserContext } from "../../contexts/UserContext";

// Components
import Loading from "../Loading/Loading";

// Styles
import {
  Wrapper,
  Profile,
  Image,
  Messages,
  Notifications,
  ProfileMenu,
  AuthLink,
  Logout,
} from "./Styles";

const AuthNav = () => {
  const [show, setShow] = useState(false);
  const { user, logout } = useContext(UserContext);

  return (
    <Wrapper>
      {user.isLoading ? (
        <Loading />
      ) : (
        <>
          <Profile onClick={() => setShow(!show)}>
            <Image src={user.data.profile.photo} />
          </Profile>
          <ProfileMenu show={show}>
            <AuthLink to={`/profile?profile=${user.data.profile._id}`}>
              My Profile
            </AuthLink>
            <AuthLink to="/my-tournaments">My tournaments</AuthLink>
            <Logout onClick={logout}>Logout</Logout>
          </ProfileMenu>
          <Messages />
          <Notifications />
        </>
      )}
    </Wrapper>
  );
};

export default AuthNav;
