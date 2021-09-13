import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";

// utils
import fixTime from "../../utils/fixTime";
import fixDate from "../../utils/fixDate";

// Styles
import {
  Wrapper,
  ImageContainer,
  Name,
  Text,
  Row,
  SubTitle,
  MoneyAdded,
  ShowContact,
  Column,
  Description,
} from "./Styles";

const Tournament = () => {
  const [tournament, setTournament] = useState({ loading: true, data: null });
  const [showContact, setShowContact] = useState(false);
  // URL Decoding
  const { search } = useLocation();
  const id = new URLSearchParams(search).get("id");
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(`/api/tournaments/${id}`);
        setTournament({ loading: false, data: res.data });
      } catch (err) {
        console.error(err);
      }
    };

    fetch();
  }, [search, id]);

  return tournament.loading ? (
    <p>Loading...</p>
  ) : (
    <Wrapper>
      {tournament.data.photo && (
        <ImageContainer>
          <img
            alt={`${tournament.data.name} tournament`}
            src={tournament.data.photo}
            style={{ maxWidth: "100vw" }}
          />
        </ImageContainer>
      )}
      <Column>
        {tournament.data.moneyAdded && (
          <MoneyAdded>{`$${tournament.data.moneyAdded} Added`}</MoneyAdded>
        )}
        <Name>{tournament.data.name}</Name>
        {tournament.data.benefitFor && (
          <Text>{`Benefit for ${tournament.data.benefitFor}`}</Text>
        )}
        <Text important={true}>{`${fixDate(tournament.data.dateOf)} ${fixTime(
          tournament.data.startTime
        )} (${tournament.data.occurs})`}</Text>
        {tournament.data.description && (
          <Description>{tournament.data.description}</Description>
        )}
      </Column>
      <Row>
        {showContact ? (
          <>
            <SubTitle>Contact</SubTitle>
            <Text>{tournament.data.phone}</Text>
            {tournament.data.phoneAlternative && (
              <Text>{tournament.data.phoneAlternative}</Text>
            )}
          </>
        ) : (
          <ShowContact onClick={() => setShowContact(true)}>
            Show Contact Info
          </ShowContact>
        )}
      </Row>
      <Row>
        <SubTitle>Location</SubTitle>
        <Text>{tournament.data.roomName}</Text>
        <Text>{`${tournament.data.location.street}, ${tournament.data.location.city} ${tournament.data.location.state}, ${tournament.data.location.zip}`}</Text>
      </Row>
      <Row style={{ paddingBottom: "40px" }}>
        <SubTitle>Details</SubTitle>
        <Text>{`$${tournament.data.entryFee} ${
          tournament.data.hasCalcutta ? "+ calcutta" : null
        } to enter`}</Text>
        <Text>{`${tournament.data.tournamentStyle} ${
          tournament.data.gameType
        } ${tournament.data.isHandicapped ? "- Handicapped" : "- Open"}`}</Text>
        <Text>{`${tournament.data.elimination} Elimination`}</Text>
      </Row>
    </Wrapper>
  );
};

export default Tournament;
