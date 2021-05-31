import { LS_AUTH_ADMIN_TOKEN } from "../constants/auth";

/** zmienna przechowująca funkcję zapisującą token w localStorage
 */
export const saveToken = () => {
  localStorage.setItem(LS_AUTH_ADMIN_TOKEN, "LOGGED");
};
/** zmienna przechowująca funkcję usuwającą token z localStorage */
export const removeToken = () => {
  localStorage.removeItem(LS_AUTH_ADMIN_TOKEN);
};
/** zmienna przechowująca funkcję wydobywającą token z localStorage */
export const getToken = () => {
  return localStorage.getItem(LS_AUTH_ADMIN_TOKEN);
};
