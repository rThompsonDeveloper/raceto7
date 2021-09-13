import { useEffect, useContext } from "react";

// Global styles
import "./App.css";

// Context
import { UserContext } from "./contexts/UserContext";

// Components
import Navbar from "./components/Navbar/Navbar";
import Account from "./components/Account/Account";

//Utils
import setAuthToken from "./utils/setAuthToken";

// Styles
import { Wrapper, Dashboard, Feed, Sponsered, Main } from "./Styles";

// Routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Following from "./components/Following/Following";

// Pages
import Auth from "./pages/Auth/Auth";
import Tournaments from "./pages/Tournaments/Tournaments";
import Profile from "./pages/Profile/Profile";
import Matches from "./pages/Matches/Matches";
import Tournament from "./pages/Tournament/Tournament";
import Messages from "./pages/Messages/Messages";
import People from "./pages/People/People";
import MyTournaments from "./pages/MyTournaments/MyTournaments";
import Loading from "./components/Loading/Loading";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import MyMatches from "./components/MyMatches/MyMatches";

// checks to see if user is logged in
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const { loadUser, user } = useContext(UserContext);
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return user.isAuthenticated ? (
    <Wrapper>
      <Router>
        <Navbar />
        <Main>
          <Dashboard>{user.isLoading ? <Loading /> : <Account />}</Dashboard>
          <Feed>
            <Switch>
              <Route path="/profile" component={Profile} />
              <Route path="/following" component={Following} />
              <Route exact path="/my-tournaments">
                {user.isLoading ? <Loading /> : <MyTournaments />}
              </Route>
              <Route exact path="/messages" component={Messages} />
              <Route path="/people" component={People} />
              <Route path="/tournaments" component={Tournaments} />
              <Route path="/matches" component={Matches} />
              <Route path="/my-matches" component={MyMatches} />
              <Route path="/tournament" component={Tournament} />
              <Route exact path="/support" component={ComingSoon} />
              <Route exact path="/shop" component={ComingSoon} />
            </Switch>
          </Feed>
          <Sponsered></Sponsered>
        </Main>
      </Router>
    </Wrapper>
  ) : (
    <Auth />
  );
};

export default App;
