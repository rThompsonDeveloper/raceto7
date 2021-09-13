import { useContext } from "react";

// Context
import { FollowContext } from "../../contexts/FollowContext";

// Styles
import { Wrapper, User, Image, Name } from "./Styles";

const Following = () => {
  const { following } = useContext(FollowContext);

  return (
    <Wrapper>
      {following.loading ? (
        <p>Loading</p>
      ) : following.users.length !== 0 ? (
        following.users.map((follower, i) => (
          <User key={i} to={`/profile/?profile=${follower._id}`}>
            <Image src={follower.photo} />
            <Name>{`${follower.name.first} ${follower.name.last}`}</Name>
          </User>
        ))
      ) : (
        <p>you are not following anyone lol</p>
      )}
    </Wrapper>
  );
};

export default Following;
