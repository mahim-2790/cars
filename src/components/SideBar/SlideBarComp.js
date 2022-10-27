import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleProperties } from "../../features/filter/filterSlice";

const SlideBarComp = ({ ele, comp }) => {
  // const [isChecked, setIsChecked] = useState(false);
  const filters = useSelector((state) => state.filters);
  const { cars, colors, cities } = filters;
  const dispatch = useDispatch();

  const handleChecked = (e) => {
    if (comp === "city") {
      if (cities.includes(e.target.value)) {
        dispatch(
          toggleProperties({
            status: "remove",
            attribute: "cities",
            element: e.target.value,
          })
        );
      } else {
        dispatch(
          toggleProperties({
            status: "add",
            attribute: "cities",
            element: e.target.value,
          })
        );
      }
    } else if (comp === "cars") {
      if (cars.includes(e.target.value)) {
        dispatch(
          toggleProperties({
            status: "remove",
            attribute: "cars",
            element: e.target.value,
          })
        );
      } else {
        dispatch(
          toggleProperties({
            status: "add",
            attribute: "cars",
            element: e.target.value,
          })
        );
      }
    } else if (comp === "colors") {
      if (colors.includes(e.target.value)) {
        dispatch(
          toggleProperties({
            status: "remove",
            attribute: "colors",
            element: e.target.value,
          })
        );
      } else {
        dispatch(
          toggleProperties({
            status: "add",
            attribute: "colors",
            element: e.target.value,
          })
        );
      }
    }
  };

  const isChecked = () => {
    if (comp === "cars") {
      return cars.includes(ele);
    } else if (comp === "city") {
      return cities.includes(ele);
    } else if (comp === "color") {
      return colors.includes(ele);
    }
  };

  return (
    <div className="mx-5 my-2">
      <label
        htmlFor={`${comp}-${ele}`}
        className={`cursor-pointer hover:border border-slate-400 px-1 rounded block flex items-center `}
      >
        <input
          type="checkbox"
          name={`${comp}-${ele}`}
          id={`${comp}-${ele}`}
          className={`mr-2 ${
            !isChecked() && "hidden"
          } cursor-pointer hover:inline-block `}
          value={ele}
          onChange={(e) => {
            handleChecked(e);
          }}
          checked={isChecked()}
        />
        {ele}
        {/* {ele} */}
      </label>
    </div>
  );
};

export default SlideBarComp;
