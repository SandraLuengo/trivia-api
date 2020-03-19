const initialState = {
  token: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.newValue
      };
    default:
      return state;
  }
};

export { initialState, reducer };
