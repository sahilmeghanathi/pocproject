import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../custom/CustomButton";
import { useAppDispatch } from "../../store/hooks";
import { logout } from "../../store/features/authSlice";

const LogoutComponent: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  

  const handleLogout = () => {
    // Clear auth data
    localStorage.clear();
    sessionStorage.clear();
    // Redirect to login
    navigate("/login");
    dispatch(logout())
  };

  return (
    <CustomButton
      label="Logout"
      onClick={handleLogout}
      className="h-12! rounded-md! font-medium! disabled:bg-blue-400! bg-red-400! text-white! max-w-37.5! text-lg!"
    />
  );
};

export default LogoutComponent;
