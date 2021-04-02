const initialState = {
  isLoading: false,
  isAuthenticated: false,
  tokenResponse: null,
  details: null,
  authorization: null,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AUTHENTICATION_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        token: action.payload.token,
        refreshToken: action.payload.refresh_token,
        expiresIn: action.payload.expiresIn,
      };
    case 'UNAUTHENTICATE_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        token: null,
        refreshToken: null,
        expiresIn: null,
      };
    }
    default:
      return state;
  }
};
