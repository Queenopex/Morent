import React from 'react';

interface CarFilterTabsProps {
  filters: string[];
  activeTab: string;
  onChange: (tab: string) => void;
}

const CarFilterTabs: React.FC<CarFilterTabsProps> = ({ filters, activeTab, onChange }) => {
  return (
    <div className="flex gap-4 text-sm font-medium">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={`px-3 py-1 rounded ${
            filter === activeTab ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default CarFilterTabs;
