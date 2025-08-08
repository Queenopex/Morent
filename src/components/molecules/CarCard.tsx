import type Car from '../../types/car.type';
import React, { useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { BsFuelPump } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';
import { HiOutlineUserGroup } from 'react-icons/hi2';



interface CarCardProps {
  car: Car;
  onLike?: () => void;
}





const CarCard: React.FC<CarCardProps> = ({ car, onLike }) => {
  const [liked, setLiked] = useState(car.liked);

  const handleLike = () => {
    setLiked((prev) => !prev);
    if (onLike) onLike();
  };

  return (
    <div className="w-full h-96 max-w-sm bg-white shadow-md rounded-xl overflow-hidden relative p-4 hover:shadow-lg transition-shadow">
      {/* Like Button */}
      <button
        onClick={handleLike}
        className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
      >
        <FiHeart
          size={20}
          className={`transition-colors ${
            liked ? 'text-red-500 fill-red-500' : ''
          }`}
          fill={liked ? '#ef4444' : 'none'}
        />
      </button>

      {/* Image */}
      <div className="flex justify-center h-30 mt-18 mb-20">
        <img src={car.image} alt={car.name} className="object-contain h-full" />
      </div>

      {/* Name + Type */}
      <h3 className="absolute top-4 left-4 text-sm font-semibold text-gray-800">{car.name}</h3>
      <p className="absolute top-10 left-4 text-xs text-gray-500 mb-4">{car.type}</p>

      {/* Specs */}
      <div className="grid grid-cols-3 gap-2 text-xs text-gray-600 mb-4">
        <div className="flex items-center gap-1">
          <BsFuelPump size={14} /> {car.fuel}
        </div>
        <div className="flex items-center gap-1">
          <IoSettingsOutline size={14} /> {car.gear}
        </div>
        
        <div className="flex items-center gap-1">
          <HiOutlineUserGroup size={14} /> {car.capacity} people
        </div>
        
      </div>

      {/* Pricing and Button */}
      <div className="flex justify-between items-center">
        <p className="text-blue-500 font-bold text-sm">
          ${car.pricePerDay}
          <span className="text-xs font-normal text-gray-500">/day</span>
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-xs">
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default CarCard;
