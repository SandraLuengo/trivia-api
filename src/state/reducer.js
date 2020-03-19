const initialState = {
  token: false,
  categories:false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.newValue
      };
    case "SET_CATEGORIES":
      return {
        ...state,
        categories: action.newValue
      };
    default:
      return state;
  }
};

export { initialState, reducer };
