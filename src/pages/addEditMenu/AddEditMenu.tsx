import { FormikProvider, Form } from "formik";
import { FaArrowLeft } from "react-icons/fa6";

import { useAddEditMenu } from "./useAddEditMenu";
import CustomInputField from "../../components/custom/CustomInput";
import CustomButton from "../../components/custom/CustomButton";
import CustomSwitchField from "../../components/custom/CustomSwitchField";


const AddEditMenuPage = () => {
  const { formik, isEdit, handleBackToListing } = useAddEditMenu();

  return (
    <div className="flex justify-center items-center w-full ">
      
      <div className="bg-white rounded-xl shadow-md w-full max-w-md p-6!">
        <h2
          onClick={handleBackToListing}
          className="flex gap-2 items-center justify-center hover:underline cursor-pointer"
        >
          <FaArrowLeft /> Back To Listing
        </h2>

        <h2 className="text-2xl font-semibold mb-6 text-center text-red-400">
          {isEdit ? "Edit Menu Item" : "Add Menu Item"}
        </h2>

        <FormikProvider value={formik}>
          <Form className="flex flex-col gap-4">
            <CustomInputField
              name="name"
              label="Item Name"
              placeholder="Enter item name"
              required
            />

            <CustomInputField
              name="description"
              label="Description"
              placeholder="Enter description"
              required
            />

            <CustomInputField
              name="price"
              label="Price"
              type="number"
              placeholder="Enter price"
              required
            />

            <CustomInputField
              name="category"
              label="Category"
              placeholder="Enter category"
              required
            />

            <CustomInputField
              name="image"
              label="Image URL"
              placeholder="Enter image url"
              required
            />

            <CustomSwitchField name="available" label="Availability" />

            <CustomButton
              type="submit"
              label={isEdit ? "Update Item" : "Add Item"}
              className="h-12! rounded-md! font-medium! bg-red-400! text-lg! text-white!"
            />
          </Form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default AddEditMenuPage;
