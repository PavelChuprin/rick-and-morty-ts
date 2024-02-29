import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Filter, FilterSliceState, Gender, Status } from "./types";

const initialState: FilterSliceState = {
  currentPage: 1,
  name: "",
  status: Status.ALIVE, // alive, dead or unknown
  gender: Gender.FEMALE, // female, male, genderless or unknown
  species: "",
  type: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<Filter>) {
      state.name = action.payload.name;
      state.status = action.payload.status;
      state.gender = action.payload.gender;
      state.type = action.payload.type;
      state.species = action.payload.species;
    },
  },
});

export const { setCurrentPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
