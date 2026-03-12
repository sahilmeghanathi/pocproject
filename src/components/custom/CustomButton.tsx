import React from "react";
import { Button } from "antd";

type ButtonVariant = "primary" | "secondary" | "danger" | "outline";

interface CustomButtonProps {
  label?: string;
  type?: "button" | "submit" | "reset";
  htmlType?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  loading?: boolean;
  disabled?: boolean;
  block?: boolean;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  children?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white border-none",
  secondary: "bg-gray-600 hover:bg-gray-700 text-white border-none",
  danger: "bg-red-600 hover:bg-red-700 text-white border-none",
  outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
};

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  type = "button",
  htmlType,
  variant = "primary",
  loading = false,
  disabled = false,
  block = true,
  className = "",
  icon,
  children,
  onClick,
}) => {
  return (
    <Button
      type="default"
      htmlType={htmlType || type}
      loading={loading}
      disabled={disabled}
      block={block}
      icon={icon}
      onClick={onClick}
      className={`h-10 rounded-md font-medium flex items-center justify-center ${variantStyles[variant]} ${className}`}
    >
      {children || label}
    </Button>
  );
};

export default CustomButton;
