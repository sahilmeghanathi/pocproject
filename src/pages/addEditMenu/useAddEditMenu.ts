import { useEffect } from "react";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

import { initialValues, menuValidationSchema } from "./validation";
import { MenuItem } from "../../interface/types";
import { STORAGE_KEY } from "../../utils/constant";

export const useAddEditMenu = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const getStoredMenu = (): MenuItem[] => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  };

  const handleSubmit = (values: MenuItem) => {
    const menuItems = getStoredMenu();

    if (id) {
      // EDIT
      const updated = menuItems.map((item) =>
        item.id === id ? { ...values, id } : item,
      );

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      toast.success("Menu item updated!");
    } else {
      // ADD
      const newItem = {
        ...values,
        id: Date.now().toString(),
      };

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify([...menuItems, newItem]),
      );

      toast.success("Menu item added!");
    }

    navigate("/menu");
  };

  const formik = useFormik<MenuItem>({
    initialValues,
    validationSchema: menuValidationSchema,
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    if (!id) return;

    const items = getStoredMenu();
    const item = items.find((i) => i.id === id);

    if (item) {
      formik.setValues(item);
    }
  }, [id]);

  const handleBackToListing = () => {
    navigate("/menu");
  };

  return { formik, isEdit: Boolean(id), handleBackToListing };
};
