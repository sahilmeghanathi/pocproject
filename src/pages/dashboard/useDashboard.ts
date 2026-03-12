import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { defaultMenuItems } from "../../utils/data";
import { getStorageItem, setStorageItem } from "../../utils/useLocalStorage";
import { useEffect } from "react";
import { setMenu } from "../../store/features/menuSlice";
import { MenuItem } from "../../interface/Menu.Interface";
import { STORAGE_KEY } from "../../utils/constant";

export const useDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedMenu = getStorageItem<MenuItem[]>(STORAGE_KEY);

    if (!storedMenu) {
      setStorageItem(STORAGE_KEY, defaultMenuItems);

      dispatch(setMenu(defaultMenuItems));
    }
  }, []);

  const menuItems = useAppSelector((state) => state.menu.menuItems);

  const totalItems = menuItems.length;

  const totalCategories = new Set(menuItems.map((item) => item.category)).size;

  const availableItems = menuItems.filter((item) => item.available).length;

  const unavailableItems = menuItems.filter((item) => !item.available).length;

  const handleGoToMenu = () => navigate("/menu");

  return {
    totalItems,
    totalCategories,
    availableItems,
    unavailableItems,
    handleGoToMenu,
  };
};
