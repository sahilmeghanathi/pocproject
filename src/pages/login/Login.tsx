import { FormikProvider, Form } from "formik";

import { useLogin } from "./useLogin";
import logo from "../../assets/simform.svg";
import ImageAtom from "../../components/atoms/image";
import CustomButton from "../../components/custom/CustomButton";
import CustomInputField from "../../components/custom/CustomInput";

const LoginPage: React.FC = () => {
  const { formik } = useLogin();

  return (
    <div className="w-full flex flex-col items-center justify-center max-h-screen">
      <div className="items-center min-w-25! sm:min-w-md max-w-md justify-center  flex-col ">
        <div className="w-full bg-white p-6 rounded-xl text-center">
          <ImageAtom className="h-12!" src={logo} alt="Logo" preview={false} />
          <h2 className="text-xl font-semibold text-red-400">Admin Portal</h2>
        </div>

        <FormikProvider value={formik}>

          <Form className="flex flex-col gap-4">

            <CustomInputField
              name="email"
              label="Email"
              placeholder="Enter email"
              type="email"
              required
            />

            <CustomInputField
              name="password"
              label="Password"
              type="password"
              placeholder="Enter password"
              required
            />

            <CustomButton
              type="submit"
              label="Login"
              disabled={formik.touched && !formik.isValid }
              className="h-12! rounded-md! font-medium! disabled:bg-blue-400! bg-blue-600! text-white! text-lg!"
            />

          </Form>
          
        </FormikProvider>
      </div>
    </div>
  );
};

export default LoginPage;
