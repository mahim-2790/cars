import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleProperties } from "../../features/filter/filterSlice";

const FilterItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(
      toggleProperties({
        status: "remove",
        attribute: item.attribute,
        element: item.value,
      })
    );
  };
  return (
    <div className="px-2 cursor-pointer mx-2 bg-slate-200 rounded-full relative">
      <AiFillCloseCircle
        className="absolute -top-2 -right-1"
        color="#eb1d36"
        onClick={handleClick}
      />
      {item.value}
    </div>
  );
};

export default FilterItem;
