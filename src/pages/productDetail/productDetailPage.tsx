import { FaArrowLeft } from "react-icons/fa6";
import { useProductDetail } from "./useProductDetail";

const ProductDetailPage = () => {
  const { item, loading, handleBackToListing } = useProductDetail();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-gray-500">
        Loading product details...
      </div>
    );
  }

  if (!item) {
    return (
      <div className="flex flex-col items-center gap-4 mt-20">
        <p className="text-red-500 text-lg font-medium">Product not found</p>
        <button
          onClick={handleBackToListing}
          className="px-4 py-2  text-white rounded-md hover:bg-blue-700 transition"
        >
          Back to Menu
        </button>
      </div>
    );
  }

  return (
    <section className="h-full w-full flex flex-col justify-center items-center ">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <h2
          onClick={handleBackToListing}
          className="flex gap-2 items-center justify-left hover:underline cursor-pointer"
        >
          <FaArrowLeft /> Back To Listing
        </h2>

        {/* Product Card */}

        <div className="bg-white rounded-xl shadow-lg overflow-hidden md:flex">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-80 md:h-full object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="p-6 flex flex-col md:w-1/2">
            <div className="flex flex-col gap-4 p-6!">
              {/* Title */}
              <h1 className="text-3xl text-left font-semibold">{item.name}</h1>

              <p className="text-gray-600 text-left leading-relaxed">
                {item.description}
              </p>

              <div className="flex items-center gap-4 flex-wrap">
                <span className="w-fit p-3! text-sm bg-gray-100 rounded-full text-gray-700">
                  Category : {item.category}
                </span>

                {/* Availability */}
                <span
                  className={`w-fit p-3! text-sm font-medium rounded-full ${
                    item.available
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {item.available ? "Available" : "Currently Unavailable"}
                </span>
              </div>

              {/* Category Badge */}
            </div>

            <div className="p-6! flex justify-between items-center">
              <span className="text-2xl font-bold text-green-600">
                ₹{item.price}
              </span>

              {item.available && (
                <button className="p-3! bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                  Order Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
