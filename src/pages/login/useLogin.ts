import toast from "react-hot-toast";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import { loginValidationSchema, initialValues } from "./validation";
import { login } from "../../store/features/authSlice";
import { useAppDispatch } from "../../store/hooks";
import { DUMMY_CREDENTIALS } from "../../utils/constant";
import { LoginPayload } from "../../interface/User.Interface";

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values: LoginPayload) => {
    const { email, password } = values;
    if (
      email === DUMMY_CREDENTIALS.email &&
      password === DUMMY_CREDENTIALS.password
    ) {
      dispatch(login({ email, password }));
      toast.success("Login successful!");
      navigate("/dashboard");
    } else {
      toast.error("Invalid email or password");
    }
  };

  const formik = useFormik<LoginPayload>({
    initialValues,
    validationSchema: loginValidationSchema,
    onSubmit: handleSubmit,
  });

  return { formik };
};
