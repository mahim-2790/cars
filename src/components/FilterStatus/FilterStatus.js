import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../features/filter/filterSlice";
import FilterItem from "./FilterItem";

const FilterStatus = () => {
  const filters = useSelector((state) => state.filters);
  const { cars, cities, colors } = filters;
  const [allArr, setAllArr] = useState([]);
  const dispatch = useDispatch();

  const createArr = (attribute, givenArr) => {
    let temp = [];
    givenArr.forEach((ele) => {
      // console.log(ele);
      const obj = {
        attribute,
        value: ele,
      };
      // console.log({ obj });
      temp.push(obj);
    });
    return temp;
  };

  useEffect(() => {
    const carsArr = createArr("cars", cars);
    const citiesArr = createArr("cities", cities);
    const colorsArr = createArr("colors", colors);
    const filtersArr = carsArr.concat(citiesArr, colorsArr);
    setAllArr(filtersArr);
  }, [cars, cities, colors]);

  const handleReset = (e) => {
    dispatch(reset());
  };

  return (
    <div className="m-5 flex flex-wrap md:hidden">
      {allArr.map((item) => (
        <FilterItem item={item} />
      ))}
      {allArr.length > 0 && (
        <button
          className="px-2 mx-2 bg-slate-200 rounded-full"
          onClick={handleReset}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default FilterStatus;
