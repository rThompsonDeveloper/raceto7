import { useState } from "react";

// hooks
import useProfile from "../../hooks/useProfile";

// Styles
import {
  Wrapper,
  ProfilePhoto,
  TopBarWrapper,
  ButtonWrapper,
  Message,
  Rank,
  Stiff,
  Report,
  SectionHeading,
  SearchWrapper,
  Results,
  Row,
  Column,
  Title,
  Star,
  EditProfileIcon,
  TopSection,
  Section,
  Group,
  Name,
  Text,
  ProfileWrapper,
  MainContent,
} from "./Styles";

// Components
import TournamentBanner from "../../components/TournamentBanner/TournamentBanner";
import Rate from "../../components/Rate/Rate";
import Follow from "../../components/Follow/Follow";
import RatingStars from "../../components/RatingStars/RatingStars";
import Ranking from "../../components/Ranking/Ranking";
import CommunityRank from "../../components/CommunityRank/CommunityRank";
import Stiffs from "../../components/Stiffs/Stiffs";
import ImageEdit from "../../components/ImageEdit/ImageEdit";
import Loading from "../../components/Loading/Loading";
import { Tooltip } from "@material-ui/core";

const Profile = () => {
  // local state
  const [showRate, setShowRate] = useState(false);
  const [showRank, setShowRank] = useState(false);
  const [showStiffs, setShowStiffs] = useState(false);

  // Hooks
  const {
    user,
    myProfile,
    rankProfile,
    rateProfile,
    myRating,
    myRanking,
    reported,
    reportStiff,
  } = useProfile();

  return (
    <Wrapper>
      {user.loading ? (
        <Loading />
      ) : (
        <>
          <TopSection>
            <Section>
              {myProfile ? (
                <ImageEdit image={user.data.photo} />
              ) : (
                <ProfilePhoto src={user.data.photo} />
              )}
            </Section>
            <Group>
              <Name>{user.data.name.first}</Name>
              <Name>{user.data.name.last}</Name>
            </Group>
            <Group>
              <Text>
                {`${user.data.location.city}, ${user.data.location.state}`}
              </Text>
            </Group>
            {myProfile && <EditProfileIcon />}
            {!myProfile && (
              <TopBarWrapper>
                <Tooltip title="Message">
                  <ButtonWrapper color="blue">
                    <Message />
                  </ButtonWrapper>
                </Tooltip>
                <ButtonWrapper color="green">
                  <Follow
                    id={user.data._id}
                    photo={user.data.photo}
                    name={user.data.name}
                  />
                </ButtonWrapper>
                <Tooltip title="Rank user">
                  <ButtonWrapper
                    onClick={() => setShowRank(!showRank)}
                    color="purple"
                  >
                    <Rank />
                  </ButtonWrapper>
                </Tooltip>
                <Tooltip title="Rate user">
                  <ButtonWrapper
                    onClick={() => setShowRate(!showRate)}
                    color="teal"
                  >
                    <Star />
                  </ButtonWrapper>
                </Tooltip>
                <Tooltip title="Report Stiff">
                  <ButtonWrapper
                    onClick={() => setShowStiffs(true)}
                    color="brown"
                  >
                    <Stiff />
                  </ButtonWrapper>
                </Tooltip>
                <Tooltip title="Report Profile">
                  <ButtonWrapper color="red">
                    <Report />
                  </ButtonWrapper>
                </Tooltip>
              </TopBarWrapper>
            )}
          </TopSection>
          <ProfileWrapper style={{ paddingBottom: "40px" }}>
            <MainContent>
              {showRate && (
                <Rate
                  show={setShowRate}
                  name={user.data.name.first}
                  rateProfile={rateProfile}
                  myRating={myRating}
                />
              )}
              {showRank && (
                <Ranking
                  show={setShowRank}
                  name={user.data.name.first}
                  rankProfile={rankProfile}
                  myRanking={myRanking}
                />
              )}
              {showStiffs && (
                <Stiffs
                  show={setShowStiffs}
                  name={user.data.name.first}
                  reported={reported}
                  reportStiff={reportStiff}
                />
              )}
              <SectionHeading>Rank & Reputation</SectionHeading>
              <SearchWrapper>
                <Row>
                  <Column>
                    <Title>Self Rank</Title>
                    <p>{user.data.skillLevel}</p>
                  </Column>
                  <Column>
                    <Title color="danger">Stiffs Reported</Title>
                    <p>
                      {user.data.stiffs.totalStiffs
                        ? user.data.stiffs.totalStiffs
                        : "0"}
                    </p>
                  </Column>
                </Row>
                <Row>
                  <Column>
                    <Title>Community Rank</Title>
                    <CommunityRank
                      total={user.data.rank.totalRankings}
                      users={user.data.rank.totalRanks}
                    />
                  </Column>
                  <Column>
                    <Title>Ratings</Title>
                    <div style={{ display: "flex" }}>
                      <RatingStars
                        totalRatings={user.data.rating.totalRatings}
                        rating={parseInt(
                          user.data.rating.totalStars /
                            user.data.rating.totalRatings
                        )}
                      />
                    </div>
                  </Column>
                </Row>
              </SearchWrapper>
              <SectionHeading>
                {user.data.name.first}'s Match Status
              </SectionHeading>
              <SearchWrapper>
                <Results>
                  {user.data.name.first} is not currently looking for a match
                </Results>
              </SearchWrapper>
              <SectionHeading>
                {user.data.name.first}'s Active Tournaments
              </SectionHeading>
              {user.data.tournaments.length !== 0 ? (
                user.data.tournaments.map((tournament, index) => {
                  tournament.profile = {
                    _id: user.data._id,
                    photo: user.data.photo,
                    name: {
                      first: user.data.name.first,
                      last: user.data.name.last,
                    },
                    rating: {
                      totalStars: user.data.rating.totalStars,
                      totalRatings: user.data.rating.totalRatings,
                    },
                  };
                  return (
                    <TournamentBanner tournament={tournament} key={index} />
                  );
                })
              ) : (
                <SearchWrapper>
                  <Results>
                    {user.data.name.first} has not posted any tournaments
                  </Results>
                </SearchWrapper>
              )}
            </MainContent>
          </ProfileWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default Profile;
