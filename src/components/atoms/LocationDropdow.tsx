interface LocationDropdownProps {
  onChange?: (value: string) => void;
  placeholder?: string;
}

const LocationDropdown: React.FC<LocationDropdownProps> = ({
  onChange,
  placeholder = "Select location",
}) => {
  return (
    <select
      onChange={(e) => onChange?.(e.target.value)}
      className="border border-gray-300 rounded-md p-2 text-sm w-full"
    >
      <option value="">{placeholder}</option>
      <option value="Lagos">Lagos</option>
      <option value="Abuja">Abuja</option>
      <option value="Port Harcourt">Port Harcourt</option>
      <option value="Ibadan">Ibadan</option>
    </select>
  );
};

export default LocationDropdown;
