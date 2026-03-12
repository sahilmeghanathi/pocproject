import React, { useState } from "react"
import { Input } from "antd"
import { useField } from "formik"

interface CustomInputFieldProps {
  name: string
  label: string
  type?: "text" | "password" | "email" | "number"
  placeholder?: string
  required?: boolean
  disabled?: boolean
  className?: string
}

const CustomInputField: React.FC<CustomInputFieldProps> = ({
  label,
  required = false,
  type = "text",
  className = "",
  ...props
}) => {
  const [field, meta] = useField(props.name)
  const [showPassword, setShowPassword] = useState(false)

  const isError = meta.touched && meta.error

  const togglePassword = () => {
    setShowPassword((prev) => !prev)
  }

  const renderInput = () => {
    if (type === "password") {
      return (
        <Input
          {...field}
          {...props}
          type={showPassword ? "text" : "password"}
          className={`h-12 text-lg! bg-white! rounded-lg! ${isError ? "border-red-500!" : ""} ${className}`}
        />
      )
    }

    return (
      <Input
        {...field}
        {...props}
        type={type}
        className={`h-12 text-lg! bg-white! rounded-lg! ${isError ? "border-red-500!" : ""} ${className}`}
      />
    )
  }

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>

        {type === "password" && (
          <button
            type="button"
            onClick={togglePassword}
            className="text-xs text-blue-500 hover:underline"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>

      {renderInput()}

      {isError && (
        <p className="text-red-500 text-left text-xs mt-1">
          {meta.error}
        </p>
      )}
    </div>
  )
}

export default CustomInputField