import { skillLevels } from "../../Globals";

const CommunityRank = ({ total, users }) => {
  const average = parseInt(total / users);
  return users === 0 ? (
    <p>Be the first to rank this user</p>
  ) : (
    <p>{`${skillLevels[average]} (${users})`}</p>
  );
};

export default CommunityRank;
