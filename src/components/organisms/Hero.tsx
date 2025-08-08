import React from "react";
import carImage from "../../assets/cars/koenigsegg.png";;
import carImagee from  "../../assets//cars/nissan.png";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full px-6 md:px-10 lg:px-20 xl:px-28 2xl:px-40 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Hero Card */}
        <div className="bg-[#54A6FF] rounded-2xl p-6 md:p-10 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 h-full">
          {/* Text Section */}
          <div className="flex-1 space-y-4">
            <h1 className="text-xl md:text-3xl font-sans">
              The Best Platform <br /> for Car Rental
            </h1>
            <p className="text-white/80 text-sans text-sm md:text-base max-w-md">
              Ease of doing a car rental safely and reliably. Of course at a low price.
            </p>
            <button className="bg-white text-[#3563E9] font-medium px-6 py-3 rounded-md hover:bg-blue-100 transition">
              Rental Car
            </button>
          </div>
          {/* Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={carImage}
              alt="Luxury Car"
              className="w-full max-w-[300px] md:max-w-[400px] object-contain"
            />
          </div>
        </div>

        {/* Right Hero Card */}
        <div className="bg-[#3563E9] text-white rounded-2xl p-6 md:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 h-full">
          {/* Text Section */}
          <div className="flex-1 space-y-4">
            <h2 className="text-1xl md:text-3xl tracking-tight font-sans">
              Easy Way to Rent a Car <br /> at a Low Price
            </h2>
            <p className="text-white/80 text-sm text-sans md:text-base max-w-md">
              Providing cheap car rental services and safe rides.
            </p>
            <button className="bg-white text-[#54A6FF] font-medium px-6 py-3 rounded-md hover:bg-blue-100 transition">
              Rental Car
            </button>
          </div>
          {/* Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={carImagee}
              alt="Affordable Car"
              className="w-full max-w-[300px] md:max-w-[400px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
