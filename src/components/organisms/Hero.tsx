
import carImage from "../../assets/cars/koenigsegg.png";;
import carImagee from  "../../assets//cars/nissan.png";

const HeroSection: React.FC = () => {
  return (
     <section className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 2xl:px-40 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Hero Card */}
        <div className="bg-[#54A6FF] rounded-2xl p-5 sm:p-6 md:p-10 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 h-full">
          {/* Text + Button in Flex */}
          <div className="flex-1 flex flex-col items-center md:items-start justify-center gap-3 sm:gap-4">
            <h1 className="text-lg sm:text-xl md:text-3xl font-sans font-semibold leading-snug text-center md:text-left">
              The Best Platform <br /> for Car Rental
            </h1>
            <p className="text-white/80 text-sans text-sm sm:text-base max-w-md text-center md:text-left">
              Ease of doing a car rental safely and reliably. Of course at a low price.
            </p>
            {/* Keep button aligned */}
            <div className="w-full flex justify-center md:justify-start">
              <button className="bg-white text-[#3563E9] font-medium px-5 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-blue-100 transition w-auto">
                Rental Car
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={carImage}
              alt="Luxury Car"
              className="w-[220px] sm:w-[280px] md:w-[400px] object-contain"
            />
          </div>
        </div>

        {/* Right Hero Card */}
        <div className="bg-[#3563E9] text-white rounded-2xl p-5 sm:p-6 md:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 h-full">
          {/* Text + Button in Flex */}
          <div className="flex-1 flex flex-col items-center md:items-start justify-center gap-3 sm:gap-4">
            <h2 className="text-lg sm:text-xl md:text-3xl font-sans font-semibold leading-snug text-center md:text-left">
              Easy Way to Rent a Car <br /> at a Low Price
            </h2>
            <p className="text-white/80 text-sans text-sm sm:text-base max-w-md text-center md:text-left">
              Providing cheap car rental services and safe rides.
            </p>
            {/* Keep button aligned */}
            <div className="w-full flex justify-center md:justify-start">
              <button className="bg-white text-[#54A6FF] font-medium px-5 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-blue-100 transition w-auto">
                Rental Car
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={carImagee}
              alt="Affordable Car"
              className="w-[220px] sm:w-[280px] md:w-[400px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
