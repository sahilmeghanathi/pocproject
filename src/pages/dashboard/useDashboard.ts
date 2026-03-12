import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

export const useDashboard = () => {

  const navigate = useNavigate();
  
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
