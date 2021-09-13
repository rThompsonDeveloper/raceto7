const FollowReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "FOLLOWERS_LOADED":
      return { ...state, loading: false, users: payload };
    case "USER_UNFOLLOWED":
      return {
        ...state,
        loading: false,
        users: [...state.users.filter((user) => user._id !== payload)],
      };
    case "USER_FOLLOWED":
      return { ...state, users: [...state.users, payload] };
    default:
      return state;
  }
};

export default FollowReducer;
