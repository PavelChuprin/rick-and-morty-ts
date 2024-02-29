import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CharactersSliceState, Info, Character } from "./types";

const initialState: CharactersSliceState = {
  items: [],
  info: { count: 0, pages: 0, next: null, prev: null },
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Character[]>) {
      state.items = action.payload;
    },
    setInfo(state, action: PayloadAction<Info>) {
      state.info = action.payload;
    },
  },
});

export const { setItems, setInfo } = charactersSlice.actions;

export default charactersSlice.reducer;
