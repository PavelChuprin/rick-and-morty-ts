import styled from "styled-components";

export const BlockItems = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 20px;
  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 760px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
