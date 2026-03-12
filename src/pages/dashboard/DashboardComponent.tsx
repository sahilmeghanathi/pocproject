import CustomButton from "../../components/custom/CustomButton";
import { useDashboard } from "./useDashboard";

const DashboardComponent = () => {
  const { totalItems, totalCategories, availableItems, unavailableItems, handleGoToMenu } =
    useDashboard();

  const Card = ({ title, value }: { title: string; value: number }) => (
    <div className="bg-white p-6 rounded-lg shadow flex flex-col border border-red-400 items-center">
      <span className="text-gray-500 text-xl">{title}</span>
      <span className="text-2xl font-bold mt-2">{value}</span>
    </div>
  );

  return (
    <section>
      <div className="flex items-center justify-between mb-6! text-red-400">
        <h1 className="text-2xl font-semibold">Dashboard</h1>

        <section className="flex items-center gap-4"></section>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-6">
        <Card title="Total Menu Items" value={totalItems} />
        <Card title="Total Categories" value={totalCategories} />
        <Card title="Available Items" value={availableItems} />
        <Card title="Unavailable Items" value={unavailableItems} />
      </div>


      <CustomButton
        type="button"
        onClick={handleGoToMenu}
        className=" mt-6! bg-red-400! mr-3! text-white! rounded-md! p-6! text-base! max-w-xs"
      >
        Manage Menu
      </CustomButton>
    </section>
  );
};

export default DashboardComponent;
