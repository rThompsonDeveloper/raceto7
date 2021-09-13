import { useContext } from "react";

// Components
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";

// Context
import { UserContext } from "../../contexts/UserContext";

// Globals
import { states } from "../../Globals";

// Hooks
import usePeople from "../../hooks/usePeople";

// Styles
import {
  Wrapper,
  FilterBar,
  State,
  SearchBar,
  Container,
  SearchResults,
  Title,
  ResultsFound,
  Person,
  Image,
  Name,
} from "./Styles";

const People = () => {
  const [people, loading, setSearch, stateRef, searchRef, setStateSelected] =
    usePeople();
  const { state } = useContext(UserContext);

  return (
    <Wrapper>
      <Navbar />
      <Banner
        height="240"
        image="https://thumbs.dreamstime.com/b/billiard-pool-balls-rack-cue-blue-cloth-table-banner-copy-space-billiard-pool-balls-rack-cue-blue-cloth-220840670.jpg"
        title="Find people you know"
        subTitle="just start typing and find results instantly"
      />
      <Container>
        <FilterBar>
          <SearchBar
            onChange={() => setSearch(searchRef.current.value)}
            ref={searchRef}
            placeholder="start typing their name"
          />
          <State
            onChange={() => setStateSelected(stateRef.current.value)}
            defaultValue={
              state.isAuthenticated ? state.user.location.state : "NY"
            }
            ref={stateRef}
          >
            {states.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </State>
        </FilterBar>
        <SearchResults>
          <Title>Results</Title>
          {loading ? (
            <ResultsFound>Loading...</ResultsFound>
          ) : (
            <>
              <ResultsFound>{`${people.length} ${
                people.length === 1 ? "person" : "people"
              } found in ${stateRef.current.value}`}</ResultsFound>
              {people.map((person) => (
                <Person key={person._id} to={`/profile?profile=${person._id}`}>
                  <Image src={person.profilePhoto} />
                  <Name>
                    {person.name.firstName} {person.name.lastName}
                  </Name>
                </Person>
              ))}
            </>
          )}
        </SearchResults>
      </Container>
    </Wrapper>
  );
};

export default People;
