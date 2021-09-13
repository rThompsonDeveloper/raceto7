import { useContext } from "react";

// Contexts
import { UserContext } from "../../contexts/UserContext";
import { FollowContext } from "../../contexts/FollowContext";

// Components
import Loading from "../Loading/Loading";

// Styles
import { Wrapper, NavLink, Image, Name, Counter } from "./Styles";
import { green, orange, red } from "../../Globals";
import { Tooltip } from "@material-ui/core";

export const Account = () => {
  const {
    user,
    user: {
      data: {
        profile: {
          _id,
          name: { first, last },
          photo,
          tournaments,
        },
      },
    },
  } = useContext(UserContext);
  const {
    following: { users },
  } = useContext(FollowContext);
  const findActive = () => {
    let active = 0;
    tournaments.forEach((tournament) => {
      if (tournament.active === true) active += 1;
    });
    return active;
  };
  const findInactive = () => {
    let inactive = 0;
    tournaments.forEach((tournament) => {
      if (tournament.active === false) inactive += 1;
    });
    return inactive;
  };

  const findFlagged = () => {
    let flagged = 0;
    tournaments.forEach((tournament) => {
      const tournamentDate = new Date(tournament.dateOf).getTime();
      const today = new Date(Date.now()).getTime();
      if (tournament.occurs === "Once" && today > tournamentDate) flagged += 1;
    });
    return flagged;
  };

  return user.isLoading ? (
    <Loading />
  ) : (
    <Wrapper>
      <NavLink to={`/profile?profile=${_id}`}>
        <Image src={photo} />
        <Name>{`${first} ${last}`}</Name>
      </NavLink>
      <NavLink to="/my-tournaments">
        <Name>My Tournaments</Name>
        <Tooltip title="active">
          <Counter color={green}>{findActive()}</Counter>
        </Tooltip>
        <Tooltip title="Inactive">
          <Counter color={orange}>{findInactive()}</Counter>
        </Tooltip>
        <Tooltip title="Flagged for delete">
          <Counter color={red}>{findFlagged()}</Counter>
        </Tooltip>
      </NavLink>
      <NavLink to="/my-matches">
        <Name>My Matches</Name>
      </NavLink>
      <NavLink to="/following">
        <Name>{`Following (${users.length})`}</Name>
      </NavLink>
    </Wrapper>
  );
};

export default Account;
