import React, { useState } from 'react';
import dummyCars from '../atoms/dummyCars';
import CarCard from '../molecules/CarCard';
import type Car from '../../types/car.type';

const CarList: React.FC = () => {
  const [cars, setCars] = useState<Car[]>(dummyCars);

  const toggleLike = (id: string) => {
    setCars(prevCars =>
      prevCars.map(car =>
        car.id === id ? { ...car, liked: !car.liked } : car
      )
    );
  };


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-10">
      {cars.map(car => (
        <CarCard key={car.id} car={car} onLike={() => toggleLike(car.id)} />
      ))}
    </div>
  );
};

export default CarList;
