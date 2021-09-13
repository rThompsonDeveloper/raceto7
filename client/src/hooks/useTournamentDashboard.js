import { useState, useContext, useRef } from "react";

// Context
import { UserContext } from "../contexts/UserContext";

const useTournamentDashboard = (id) => {
  const {
    deleteTournament,
    tournamentActivation,
    editTournament,
    postponeTournament,
    removePostponeTournament,
  } = useContext(UserContext);

  // Local State
  const [edit, setEdit] = useState(false);
  const [showPostpone, setShowPostpone] = useState(false);
  const toRef = useRef();
  const fromRef = useRef();

  const authorizeDelete = (name) => {
    return () => {
      if (window.confirm(`Are you sure you would like to delete ${name}?`))
        deleteTournament(id);
    };
  };

  const update = (photo, profile, tournament) => {
    editTournament(photo, profile, tournament);

    // Close the form
    setEdit(!edit);
  };

  const handleEdit = () => {
    setEdit(!edit);
  };

  const activeHandler = (active) => {
    return () => {
      tournamentActivation(id, active);
    };
  };

  const handleShowPostpone = () => {
    setShowPostpone(!showPostpone);
  };

  const postpone = (e) => {
    e.preventDefault();
    postponeTournament(id, toRef.current.value, fromRef.current.value);
    setShowPostpone(false);
  };

  const removePostpone = () => {
    removePostponeTournament(id);
    setShowPostpone(false);
  };

  return {
    edit,
    authorizeDelete,
    handleEdit,
    activeHandler,
    update,
    toRef,
    fromRef,
    postpone,
    handleShowPostpone,
    showPostpone,
    removePostpone,
  };
};

export default useTournamentDashboard;
