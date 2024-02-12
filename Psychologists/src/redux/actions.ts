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

export const setFilter = (value: string) => {
  return {
    type: "filter/set",
    payload: value,
  };
};

export const setFilterFav = (value: string) => {
  return {
    type: "filterFav/set",
    payload: value,
  };
};

export const setFav = (array: Teacher[]) => {
  return {
    type: "Fav/set",
    payload: array,
  };
};

export const setShowLoadMore = (value: boolean) => {
  return {
    type: "loadMore/set",
    payload: value,
  };
};
