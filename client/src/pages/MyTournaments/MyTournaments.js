// Components
import TournamentForm from "../../components/TournamentForm/TournamentForm";
import TournamentDashboard from "../../components/TournamentDashboard/TournamentDashboard";
import Alert from "../../components/Alert/Alert";

// hooks
import useMyTournaments from "../../hooks/useMyTournaments";

// Styles
import {
  Wrapper,
  PostTournament,
  SectionTitle,
  Notification,
  Section,
  FilterWrapper,
  FilterTitle,
  Select,
  MainContent,
  Row,
} from "./Styles";

const MyTournaments = () => {
  const {
    filteredResults,
    add,
    show,
    handleDisplay,
    filterOptions,
    handleFilter,
    filterRef,
  } = useMyTournaments();

  return (
    <Wrapper>
      <FilterWrapper>
        <FilterTitle>Showing</FilterTitle>
        <Select name="filterOptions" ref={filterRef} onChange={handleFilter}>
          {filterOptions.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </FilterWrapper>
      <MainContent>
        <Alert />
        <Row isShowing={show ? "true" : "false"}>
          <SectionTitle>Results</SectionTitle>
          {show ? null : (
            <PostTournament onClick={handleDisplay}>Add New</PostTournament>
          )}
          {show ? <TournamentForm func={add} close={handleDisplay} /> : null}
        </Row>
        {filteredResults.length === 0 ? (
          <Section>
            <Notification>There are no tournaments posted</Notification>
          </Section>
        ) : (
          filteredResults.map((tournament, i) => (
            <TournamentDashboard tournament={tournament} key={i} />
          ))
        )}
      </MainContent>
    </Wrapper>
  );
};

export default MyTournaments;
