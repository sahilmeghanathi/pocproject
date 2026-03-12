import { MenuItem } from "../interface/Menu.Interface";
import { STORAGE_KEY } from "./constant";

export const loadMenuFromStorage = (): MenuItem[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveMenuToStorage = (menu: MenuItem[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(menu));
};
