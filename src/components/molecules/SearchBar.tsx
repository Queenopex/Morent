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
    <div className="relative flex flex-col gap-2 bg-white p-4 rounded-xl shadow-md w-full max-w-xl">

      <span>{label} </span>
      <LocationDropdown onChange={onLocationChange} placeholder={locationPlaceholder} />

      <div className="flex gap-2">
        <DateDropDown />
        <SwitchToggle />
        <TimeDropDown />
      </div>
      
    </div>
  );
};

export default SearchBar;
