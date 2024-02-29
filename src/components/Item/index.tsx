import React from "react";

import { Origin } from "../../redux/characters/types";
import { Gender, Status } from "../../redux/filter/types";
import { formatDate, formatName } from "../../utils/utils";

import * as S from "./styles";

type ItemProps = {
  image: string;
  name: string;
  status: Status;
  gender: Gender;
  species: string;
  type: string;
  created: string;
  origin: Origin;
};

const Item: React.FC<ItemProps> = ({
  image,
  name,
  status,
  gender,
  species,
  type,
  created,
  origin,
}) => {
  const [open, setOpen] = React.useState(false);

  const Popup = () => {
    return (
      <S.Popup>
        <S.Property>
          <span>Name:</span> {name}
        </S.Property>
        <S.Property>
          <span>Gender:</span> {gender}
        </S.Property>
        <S.Property>
          <span>Status:</span> {status}
        </S.Property>
        <S.Property>
          <span>Species:</span> {species}
        </S.Property>
        <S.Property>
          <span>Type:</span> {type ? type : "unknown"}
        </S.Property>
        <S.Property>
          <span>Created:</span> {formatDate(created)}
        </S.Property>
        <S.Property>
          <span>Origin:</span> {origin.name}
        </S.Property>
      </S.Popup>
    );
  };

  return (
    <S.Item>
      <S.Block>
        <img src={image} alt={name} />
        <S.Info>
          <S.Title>{formatName(name)}</S.Title>
          <S.Button onClick={() => setOpen(!open)}>
            <img src={open ? "/arrow-down.png" : "/arrow-up.png"} alt="arrow" />
          </S.Button>
        </S.Info>
      </S.Block>
      {open && <Popup />}
    </S.Item>
  );
};

export default Item;
