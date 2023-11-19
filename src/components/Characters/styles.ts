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
  margin-bottom: 2rem;
`;

export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.light[200]};
`;
