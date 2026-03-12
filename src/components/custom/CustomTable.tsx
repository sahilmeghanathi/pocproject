import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface CustomTableProps<T> {
  columns: ColumnsType<T>;
  data: T[];
  rowKey?: string;
  pagination?: boolean;
  loading?: boolean;
  className?: string;
}

const CustomTable = <T extends object>({
  columns,
  data,
  rowKey = "id",
  pagination = false,
  loading = false,
  className = "",
}: CustomTableProps<T>) => {
  const paginationConfig = pagination
    ? {
        pageSize: 10,
        showSizeChanger: false,
      }
    : false;

  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-gray-200 p-4 ${className}`}
    >
      <Table<T>
        columns={columns}
        dataSource={data}
        rowKey={rowKey}
        loading={loading}
        pagination={paginationConfig}
        scroll={{ x: "max-content" }}
      />
    </div>
  );
};

export default CustomTable;
