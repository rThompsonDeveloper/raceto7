import { useRef, useState, useContext } from "react";

// Contexts
import { UserContext } from "../contexts/UserContext";

// globals
import {
  states,
  occurances,
  gameTypes,
  eliminationTypes,
  tournamentStyles,
} from "../Globals";

const useTournamentForm = (func, id) => {
  const [formProgress, setFormProgress] = useState(0);
  const steps = [
    "Basic Info",
    "Location & Time",
    "Details & Contact",
    "Description",
  ];
  const [tempPhoto, setTempPhoto] = useState(null);
  const [photo, setPhoto] = useState();
  const {
    user: {
      data: {
        profile: { _id },
      },
    },
  } = useContext(UserContext);

  const [newTournament, setNewTournament] = useState({
    id: null,
    name: null,
    place: null,
    city: null,
    state: null,
    street: null,
    zip: null,
    dateOf: null,
    startTime: null,
    occurs: null,
    gameType: null,
    isHandicapped: null,
    entryFee: null,
    hasCalcutta: null,
    tournamentStyle: null,
    elimination: null,
    benefitFor: null,
    phone: null,
    phoneAlternative: null,
    moneyAdded: null,
  });

  // Refs
  const nameRef = useRef();
  const placeRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const streetRef = useRef();
  const zipRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();
  const occursRef = useRef();
  const gameTypeRef = useRef();
  const isHandicappedRef = useRef();
  const entryFeeRef = useRef();
  const hasCalcuttaRef = useRef();
  const tournamentStyleRef = useRef();
  const eliminationTypeRef = useRef();
  const benefitForRef = useRef();
  const phoneMainRef = useRef();
  const phoneAlternativeRef = useRef();
  const moneyAddedRef = useRef();
  const descriptionRef = useRef();

  const changeImage = (e) => {
    setTempPhoto(URL.createObjectURL(e.target.files[0]));
    setPhoto(e.target.files[0]);
  };

  const back = () => {
    setFormProgress(formProgress - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    switch (formProgress) {
      case 0:
        setNewTournament({
          ...newTournament,
          name: nameRef.current.value,
        });
        return setFormProgress(1);
      case 1:
        setNewTournament({
          ...newTournament,
          place: placeRef.current.value,
          city: cityRef.current.value,
          state: stateRef.current.value,
          street: streetRef.current.value,
          zip: zipRef.current.value,
          dateOf: dateRef.current.value,
          startTime: timeRef.current.value,
          occurs: occursRef.current.value,
        });
        return setFormProgress(2);
      case 2:
        setNewTournament({
          ...newTournament,
          gameType: gameTypeRef.current.value,
          isHandicapped: isHandicappedRef.current.checked,
          entryFee: entryFeeRef.current.value,
          hasCalcutta: hasCalcuttaRef.current.checked,
          tournamentStyle: tournamentStyleRef.current.value,
          elimination: eliminationTypeRef.current.value,
          benefitFor: benefitForRef.current.value,
          phone: phoneMainRef.current.value,
          phoneAlternative: phoneAlternativeRef.current.value,
          moneyAdded: moneyAddedRef.current.value,
        });
        return setFormProgress(3);
      case 3:
        const tournament = newTournament;
        tournament.description = descriptionRef.current.value;
        tournament.id = id;
        return func(photo, _id, tournament);
      default:
        return newTournament;
    }
  };

  return {
    changeImage,
    steps,
    formProgress,
    handleSubmit,
    tempPhoto,
    nameRef,
    placeRef,
    cityRef,
    stateRef,
    streetRef,
    zipRef,
    dateRef,
    timeRef,
    occursRef,
    states,
    occurances,
    gameTypes,
    tournamentStyles,
    eliminationTypes,
    gameTypeRef,
    eliminationTypeRef,
    hasCalcuttaRef,
    isHandicappedRef,
    phoneAlternativeRef,
    phoneMainRef,
    entryFeeRef,
    tournamentStyleRef,
    benefitForRef,
    moneyAddedRef,
    descriptionRef,
    back,
    newTournament,
  };
};

export default useTournamentForm;
