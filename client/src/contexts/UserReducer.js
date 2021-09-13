const UserReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "USER_UPDATED":
    case "USER_LOADED":
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        data: payload,
      };
    case "REGISTER_SUCCESS":
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        isLoading: true,
      };
    case "LOGOUT_USER":
    case "LOGIN_FAIL":
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        data: null,
        isAuthenticated: false,
        isLoading: true,
      };
    case "PHOTO_UPLOADED":
      return {
        ...state,
        data: {
          ...state.data,
          profile: {
            ...state.data.profile,
            photo: payload,
          },
        },
      };
    case "TOURNAMENT_ADDED":
      return {
        ...state,
        data: {
          ...state.data,
          profile: {
            ...state.data.profile,
            tournaments: [...state.data.profile.tournaments, payload],
          },
        },
      };
    case "TOURNAMENT_DELETED":
      return {
        ...state,
        data: {
          ...state.data,
          profile: {
            ...state.data.profile,
            tournaments: [
              ...state.data.profile.tournaments.filter(
                (tournament) => tournament._id !== payload
              ),
            ],
          },
        },
      };
    case "REMOVED_POSTPONE":
    case "TOURNAMENT_POSTPONED":
    case "TOURNAMENT_ACTIVATION":
    case "TOURNAMENT_UPDATED":
      let i = state.data.profile.tournaments.findIndex(
        (tournament) => tournament._id === payload._id
      );
      return {
        ...state,
        data: {
          ...state.data,
          profile: {
            ...state.data.profile,
            ...state.data.profile.tournaments.splice(i, 1, payload),
          },
        },
      };
    case "MATCH_ADDED":
      return {
        ...state,
        data: {
          ...state.data,
          profile: {
            ...state.data.profile,
            matches: [...state.data.profile.matches, payload],
          },
        },
      };
    default:
      return state;
  }
};

export default UserReducer;
