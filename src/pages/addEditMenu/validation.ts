import * as Yup from "yup";
import { MenuItem } from "../../interface/types";

export const initialValues: MenuItem = {
  id: "",
  name: "",
  description: "",
  price: 0,
  category: "",
  image: "",
  available: true,
};

export const menuValidationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .required("Item name is required")
    .min(3, "Minimum 3 characters"),

  description: Yup.string().trim().required("Description is required"),

  price: Yup.number()
    .required("Price is required")
    .min(1, "Price must be greater than 0"),

  category: Yup.string().required("Category is required"),

  image: Yup.string()
    .url("Enter valid image url")
    .required("Image url is required"),

  available: Yup.boolean(),
});
