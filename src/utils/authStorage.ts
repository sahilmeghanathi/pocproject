import { User } from "../interface/User.Interface";
import { AUTH_KEY } from "./constant";

export const getUserFromStorage = (): User | null => {
  try {
    const data = localStorage.getItem(AUTH_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};

export const saveUserToStorage = (user: User) => {
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
};

export const removeUserFromStorage = () => {
  localStorage.removeItem(AUTH_KEY);
};
