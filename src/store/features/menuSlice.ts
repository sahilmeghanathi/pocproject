import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  loadMenuFromStorage,
  saveMenuToStorage,
} from "../../utils/localStorage";
import { MenuItem, MenuState } from "../../interface/Menu.Interface";

const initialState: MenuState = {
  menuItems: loadMenuFromStorage(),
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenu(state, action: PayloadAction<MenuItem[]>) {
      state.menuItems = action.payload;
      saveMenuToStorage(state.menuItems);
    },

    addMenuItem(state, action: PayloadAction<MenuItem>) {
      state.menuItems.push(action.payload);
      saveMenuToStorage(state.menuItems);
    },

    deleteMenuItem(state, action: PayloadAction<string>) {
      state.menuItems = state.menuItems.filter(
        (item) => item.id !== action.payload,
      );
      saveMenuToStorage(state.menuItems);
    },

    updateMenuItem(state, action: PayloadAction<MenuItem>) {
      const index = state.menuItems.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (index !== -1) {
        state.menuItems[index] = action.payload;
        saveMenuToStorage(state.menuItems);
      }
    },
  },
});

export const { setMenu, addMenuItem, deleteMenuItem, updateMenuItem } =
  menuSlice.actions;

export default menuSlice.reducer;
