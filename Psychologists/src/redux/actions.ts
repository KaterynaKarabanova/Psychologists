import { Teacher } from "../types/types";

export const setAllTeachers = (array: Teacher[]) => {
  return {
    type: "teachers/getAll",
    payload: array,
  };
};
