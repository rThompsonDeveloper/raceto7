import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router";
import axios from "axios";

// Contexts
import { UserContext } from "../contexts/UserContext";

// Globals
import { skillLevels } from "../Globals";

const useProfile = () => {
  // Auth user
  const {
    user: { data },
  } = useContext(UserContext);

  // URL Decoding
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const id = searchParams.get("profile");

  // Local state
  const [user, setUser] = useState({
    loading: true,
    data: null,
  });

  const [myRating, setMyRating] = useState(0);
  const [myRanking, setMyRanking] = useState(0);
  const [reported, setReported] = useState(false);

  const [myProfile, setMyProfile] = useState(false);

  // when components first loads
  useEffect(() => {
    let unmounted = false;
    // user data
    const loadUser = async () => {
      try {
        setUser({ loading: true, user: null });

        const res = await axios.get(`/api/profile/${id}`);

        res.data._id === data.profile._id
          ? setMyProfile(true)
          : setMyProfile(false);

        setUser({
          loading: false,
          data: res.data,
        });

        // Find out what i rated this user
        res.data.rating.users.forEach((user) => {
          if (user.user === data.profile._id) return setMyRating(user.rating);
        });

        // Find what i ranked this user
        res.data.rank.users.forEach((user) => {
          if (user.user === data.profile._id) return setMyRanking(user.ranking);
        });

        // Find out if i reported a stiff on this user yet
        let isReported = false;
        res.data.stiffs.users.forEach((user) => {
          if (user === data.profile._id) return (isReported = true);
        });

        isReported ? setReported(true) : setReported(false);
      } catch (err) {
        console.error(err);
      }
    };

    if (!unmounted) {
      loadUser();
    }

    return () => (unmounted = true);
  }, [search, data.profile._id, id]);

  const rankProfile = async (value) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({
        rankUser: id,
        authUser: data.profile._id,
        rank: skillLevels.indexOf(value),
      });

      const newRank = await axios.post("/api/profile/rank", body, config);

      setUser({ ...user, data: { ...user.data, rank: newRank.data } });

      setMyRanking(value);
    } catch (err) {
      console.error(err);
    }
  };

  const rateProfile = async (rating) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({
        authUser: data.profile._id,
        rateUser: id,
        rating: rating,
      });

      const newRating = await axios.post("/api/profile/rate", body, config);

      setUser({ ...user, data: { ...user.data, rating: newRating.data } });

      setMyRating(rating);
    } catch (err) {
      console.error(err);
    }
  };

  const reportStiff = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({
        stiffUser: id,
        authUser: data.profile._id,
      });

      const stiffCount = await axios.post("/api/profile/stiffs", body, config);

      setUser({
        ...user,
        data: {
          ...user.data,
          stiffs: { ...user.data.stiffs, totalStiffs: stiffCount.data },
        },
      });

      setReported(true);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    user,
    myProfile,
    rankProfile,
    rateProfile,
    myRating,
    myRanking,
    reported,
    reportStiff,
  };
};

export default useProfile;
