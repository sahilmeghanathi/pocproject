import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { STORAGE_KEY } from "../../utils/constant";
import { defaultMenuItems } from "../../utils/data";
import { MenuItem } from "../../interface/Menu.Interface";
import { useAppDispatch } from "../../store/hooks";
import { setMenu } from "../../store/features/menuSlice";
import { getStorageItem, setStorageItem } from "../../utils/useLocalStorage";

export const useMenuManage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [availabilityFilter, setAvailabilityFilter] = useState("All");

  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [allMenuItems, setAllMenuItems] = useState<MenuItem[]>([]);

  const loadMenu = () => {
    setLoading(true);

    const storedMenu = getStorageItem<MenuItem[]>(STORAGE_KEY);

    if (!storedMenu) {
      setStorageItem(STORAGE_KEY, defaultMenuItems);
      setMenuItems(defaultMenuItems);
      setAllMenuItems(defaultMenuItems);
      dispatch(setMenu(defaultMenuItems));
    } else {
      setMenuItems(storedMenu);
      setAllMenuItems(storedMenu);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadMenu();
  }, []);

  const deleteMenuItem = (id: string) => {
    const updated = menuItems.filter((item) => item.id !== id);

    setMenuItems(updated);
    setAllMenuItems(updated);
    setStorageItem(STORAGE_KEY, updated);
  };

  const handleSearch = (query: string) => setSearchQuery(query);

  const handleCategoryFilter = (category: string) => {
    setCategoryFilter(category);
  };

  const handleAvailabilityFilter = (status: string) => {
    setAvailabilityFilter(status);
  };

  const categories = useMemo(() => {
    const unique = new Set(allMenuItems.map((item) => item.category));
    return ["All", ...Array.from(unique)];
  }, [allMenuItems]);

  const statuses = ["All", "Available", "Unavailable"];

  const filteredMenuItems = useMemo(() => {
    return allMenuItems.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesCategory =
        categoryFilter === "All" || item.category === categoryFilter;

      const matchesAvailability =
        availabilityFilter === "All" ||
        (availabilityFilter === "Available" && item.available) ||
        (availabilityFilter === "Unavailable" && !item.available);

      return matchesSearch && matchesCategory && matchesAvailability;
    });
  }, [allMenuItems, searchQuery, categoryFilter, availabilityFilter]);

  const handleNavigate = (id?: string) => {
    if (id && id.length > 0) {
      navigate(`/menu/edit/${id}`);
      return;
    }
    navigate("/menu/add");
  };

  const handleViewDetails = (id: string) => {
    navigate(`/menu/${id}`);
  };

  const handleBackToDashboard = () => navigate("/dashboard");

  return {
    menuItems: filteredMenuItems,
    loading,
    deleteMenuItem,
    handleSearch,
    handleCategoryFilter,
    handleAvailabilityFilter,
    categories,
    handleNavigate,
    handleViewDetails,
    handleBackToDashboard,
    statuses,
  };
};
