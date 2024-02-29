import React from "react";

import Item from "../Item";
import { Skeleton } from "./Skeleton";
import { Character } from "../../redux/characters/types";

import * as S from "./styles";

type ItemsProps = {
  items: Character[];
  isLoading: boolean;
};

export const Items: React.FC<ItemsProps> = ({ items, isLoading }) => {
  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const characters = items.map((item) => <Item key={item.id} {...item} />);

  return (
    <S.BlockItems>
      <S.Items>{isLoading ? skeletons : characters}</S.Items>
    </S.BlockItems>
  );
};
