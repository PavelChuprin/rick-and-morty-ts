import { configureStore } from "@reduxjs/toolkit";
import characters from "./characters/slice";
import filter from "./filter/slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    characters,
    filter,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
