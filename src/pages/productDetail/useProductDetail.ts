import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MenuItem } from "../../interface/Menu.Interface";
import { getStorageItem } from "../../utils/useLocalStorage";

const STORAGE_KEY = "menu_items";

export const useProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState<MenuItem | null>(null);
  const [loading, setLoading] = useState(true);

  const getStoredMenu = (): MenuItem[] => {
    return getStorageItem<MenuItem[]>(STORAGE_KEY) || [];
  };

  useEffect(() => {
    const menuItems = getStoredMenu();

    const foundItem = menuItems.find((menu) => menu.id === id) || null;

    setItem(foundItem);
    setLoading(false);
  }, [id]);

  const handleBackToListing = () => navigate("/menu");

  return { item, loading, handleBackToListing };
};
