import { Gender, Status } from "../redux/filter/types";

export const API_URL: string = "https://rickandmortyapi.com/api/character";

export const STATUS = [Status.ALIVE, Status.DEAD, Status.UNKNOWN];

export const GENDER = [
  Gender.FEMALE,
  Gender.MALE,
  Gender.GENDERLESS,
  Gender.UNKNOWN,
];
