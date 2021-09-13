// Hooks
import useSearch from "../../hooks/useSearch";

// Styles
import {
  SearchBar,
  Wrapper,
  SearchResults,
  ResultTitle,
  User,
  Image,
  Name,
  Icon,
  BackIcon,
  Row,
} from "./Styles";

const Search = () => {
  const [
    searchRef,
    show,
    handleChange,
    people,
    loading,
    showSearch,
    handleShow,
    handleBlur,
  ] = useSearch();

  return showSearch ? (
    <Wrapper>
      <Row>
        <BackIcon onClick={handleShow} />
        <SearchBar
          ref={searchRef}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Find People"
        />
      </Row>
      <SearchResults show={show}>
        <ResultTitle>Results</ResultTitle>
        {loading ? (
          <p>loading...</p>
        ) : (
          people.map((user) => (
            <User
              to={`/profile?profile=${user._id}`}
              onClick={handleShow}
              key={user._id}
            >
              <Image src={user.photo} />
              <Name>
                {user.name.first} {user.name.last}
              </Name>
            </User>
          ))
        )}
      </SearchResults>
    </Wrapper>
  ) : (
    <Icon onClick={handleShow} />
  );
};

export default Search;
