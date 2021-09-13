import { createContext, useReducer, useContext } from "react";

import axios from "axios";

import setAuthToken from "../utils/setAuthToken";

import UserReducer from "./UserReducer";

import { AlertContext } from "./AlertContext";
import { FollowContext } from "./FollowContext";

// utils
import fixDate from "../utils/fixDate";

// initial state
const initialState = {
  token: localStorage.getItem("token"),
  isLoading: true,
  isAuthenticated: false,
  data: null,
};

// Creates the context
export const UserContext = createContext(initialState);

// Provider Component
export const UserProvider = ({ children }) => {
  const [user, dispatch] = useReducer(UserReducer, initialState);

  const { setAlert } = useContext(AlertContext);
  const { loadFollowing } = useContext(FollowContext);

  // Actions
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get("/api/auth");

      dispatch({
        type: "USER_LOADED",
        payload: res.data,
      });

      loadFollowing(res.data.profile._id);
    } catch (err) {
      console.error(err.message);
    }
  };

  const login = async (email, password) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email, password });
    try {
      const res = await axios.post("/api/auth", body, config);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data,
      });

      loadUser();
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) errors.forEach((error) => setAlert(error.msg, "error"));
      dispatch({
        type: "LOGIN_FAIL",
      });
    }
  };

  // Register
  const register = async (
    firstName,
    lastName,
    email,
    password,
    birthDate,
    skillLevel,
    city,
    state
  ) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      firstName,
      lastName,
      email,
      password,
      birthDate,
      skillLevel,
      city,
      state,
    });

    try {
      const res = await axios.post("/api/users", body, config);

      dispatch({
        type: "REGISTER_SUCCESS",
        payload: res.data,
      });

      loadUser();
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) errors.forEach((error) => setAlert(error.msg, "error"));
      dispatch({
        type: "REGISTER_FAIL",
      });
    }
  };

  // Edit User Information
  const edit = async (id, age, gender, city, state, skillLevel, email) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      id,
      age,
      gender,
      city,
      state,
      skillLevel,
      email,
    });

    try {
      const res = await axios.post("/api/users/update", body, config);

      dispatch({
        type: "USER_UPDATED",
        payload: res.data,
      });

      // Alert the user update was successful
      setAlert("Profile Updated", "success");
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) errors.forEach((error) => setAlert(error.msg, "error"));
    }
  };

  // Logout user
  const logout = async () => {
    dispatch({
      type: "LOGOUT_USER",
    });
  };

  const uploadPhoto = async (photo) => {
    try {
      const data = new FormData();
      const authProfile = user.data.profile._id;
      data.append("profileImage", photo);
      data.append("id", authProfile);
      const newImage = await axios.post("/api/upload", data, {
        headers: {
          accept: "application/json",
          "Accept-Language": "en-US,en;q=0.8",
          "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
        },
      });
      dispatch({
        type: "PHOTO_UPLOADED",
        payload: newImage.data,
      });
    } catch (err) {
      console.error(err);
    }
  };

  // Add new tournament
  const addTournament = async (photo, profile, tournament) => {
    try {
      const data = new FormData();

      data.append("photo", photo);
      data.append("profile", profile);
      for (var key in tournament) {
        data.append(key, tournament[key]);
      }

      const newTournament = await axios.post("/api/tournaments", data, {
        headers: {
          accept: "application/json",
          "Accept-Language": "en-US,en;q=0.8",
          "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
        },
      });

      dispatch({
        type: "TOURNAMENT_ADDED",
        payload: newTournament.data,
      });

      setAlert(`${newTournament.data.name} added successfully`, "success");
    } catch (err) {
      console.error(err.message);
    }
  };

  // Delete Tournament
  const deleteTournament = async (id) => {
    try {
      await axios.delete(`/api/tournaments/${id}`);

      dispatch({
        type: "TOURNAMENT_DELETED",
        payload: id,
      });

      setAlert("Tournament Deleted", "error");
    } catch (err) {
      console.error(err);
    }
  };

  const editTournament = async (photo, profile, tournament) => {
    try {
      const data = new FormData();

      data.append("photo", photo);
      data.append("profile", profile);
      for (var key in tournament) {
        data.append(key, tournament[key]);
      }

      const newTournament = await axios.post("/api/tournaments", data, {
        headers: {
          accept: "application/json",
          "Accept-Language": "en-US,en;q=0.8",
          "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
        },
      });

      dispatch({
        type: "TOURNAMENT_UPDATED",
        payload: newTournament.data,
      });

      setAlert(`${newTournament.data.name} updated successfully`, "success");
    } catch (err) {
      console.error(err.message);
    }
  };

  const tournamentActivation = async (id, active) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({ id, active });

      const tournament = await axios.post(
        "/api/tournaments/active",
        body,
        config
      );

      dispatch({
        type: "TOURNAMENT_ACTIVATION",
        payload: tournament.data,
      });

      setAlert(
        `${tournament.data.name} ${
          tournament.data.active ? "Activated" : "Deactivated"
        }`
      );
    } catch (err) {
      console.error(err);
    }
  };

  const postponeTournament = async (id, to, from) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({ id, to, from });

      const tournament = await axios.post(
        "/api/tournaments/postpone",
        body,
        config
      );

      console.log(tournament);

      dispatch({ type: "TOURNAMENT_POSTPONED", payload: tournament.data });

      setAlert(
        `${tournament.data.name} postponed from ${fixDate(
          tournament.data.postpone.from
        )} until ${fixDate(tournament.data.postpone.to)}`,
        "success"
      );
    } catch (err) {
      console.error(err);
    }
  };

  const removePostponeTournament = async (id) => {
    try {
      const tournament = await axios.get(`/api/tournaments/postpone/${id}`);

      dispatch({ type: "REMOVED_POSTPONE", payload: tournament.data });

      setAlert(`${tournament.data.name} resumed`, "success");
    } catch (err) {
      console.error(err);
    }
  };

  const addMatch = async (user, description, min, max, city, state, occurs) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({
        user,
        description,
        price: { min, max },
        location: { city, state },
        occurs,
      });

      const match = await axios.post("/api/match", body, config);

      dispatch({
        type: "MATCH_ADDED",
        payload: match.data,
      });

      setAlert("match added successfully", "success");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        loadUser,
        logout,
        register,
        edit,
        uploadPhoto,
        addTournament,
        deleteTournament,
        tournamentActivation,
        editTournament,
        postponeTournament,
        removePostponeTournament,
        addMatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
