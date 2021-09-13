import { useContext, useState, useRef, useEffect } from "react";

// Context
import { UserContext } from "../contexts/UserContext";

const useMyTournaments = () => {
  // Contexts
  const {
    user: {
      data: {
        profile: { tournaments },
      },
    },
    addTournament,
  } = useContext(UserContext);

  const [filteredResults, setFilteredResults] = useState([]);
  const filterOptions = ["All", "Active", "Inactive", "Upcoming"];
  const [show, setShow] = useState(false);
  const filterRef = useRef(null);

  useEffect(() => {
    setFilteredResults(tournaments);
  }, [tournaments]);

  // Add new tournament
  const add = (photo, profile, tournament) => {
    addTournament(photo, profile, tournament);
    // Close the form
    handleDisplay();
  };

  const handleDisplay = () => {
    setShow(!show);
  };

  const handleFilter = () => {
    switch (filterRef.current.value) {
      case "Inactive":
        return setFilteredResults(
          tournaments.filter((tournament) => tournament.active !== true)
        );
      case "Active":
        return setFilteredResults(
          tournaments.filter((tournament) => tournament.active === true)
        );
      default:
        return setFilteredResults(tournaments);
    }
  };

  return {
    add,
    show,
    handleDisplay,
    filteredResults,
    filterOptions,
    handleFilter,
    filterRef,
  };
};

export default useMyTournaments;
