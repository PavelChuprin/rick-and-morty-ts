import styled from "styled-components";

export const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;
  border-bottom: 1px solid #ccc;
`;

export const Input = styled.input`
  width: 230px;
  box-sizing: border-box;
  font-size: 18px;
  background-color: #f9f9f9;
  padding: 13px 30px;
  border-radius: 30px;
  margin-right: 10px;
  margin-top: 10px;
  font-family: "Anta", Roboto, system-ui, Tahoma, sans-serif;
  transition: background-color 0.1s ease-in-out;

  &:active {
    background-color: #ccc;
    color: #fff;
  }

  &::placeholder {
    text-transform: uppercase;
  }

  @media (max-width: 760px) {
    width: 100%;
  }
`;

export const Select = styled.select`
  font-size: 18px;
  font-family: "Anta", Roboto, system-ui, Tahoma, sans-serif;
  background-color: #f9f9f9;
  padding: 13px 30px;
  border-radius: 30px;
  text-transform: uppercase;
  margin-right: 10px;
  margin-top: 10px;
  transition: background-color 0.1s ease-in-out;
  appearance: none;
  background: url(./arrow-down.png) no-repeat right;
  background-size: 20px;
  background-position-x: calc(100% - 10px);

  &:hover {
    opacity: 0.8;
  }

  & option {
    text-transform: uppercase;
    font-weight: 300;
  }

  @media (max-width: 760px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  padding: 15px 50px;
  margin: 10px 0;
  font-size: 16px;
  font-weight: 500;
  background-color: #4f4f4f;
  border: 0px;
  border-radius: 30px;
  color: #fff;
  font-family: "Anta", Roboto, system-ui, Tahoma, sans-serif;
  transition: opacity 0.3s ease-out;
  &:disabled {
    opacity: 0.6;
  }
  &:hover {
    opacity: 0.8;
  }
  &:active {
    background-color: #ccc;
    color: #4f4f4f;
  }

  @media (max-width: 760px) {
    width: 100%;
  }
`;
