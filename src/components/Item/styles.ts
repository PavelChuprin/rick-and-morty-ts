import styled from "styled-components";

export const Item = styled.div`
  max-width: 300px;
  position: relative;
`;

export const Popup = styled.div`
  position: absolute;
  max-width: 300px;
  padding: 10px;
  border-radius: 40px;
  background-color: rgba(0, 0, 0, 0.85);
  top: 395px;
  right: 0;
  z-index: 100;
`;

export const Block = styled.div`
  overflow: hidden;
  border: 1px solid #ccc;
  border-radius: 40px;
  & img {
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h2`
  text-transform: capitalize;
`;

export const Property = styled.h3`
  color: #fff;
  font-weight: 400;
  & span {
    text-transform: uppercase;
    color: #ccc;
  }
`;

export const Button = styled.div`
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 20px #ccc;
  }
  & img {
    width: 20px;
    height: 20px;
  }
`;
