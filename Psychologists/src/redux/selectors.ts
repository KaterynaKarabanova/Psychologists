import { RootState } from "../types/types";

export const allTeachers = (state: RootState) => state.teachers;

export const userInfo = (state: RootState) => state.user;

export const accessToken = (state: RootState) => state.user.token;

export const userNameInfo = (state: RootState) => state.user.name;
