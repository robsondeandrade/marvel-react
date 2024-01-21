import styled from "styled-components";

export const Container = styled.div`
  min-width: 100vw;
  display: flex;
  padding: 3rem 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.dark[900]};
  margin-left: -40px;
`;

export const CharacterList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3.5rem;
  margin-bottom: 2rem;
`;

export const ErrorMessage = styled.h2`
  color: ${({ theme }) => theme.colors.light[200]};
`;
