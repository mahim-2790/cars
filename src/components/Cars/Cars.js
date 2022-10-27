import React from "react";
import { useSelector } from "react-redux";
import cars from "../../assets/cars.json";
import CarsItem from "./CarsItem";

const Cars = () => {
  const filters = useSelector((state) => state.filters);
  const { cars: fCars, cities, colors, search } = filters;

  return (
    <div className="col-span-4 md:col-span-3">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
        {cars
          //filtering on basis of cars
          .filter((car) =>
            car.cars.some((ele) =>
              fCars.length > 0 ? fCars.includes(ele) : true
            )
          )
          //filtering on basis of cities
          .filter((car) =>
            car.city.some((ele) =>
              cities.length > 0 ? cities.includes(ele) : true
            )
          )
          //filtering on basis of colors
          .filter((car) =>
            car.color.some((ele) =>
              colors.length > 0 ? colors.includes(ele) : true
            )
          )
          .filter((car) => car.name.toLocaleLowerCase().includes(search))
          .map((car) => (
            <CarsItem car={car} />
          ))}
      </div>
    </div>
  );
};

export default Cars;
