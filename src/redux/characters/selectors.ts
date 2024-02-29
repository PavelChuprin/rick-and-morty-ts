import { RootState } from "../store";

export const selectCharactersData = (state: RootState) =>
  state.characters.items;
export const selectInfoData = (state: RootState) => state.characters.info;
