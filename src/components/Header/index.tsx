import React from "react";
import * as S from "./styles";

export const Header: React.FC = () => {
  return (
    <S.Header>
      <S.Container>
        <S.Logo>
          <img src="./logo.png" alt="logo" />
          <S.Title>Rick and Morty</S.Title>
        </S.Logo>
      </S.Container>
    </S.Header>
  );
};
