import { MenuItem } from "../interface/types";

const STORAGE_KEY = "menu_items";

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
