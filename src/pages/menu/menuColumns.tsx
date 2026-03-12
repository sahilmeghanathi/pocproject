import { ColumnsType } from "antd/es/table";
import { Tag } from "antd";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import { MenuItem } from "../../interface/types";
import ConfirmAction from "../../components/custom/CustomConfirmPopup";

interface ColumnProps {
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  onViewDetails: (id: string) => void;
}

export const menuColumns = ({
  onDelete,
  onEdit,
  onViewDetails,
}: ColumnProps): ColumnsType<MenuItem> => [
  {
    title: <span className="font-semibold text-lg!">Image</span>,
    dataIndex: "image",
    key: "image",
    width: 90,
    render: (image: MenuItem["image"]) =>
      image ? (
        <img
          src={image}
          alt="menu"
          className="w-12 h-12 object-cover rounded-md"
        />
      ) : (
        <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center text-xs text-gray-500">
          N/A
        </div>
      ),
  },
  {
    title: <span className="font-semibold text-lg!">Name</span>,
    dataIndex: "name",
    className: "font-medium text-base",
    key: "name",
  },
  {
    title: <span className="font-semibold text-lg!">Category</span>,
    dataIndex: "category",
    key: "category",
    className: "text-base font-medium",
  },
  {
    title: <span className="font-semibold text-lg!">Price</span>,
    dataIndex: "price",
    key: "price",
    align: "right",
    className: "text-base font-medium",
    render: (price: number) => `$${price.toFixed(2)}`,
  },
  {
    title: <span className="font-semibold text-lg!!">Status</span>,
    dataIndex: "available",
    key: "available",
    align: "center",
    render: (available: boolean) =>
      available ? (
        <Tag color="green" className="rounded-md! text-base!">
          Available
        </Tag>
      ) : (
        <Tag color="red" className="rounded-md! text-base!">
          Unavailable
        </Tag>
      ),
  },
  {
    title: <span className="font-semibold text-lg!">Actions</span>,
    key: "actions",
    align: "center",
    render: (_: unknown, record: MenuItem) => (
      <div className="flex items-center justify-center gap-2">
        <ConfirmAction
          title="Delete Menu Item"
          description="Are you sure you want to delete this menu item?"
          onConfirm={() => onDelete(record.id)}
        >
          <MdDeleteOutline className="text-2xl! hover:cursor-pointer hover:scale-110" />
        </ConfirmAction>
        <FiEdit2
          className="text-2xl! hover:cursor-pointer hover:transform hover:scale-110"
          onClick={() => onEdit(record.id)}
        />
        <LuEye
          className="text-2xl! hover:cursor-pointer hover:transform hover:scale-110"
          onClick={() => onViewDetails(record.id)}
        />
      </div>
    ),
  },
];
