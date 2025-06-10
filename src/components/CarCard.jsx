import React from 'react'
import { Link } from 'react-router-dom';

const CarCard = ({car}) => {
  return (
    <div className="group relative w-96 md:w-80">
      <img
        alt={car.make}
        src={car.image}
        className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
      />
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link to={`/carDescription/${car._id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {car.model}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{car.make}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${car.price}</p>
      </div>
    </div>
  );
}

export default CarCard