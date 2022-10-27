import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [],
  cities: [],
  colors: [],
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggleProperties: (state, action) => {
      if (action.payload.status === "add") {
        state[action.payload.attribute].push(action.payload.element);
      } else if (action.payload.status === "remove") {
        state[action.payload.attribute] = state[
          action.payload.attribute
        ].filter((ele) => ele !== action.payload.element);
      }
    },
    reset: (state, action) => {
      state.cars = [];
      state.colors = [];
      state.cities = [];
      state.search = "";
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { toggleProperties, reset, setSearch } = filterSlice.actions;
