import { useState, useRef, useEffect } from "react";
import axios from "axios";

const usePeople = () => {
  const [people, setPeople] = useState(null);
  const [loading, setLoading] = useState(true);
  const [stateSelected, setStateSelected] = useState(null);
  const [search, setSearch] = useState("");
  const stateRef = useRef();
  const searchRef = useRef();

  useEffect(() => {
    setStateSelected(stateRef.current.value);
    const fetch = async () => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const body = JSON.stringify({ name: search, state: stateSelected });

        const users = await axios.post("/api/users/find", body, config);

        setPeople(users.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, [search, stateSelected]);

  return [people, loading, setSearch, stateRef, searchRef, setStateSelected];
};

export default usePeople;
