import { useState, useContext } from "react";

// Contexts
import { UserContext } from "../contexts/UserContext";

const useNavbar = () => {
  // Context
  const { user } = useContext(UserContext);

  // Local State
  const [showMenu, setShowMenu] = useState(false);

  return [user, showMenu, setShowMenu];
};

export default useNavbar;
