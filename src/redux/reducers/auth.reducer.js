import {
  LOAD_PROFILE,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../actionType";

// reducer is just a function
const initialState = {
  accessToken: null,
  user: null,
  loading: false,
};

export const authReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...prevState,
        accessToken: payload,
        loading: false,
      };

    case LOGIN_FAILED:
      return {
        ...prevState,
        accessToken: null,
        loading: false,
        error: payload,
      };

    case LOAD_PROFILE:
      return {
        ...prevState,
        user: payload,
      };

    default:
      return prevState;
  }
};
