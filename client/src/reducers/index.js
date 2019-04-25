import { combineReducers } from "redux";

const cats = (state = [], action) => {
  const newState = [...state];
  switch (action.type) {
    case "LIST_CATS":
      return action.value;
    case "CREATE_CAT":
      newState.push(action.value);
      return newState;
    case "DELETE_CAT":
      const index = newState.findIndex(c => c._id === action.value);
      newState.splice(index, 1);
      return newState;
    default:
      return state;
  }
};

export default combineReducers({ cats });
