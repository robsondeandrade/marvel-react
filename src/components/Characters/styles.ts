import styled from "styled-components";

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  padding: 3rem 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.dark[900]};
  margin-left: -40px;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3.5rem;
`;

export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.light[200]};
`;

export const Button = styled.button`
  width: 20rem;
  height: 5rem;
  margin: 2rem;
  background-color: ${({ theme }) => theme.colors.red[500]};
  transition: transform 0.3s;

  &:focus {
    outline: none;
  }
  &:hover {
    transform: scale(1.05);
  }
`;
