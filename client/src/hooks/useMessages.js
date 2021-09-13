import { useEffect, useState, useContext } from "react";
import axios from "axios";

// Context
import { UserContext } from "../contexts/UserContext";

const useMessages = (id) => {
  // Local State
  const [inbox, setInbox] = useState({ loading: true, data: null });
  // Context
  const { state } = useContext(UserContext);

  useEffect(() => {
    // Immutability fix
    let newData = [];
    // Maps through the users inbox
    state.user.inbox.forEach((user) => {
      // Gets the individuals information ie ( photo, name )
      const fetch = async () => {
        let userInfo = await axios.get(`/api/messages/${user.user}`);
        newData.push(userInfo.data);
      };
      fetch();
      if (newData.length === state.user.inbox.length)
        return setInbox({ loading: false, data: newData });
    });
  }, [state.user.inbox]);
  return inbox;
};

export default useMessages;
