import { useEffect } from "react";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

import { initialValues, menuValidationSchema } from "./validation";
import { MenuItem } from "../../interface/Menu.Interface";

import { addMenuItem, updateMenuItem } from "../../store/features/menuSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export const useAddEditMenu = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { menuItems } = useAppSelector((state) => state.menu);

  const handleSubmit = (values: MenuItem) => {
    if (id) {
      dispatch(
        updateMenuItem({
          ...values,
          id,
        }),
      );

      toast.success("Menu item updated!");
    } else {
      dispatch(
        addMenuItem({
          ...values,
          id: Date.now().toString(),
        }),
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

    const item = menuItems.find((i) => i.id === id);

    if (item) {
      formik.setValues(item);
    }
  }, [id, menuItems]);

  const handleBackToListing = () => {
    navigate("/menu");
  };

  return {
    formik,
    isEdit: Boolean(id),
    handleBackToListing,
  };
};
