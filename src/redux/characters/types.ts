import { Gender, Status } from "../filter/types";

export type Origin = {
  name: string;
  url: string;
};

type Location = {
  name: string;
  url: string;
};

export type Character = {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
};
export type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export interface CharactersSliceState {
  items: Character[];
  info: Info;
}
