import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../JS/actions/carActions';
import CarCard from '../components/CarCard';

const Showroom = () => {

  const dispatch = useDispatch();

  const cars = useSelector((state) => state.carReducer.cars)


  useEffect(() => {
    dispatch(getCars())
  }, [dispatch])
  
  console.log(cars)
  return <div className="min-h-screen flex flex-wrap justify-center gap-10 my-10">
    {cars.map((car) => <CarCard key={car._id} car={car} />)}
  </div>;
}

export default Showroom