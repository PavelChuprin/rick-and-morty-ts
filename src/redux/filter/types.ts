export enum Status {
  ALIVE = "alive",
  DEAD = "dead",
  UNKNOWN = "unknown",
}

export enum Gender {
  FEMALE = "female",
  MALE = "male",
  GENDERLESS = "genderless",
  UNKNOWN = "unknown",
}

export type Filter = {
  name: string;
  status: Status;
  gender: Gender;
  type: string;
  species: string;
};

export interface FilterSliceState {
  currentPage: number;
  name: string;
  status: Status;
  gender: Gender;
  species: string;
  type: string;
}
