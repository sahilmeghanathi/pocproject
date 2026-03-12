import React from "react";
import { Switch } from "antd";
import { useField, useFormikContext } from "formik";

interface CustomSwitchFieldProps {
  name: string;
  label: string;
  disabled?: boolean;
  className?: string;
}

const CustomSwitchField: React.FC<CustomSwitchFieldProps> = ({
  name,
  label,
  disabled = false,
  className = "",
}) => {
  const [field, meta] = useField<boolean>(name);
  const { setFieldValue } = useFormikContext();

  const isError = meta.touched && meta.error;

  const handleChange = (checked: boolean) => {
    setFieldValue(name, checked);
  };

  return (
    <div className={`flex flex-col gap-1 w-full ${className}`}>
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700">{label}</label>

        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">
            {field.value ? "Available" : "Unavailable"}
          </span>

          <Switch
            checked={field.value}
            onChange={handleChange}
            disabled={disabled}
          />
        </div>
      </div>

      {isError && (
        <p className="text-red-500 text-left text-xs mt-1">{meta.error}</p>
      )}
    </div>
  );
};

export default CustomSwitchField;
