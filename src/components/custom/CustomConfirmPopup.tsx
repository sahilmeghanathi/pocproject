import { Popconfirm } from "antd";
import React from "react";

interface ConfirmActionProps {
  title?: string;
  description?: string;
  onConfirm: () => void;
  children: React.ReactNode;
}

const ConfirmAction: React.FC<ConfirmActionProps> = ({
  title = "Delete item?",
  description = "Are you sure you want to delete this item?",
  onConfirm,
  children,
}) => {
  return (
    <Popconfirm
      title={title}
      description={description}
      onConfirm={onConfirm}
      okText="Yes"
      cancelText="No"
      placement="top"
    >
      <span>{children}</span>
    </Popconfirm>
  );
};

export default ConfirmAction;
