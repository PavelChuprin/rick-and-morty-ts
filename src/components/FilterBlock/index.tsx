import React from "react";
import { useAppDispatch } from "../../redux/store";
import { SubmitHandler, useForm } from "react-hook-form";

import { Filter } from "../../redux/filter/types";
import { GENDER, STATUS } from "../../utils/constants";
import { setCurrentPage, setFilters } from "../../redux/filter/slice";

import * as S from "./styles";

export const FilterBlock: React.FC = () => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm<Filter>();

  const onSubmit: SubmitHandler<Filter> = (data) => {
    dispatch(setFilters(data));
    dispatch(setCurrentPage(1));
  };

  return (
    <S.Filters>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Input placeholder="Name" {...register("name")} />

        <S.Input placeholder="Species" {...register("species")} />

        <S.Input placeholder="Type" {...register("type")} />

        <S.Select {...register("gender")}>
          {GENDER.map((gender) => {
            return (
              <option key={gender} value={gender}>
                {gender}
              </option>
            );
          })}
        </S.Select>

        <S.Select {...register("status")}>
          {STATUS.map((status) => {
            return (
              <option key={status} value={status}>
                {status}
              </option>
            );
          })}
        </S.Select>

        <S.Button type="submit">Search</S.Button>
      </form>
    </S.Filters>
  );
};
