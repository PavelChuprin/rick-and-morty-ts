import styled from "styled-components";

export const Header = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 20px 0;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;

  @media (max-width: 645px) {
    flex-direction: column;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
    margin-right: 15px;
  }
`;

export const Title = styled.h1`
  color: #181818;
  font-size: 24px;
  letter-spacing: 1%;
  text-transform: uppercase;
  font-weight: 800;
`;
