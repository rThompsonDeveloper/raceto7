import { useContext, useState } from "react";

// Context
import { UserContext } from "../contexts/UserContext";

const useMyMatches = () => {
  const {
    user: {
      data: {
        profile: { _id },
      },
    },
    addMatch,
  } = useContext(UserContext);

  const [show, setShow] = useState(false);

  const add = (description, min, max, city, state) => {
    addMatch(_id, description, min, max, city, state);
  };

  const handleShow = () => {
    setShow(!show);
  };

  return { add, show, handleShow };
};

export default useMyMatches;
