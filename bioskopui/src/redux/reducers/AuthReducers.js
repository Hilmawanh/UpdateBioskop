const INITAL_STATE = {
  id: "",
  username: "",
  password: "",
  login: false,
  error: "",
  loading: false
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, ...action.payload, login: true };
    case "LOGIN_LOADING":
      return { ...state, loading: true, error: "" };
    case "LOGIN_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
