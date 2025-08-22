
import SwitchToggle from '../atoms/SwitchToggle';
import SearchBar from '../molecules/SearchBar';

const SearchSection = () => {
  const handleLocationChange = (val: string) => {
    console.log('Pickup location:', val);
  };

  const handleDropoffChange = (val: string) => {
    console.log('Drop-off location:', val);
  };

  return (
    <section className="w-full flex justify-center items-center px-6 py-10 mt-0 bg-[#f6f7f9]">
      <div className="w-full max-w-6xl p-6 flex flex-col lg:flex-row gap-30 mt-0 relative">
        {/* Pickup Section */}
        <div className="flex-1">
          <SearchBar
            label="Pick-Up"
            locationPlaceholder="Pick-up Location"
            onLocationChange={handleLocationChange}
          />
        </div>

        {/* Switch Icon */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#3563e9] p-3 rounded-md">
          <SwitchToggle />
        </div>

        {/* Dropoff Section */}
        <div className="flex-1">
          <SearchBar
            label="Drop-Off"
            locationPlaceholder="Drop-off Location"
            onLocationChange={handleDropoffChange}
          />
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
