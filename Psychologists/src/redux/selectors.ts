import { RootState } from "../types/types";

export const allTeachers = (state: RootState) => state.teachers.all;

export const showedTeachers = (state: RootState) => state.teachers.showed;

export const userInfo = (state: RootState) => state.user;

export const accessToken = (state: RootState) => state.user.token;

export const userNameInfo = (state: RootState) => state.user.name;

export const filteredTeachers = (state: RootState) => {
  const { all, showed } = state.teachers;
  const filter = state.filter;

  // Apply filter logic based on the selected filter option
  switch (filter) {
    case "AZ":
      // Sort teachers array alphabetically A to Z
      return [...all].sort((a, b) => a.name.localeCompare(b.name));
    case "ZA":
      // Sort teachers array alphabetically Z to A
      return [...all].sort((a, b) => b.name.localeCompare(a.name));
    case "Less10":
      // Filter teachers array for those with a price less than 10$
      return [...all].sort((a, b) => a.price_per_hour - b.price_per_hour);
    case "More10":
      // Filter teachers array for those with a price greater than 10$
      return [...all].sort((a, b) => b.price_per_hour - a.price_per_hour);
    case "POPULAR":
      // Filter teachers array for popular teachers
      return all.filter((el) => el.rating >= 4.7);
    case "NOTPOPULAR":
      // Filter teachers array for not popular teachers
      return all.filter((el) => el.rating < 4.7);
    case "ALL":
      return showed;
    default:
      return showed; // Return the original data if no filter is applied or "Show all" is selected
  }
};
