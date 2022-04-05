const initialState = {
  allCategories: [],
  questions: [],
};

const applicationReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ALL_CATEGORIES":
      return {
        ...state,
        allCategories: action?.payload,
      };
    case "GET_QUESTIONS":
      return {
        ...state,
        questions: action?.payload,
      };
    default:
      return state;
  }
};
export default applicationReducer;
