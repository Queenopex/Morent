const TimeDropdown: React.FC = () => {
  const times = Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}:00`);

  return (
    <select className="border border-gray-300 rounded-md p-2 text-sm w-full">
      {times.map((t) => (
        <option key={t} value={t}>
          {t}
        </option>
      ))}
    </select>
  );
};

export default TimeDropdown;
