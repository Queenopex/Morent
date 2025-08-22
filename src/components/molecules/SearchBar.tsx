import React from "react";
import LocationDropdown from "../atoms/LocationDropdow";
import DateDropDown from "../atoms/DateDropdown";
import TimeDropDown from "../atoms/TimeDropdown";
import SwitchToggle from "../atoms/SwitchToggle";


interface SearchBarProps {
  label: string;
  locationPlaceholder: string;
  onLocationChange: (val: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  label,
  locationPlaceholder,
  onLocationChange,
}) => {
  return (
   <div className="relative flex flex-col gap-2 sm:gap-3 bg-white p-3 sm:p-4 rounded-xl shadow-md w-full">

  <span className="text-sm sm:text-base font-medium">{label}</span>

  <LocationDropdown onChange={onLocationChange} placeholder={locationPlaceholder} />

  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full items-stretch sm:items-center">
    <div className="w-full sm:flex-1">
      <DateDropDown />
    </div>
    <div className="w-full sm:w-auto flex justify-center">
      <SwitchToggle />
    </div>
    <div className="w-full sm:flex-1">
      <TimeDropDown />
    </div>
  </div>
</div>

  );
};

export default SearchBar;
