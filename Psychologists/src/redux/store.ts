import { createStore } from "redux";
import { Action, RootState } from "../types/types";

const initialState: RootState = {
  teachers: [],
  user: {
    token: "",
    name: "",
  },
};

const rootReducer = (state: RootState = initialState, action: Action) => {
  switch (action.type) {
    case "teachers/getAll":
      return {
        ...state,
        teachers: action.payload,
      };
      break;

    default:
      return state;
  }
};
export const store = createStore(rootReducer);
