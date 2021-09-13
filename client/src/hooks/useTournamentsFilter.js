import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router";
import axios from "axios";

// Contexts
import { UserContext } from "../contexts/UserContext";

const useTournamentsFilter = () => {
  // URL Decoding
  const { search } = useLocation();

  // Local State
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);

  const { city, state } = user.data.profile.location;

  useEffect(() => {
    let unmounted = false;

    const fetch = async () => {
      try {
        const res = await axios.get(`/api/tournaments${search}`);

        setData(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err.message);
      }
    };

    if (!unmounted) fetch();

    return () => (unmounted = true);
  }, [search]);

  // Data to return
  return { data, loading, city, state };
};

export default useTournamentsFilter;
