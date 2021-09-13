// Styles
import { Wrapper, Image, Content, TopSection, Group, Name } from "./Styles";

const Match = ({ match }) => {
  const {
    profilePhoto,
    name,
    price,
    gameType,
    tablePreferance,
    poolHallPreferance,
    raceTo,
    minSets,
    skillLevel,
    reputation,
    location,
  } = match;
  const { firstName, lastName } = name;
  return (
    <Wrapper>
      <TopSection>
        <Image image={profilePhoto}></Image>
        <Group>
          <Name>{firstName + " " + lastName}</Name>
          <p>{reputation}</p>
        </Group>
      </TopSection>

      <p>{skillLevel}</p>
      <Content>
        <p
          style={{ textAlign: "center" }}
        >{`Looking for a ${gameType} match, race to ${raceTo} for $${price.min} - $${price.max}. Minumum of ${minSets} sets, preferably on a ${tablePreferance} table at ${poolHallPreferance} in ${location.city}, ${location.state}`}</p>
      </Content>
    </Wrapper>
  );
};

export default Match;
