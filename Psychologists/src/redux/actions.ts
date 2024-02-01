import { Teacher, User } from "../types/types";

export const setAllTeachers = (array: Teacher[]) => {
  return {
    type: "teachers/getAll",
    payload: array,
  };
};

export const setShowedTeachers = (array: Teacher[]) => {
  return {
    type: "teachers/getShowed",
    payload: array,
  };
};

export const setUser = (data: User) => {
  return {
    type: "user/add",
    payload: data,
  };
};
