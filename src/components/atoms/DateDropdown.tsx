

const DateDropdown: React.FC = () => {
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date.toISOString().split("T")[0];
  });

  return (
    <select
      className="border border-gray-300 rounded-md p-2 text-sm w-full"
      defaultValue=""
    >
      <option value="" disabled>
        Select your Date
      </option>
      {dates.map((d) => (
        <option key={d} value={d} className="text-sm px-2">
          {d}
        </option>
      ))}
    </select>
  );
};

export default DateDropdown;
