import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../features/filter/filterSlice";

const Search = () => {
  const filters = useSelector((state) => state.filters);
  const { search } = filters;
  const [input, setInput] = useState(search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearch(input));
  }, [input, dispatch]);

  return (
    <div>
      <form>
        <div className="my-4">
          <input
            className="shadow appearance-none border rounded-full w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="search"
            type="text"
            placeholder="Search..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
