// Components
import Filter from "../../components/Filter/Filter";
import Alert from "../../components/Alert/Alert";
import TournamentBanner from "../../components/TournamentBanner/TournamentBanner";
import Loading from "../../components/Loading/Loading";

// hooks
import useTournamentsFilter from "../../hooks/useTournamentsFilter";

// Styles
import { Wrapper, SearchTitle, Found, Text } from "./Styles";

const Tournaments = () => {
  const { data, loading, city, state } = useTournamentsFilter();

  return (
    <Wrapper>
      <Alert />
      <Filter page="tournaments" city={city} state={state} />
      <SearchTitle>Upcoming Tournaments (30 days)</SearchTitle>
      {!loading && (
        <Found>
          ({data.length} {data.length === 1 ? "tournament" : "tournaments"}{" "}
          found)
        </Found>
      )}
      {loading ? (
        <Loading />
      ) : data.length === 0 ? (
        <Text>
          no tournaments found please contact your local tournament directors
          and encourage them to let us help to manage their tournaments
        </Text>
      ) : (
        data.map((tournament, i) => {
          return <TournamentBanner key={i} tournament={tournament} />;
        })
      )}
    </Wrapper>
  );
};

export default Tournaments;
