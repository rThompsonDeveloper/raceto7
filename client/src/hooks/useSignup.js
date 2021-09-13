import { useRef, useContext } from "react";

// Contexts
import { UserContext } from "../contexts/UserContext";

// Globals
import { skillLevels, states } from "../Globals";

const useSignup = () => {
  // Contexts
  const { register } = useContext(UserContext);

  // Refs
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const birthdateRef = useRef();
  const skillLevelRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();

  // Methods
  const handleSignup = (e) => {
    // Prevent page reload
    e.preventDefault();

    // Invoke register user function
    register(
      firstNameRef.current.value,
      lastNameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value,
      birthdateRef.current.value,
      skillLevelRef.current.value,
      cityRef.current.value,
      stateRef.current.value
    );
  };

  return {
    emailRef,
    passwordRef,
    handleSignup,
    firstNameRef,
    lastNameRef,
    birthdateRef,
    skillLevelRef,
    cityRef,
    stateRef,
    skillLevels,
    states,
  };
};

export default useSignup;
