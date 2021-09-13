import { useRef, useContext } from "react";

// Contexts
import { UserContext } from "../contexts/UserContext";

const useLogin = () => {
  // Contexts
  const { login } = useContext(UserContext);
  // Refs
  const emailRef = useRef();
  const passwordRef = useRef();

  // Methods
  const handleLogin = (e) => {
    // Prevent form reload
    e.preventDefault();

    // login the user
    login(emailRef.current.value, passwordRef.current.value);
  };

  return { emailRef, passwordRef, handleLogin };
};

export default useLogin;
