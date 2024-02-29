import styled from "styled-components";

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 40px;
  height: 40px;
  font-size: 24px;
  border: 0px;
  border-radius: 50%;
  color: #ffffff;
  background-color: #4f4f4f;
  &:active {
    background-color: #ccc;
  }
  &:disabled {
    cursor: default;
    background-color: #838383;
  }
`;

export const Navigation = styled.span`
  font-size: 32px;
  margin: 0 20px;
`;
