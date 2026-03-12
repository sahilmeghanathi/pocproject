import { FaArrowLeft } from "react-icons/fa";

import InputAtom from "../../components/atoms/input";
import CustomButton from "../../components/custom/CustomButton";
import CustomTable from "../../components/custom/CustomTable";
import { menuColumns } from "./menuColumns";
import { useMenuManage } from "./useMenuList";
import CustomSelect from "../../components/custom/CustomSelect";

const MenuManageUI: React.FC = () => {
  const {
    menuItems,
    loading,
    deleteMenuItem,
    handleSearch,
    handleNavigate,
    handleViewDetails,
    handleBackToDashboard,
    categories,
    handleAvailabilityFilter,
    handleCategoryFilter,
    statuses,
  } = useMenuManage();

  const columns = menuColumns({
    onDelete: deleteMenuItem,
    onEdit: handleNavigate,
    onViewDetails: handleViewDetails,
  });

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6! text-red-400 ">
        <section className="min-w-25! text-left w-full mb-4! max-w-lg">
          <h2
            onClick={handleBackToDashboard}
            className="flex gap-2 items-center justify-left hover:underline cursor-pointer"
          >
            <FaArrowLeft /> Back To Dashboard
          </h2>
          <h1 className="text-2xl font-semibold text-left">Menu Management</h1>
        </section>

        <section className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-stretch sm:items-center gap-3 w-full lg:w-auto">
          <InputAtom
            name="search"
            label="Search"
            placeholder="Search menu items..."
            className=" ml-4! ! h-8! border-red-400 min-w-md!"
            onChange={(e) => handleSearch(e.target.value)}
          />

          <CustomSelect
            options={categories}
            onChange={handleCategoryFilter}
            className="w-full"
          />

          <CustomSelect
            options={statuses}
            onChange={handleAvailabilityFilter}
            className="w-full"
          />

          <CustomButton
            type="button"
            onClick={handleNavigate}
            className=" bg-red-400! text-white! rounded-md! p-4! text-base!"
          >
            Add New Item
          </CustomButton>
        </section>
      </div>

      <CustomTable
        columns={columns}
        data={menuItems}
        pagination
        loading={loading}
        className="bg-white"
      />
    </div>
  );
};

export default MenuManageUI;
