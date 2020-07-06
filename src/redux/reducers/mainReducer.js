const initialState = {
  expenses: [],
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_EXPENSES":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "REMOVE_DATA":
      return {
        ...state,
        expenses: action.payload,
      };
    default:
      return state;
  }
};
