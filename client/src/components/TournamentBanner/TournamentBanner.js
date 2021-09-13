// helpers
import fixDate from "../../utils/fixDate";
import fixTime from "../../utils/fixTime";

// Styles
import {
  Wrapper,
  ProfileImage,
  TournamentName,
  TournamentImage,
  Text,
  TopBar,
  Name,
  Column,
  Content,
  BasicInfo,
  DateAndTime,
  Description,
} from "./Styles";

import { FacebookShareButton, FacebookIcon } from "react-share";

// Components
import RatingStars from "../RatingStars/RatingStars";

const TournamentBanner = ({ tournament }) => {
  const {
    profile,
    _id,
    photo,
    dateOf,
    startTime,
    name,
    roomName,
    occurs,
    location: { street, city, state, zip },
  } = tournament;
  const location = street + ", " + city + " " + state + ", " + zip;

  const shareUrl = `http://www.raceto7.com/tournament?id=${tournament._id}`;

  return (
    <Wrapper>
      <TopBar>
        <ProfileImage
          image={profile.photo}
          to={`/profile?profile=${profile._id}`}
        />
        <Column>
          <Name
            to={`/profile?profile=${profile._id}`}
          >{`${profile.name.first} ${profile.name.last}`}</Name>
          <RatingStars
            rating={parseInt(
              profile.rating.totalStars / profile.rating.totalRatings
            )}
            totalRatings={profile.rating.totalRatings}
          />
        </Column>
        <FacebookShareButton
          openShareDialogOnClick
          url={shareUrl}
          description={tournament.description}
          hashtag={`#${tournament.name}`.split(/\s+/).join("")}
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
      </TopBar>
      <Content to={`/tournament?id=${_id}`}>
        <Description>{tournament?.description}</Description>
        <TournamentImage src={photo} />
        <BasicInfo>
          <DateAndTime>
            {fixDate(dateOf) + " " + fixTime(startTime) + " (" + occurs + ")"}
          </DateAndTime>
          <TournamentName>{name}</TournamentName>
          <Text>{roomName}</Text>
          <Text>{location}</Text>
        </BasicInfo>
      </Content>
    </Wrapper>
  );
};

export default TournamentBanner;
