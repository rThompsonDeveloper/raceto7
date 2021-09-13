import { useContext } from "react";

// Context
import { FollowContext } from "../../contexts/FollowContext";
import { UserContext } from "../../contexts/UserContext";

import { FollowButton, UnfollowButton } from "./Styles";

const Follow = ({ id, photo, name }) => {
  const { follow, isFollowing } = useContext(FollowContext);
  const { user } = useContext(UserContext);
  return (
    <>
      {isFollowing(id) ? (
        <div
          style={{ display: "flex", alignItems: "center", height: "30px" }}
          onClick={() => follow(user.data.profile._id, id, false)}
        >
          <UnfollowButton />
        </div>
      ) : (
        <div
          style={{ display: "flex", alignItems: "center", height: "30px" }}
          onClick={() => follow(user.data.profile._id, id, true, photo, name)}
        >
          <FollowButton />
        </div>
      )}
    </>
  );
};

export default Follow;
