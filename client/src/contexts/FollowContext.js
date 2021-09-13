import { createContext, useReducer } from "react";
import axios from "axios";

import FollowReducer from "./FollowReducer";

// initial state
const initialState = { loading: true, users: [] };

// Creates the context
export const FollowContext = createContext(initialState);

// Provider Component
export const FollowProvider = ({ children }) => {
  const [following, dispatch] = useReducer(FollowReducer, initialState);

  // Actions
  const loadFollowing = async (id) => {
    try {
      const followingList = await axios.get(`/api/follow/${id}`);
      dispatch({
        type: "FOLLOWERS_LOADED",
        payload: followingList.data,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const follow = async (authProfile, userProfile, following, photo, name) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({
        authProfile,
        userProfile,
        following,
      });

      if (following) {
        dispatch({
          type: "USER_FOLLOWED",
          payload: { _id: userProfile, photo, name },
        });
      } else {
        dispatch({
          type: "USER_UNFOLLOWED",
          payload: userProfile,
        });
      }

      await axios.post("/api/follow", body, config);
    } catch (err) {
      console.error(err);
    }
  };

  const isFollowing = (id) => {
    for (var user in following.users) {
      if (following.users[user]._id === id) {
        return true;
      }
    }
  };

  return (
    <FollowContext.Provider
      value={{ following, loadFollowing, follow, isFollowing }}
    >
      {children}
    </FollowContext.Provider>
  );
};
