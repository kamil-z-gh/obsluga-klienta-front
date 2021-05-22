import { LS_AUTH_ADMIN_TOKEN } from "../constants/auth";

export const saveToken = () => {
  localStorage.setItem(LS_AUTH_ADMIN_TOKEN, "LOGGED");
};

export const removeToken = () => {
  localStorage.removeItem(LS_AUTH_ADMIN_TOKEN);
};

export const getToken = () => {
  return localStorage.getItem(LS_AUTH_ADMIN_TOKEN);
};
