import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";

import { setCurrentPage } from "../../redux/filter/slice";
import { selectFiltersData } from "../../redux/filter/selectors";
import { selectInfoData } from "../../redux/characters/selectors";

import * as S from "./styles";

export const Pagination: React.FC = () => {
  const dispatch = useAppDispatch();

  const { pages } = useSelector(selectInfoData);
  const { currentPage } = useSelector(selectFiltersData);

  const handlePrevPageClick = () => {
    dispatch(setCurrentPage(currentPage - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextPageClick = () => {
    dispatch(setCurrentPage(currentPage + 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <S.Pagination>
      <S.Button onClick={handlePrevPageClick} disabled={currentPage === 1}>
        {"<"}
      </S.Button>
      <S.Navigation>
        {currentPage} / {pages}
      </S.Navigation>
      <S.Button onClick={handleNextPageClick} disabled={currentPage === pages}>
        {">"}
      </S.Button>
    </S.Pagination>
  );
};
