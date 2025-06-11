import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../JS/actions/carActions';
import CarCard from '../components/CarCard';
import AddNewCar from '../components/AddNewCar';

const Showroom = () => {

  const dispatch = useDispatch();

  const cars = useSelector((state) => state.carReducer.cars)

    const isLoading = useSelector((state) => state.carReducer.load);


  useEffect(() => {
    dispatch(getCars())
  }, [dispatch])
  
  console.log(cars)
  return (
    <div className="min-h-screen">
      {!isLoading && (
        <>
          <div className="flex justify-center my-4 md:justify-start md:px-32">
            <AddNewCar />
          </div>
          <div className="min-h-screen flex flex-wrap justify-center gap-10 my-10">
            {cars.map((car) => (
              <CarCard key={car._id} car={car} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Showroom