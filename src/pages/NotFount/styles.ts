import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackgroundContainer = styled.div`
  background-image: url("image/spider-man.jpg");
  background-size: cover;
  background-position: right center;
  height: calc(100vh - 4rem);
  width: 100vw;
  overflow: hidden;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.light[200]};

  @media (max-width: 800px) {
    align-items: flex-start;
    justify-content: flex-start;
  }

  @media (max-width: 580px) {
    background: ${({ theme }) => theme.colors.dark[900]};
    justify-content: center;
    align-items: center;
  }
`;

export const Box = styled.div`
  height: 100%;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: ${({ theme }) => theme.colors.light[200]};

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 0 20px;
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.red[100]};
  font-weight: bold;
  text-decoration: none;
`;
