import { createStore } from "redux";
import { Action, RootState } from "../types/types";

const initialState: RootState = {
  teachers: [],
  user: {
    token: "",
    email: "",
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
    case "user/add":
      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          token: action.payload.token,
          name: action.payload.name,
          email: action.payload.email,
        })
      );
      return {
        ...state,
        user: {
          token: action.payload.token,
          name: action.payload.name,
          email: action.payload.email,
        },
      };
    default:
      return state;
  }
};
export const store = createStore(rootReducer);
