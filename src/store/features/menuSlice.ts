import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuItem, MenuState } from "../../interface/Menu.Interface";
import { STORAGE_KEY } from "../../utils/constant";
import { getStorageItem, setStorageItem } from "../../utils/useLocalStorage";

const initialState: MenuState = {
  menuItems: getStorageItem<MenuItem[]>(STORAGE_KEY) || [],
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenu(state, action: PayloadAction<MenuItem[]>) {
      state.menuItems = action.payload;
      setStorageItem(STORAGE_KEY, state.menuItems);
    },

    addMenuItem(state, action: PayloadAction<MenuItem>) {
      state.menuItems.push(action.payload);
      setStorageItem(STORAGE_KEY, state.menuItems);
    },

    deleteMenuItem(state, action: PayloadAction<string>) {
      state.menuItems = state.menuItems.filter(
        (item) => item.id !== action.payload,
      );
      setStorageItem(STORAGE_KEY, state.menuItems);
    },

    updateMenuItem(state, action: PayloadAction<MenuItem>) {
      const index = state.menuItems.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (index !== -1) {
        state.menuItems[index] = action.payload;
        setStorageItem(STORAGE_KEY, state.menuItems);
      }
    },
  },
});

export const { setMenu, addMenuItem, deleteMenuItem, updateMenuItem } =
  menuSlice.actions;

export default menuSlice.reducer;
