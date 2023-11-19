import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.light[200]};
  margin-top: 1rem;
`;

export const PageButton = styled.button<{
  disabled?: boolean;
  active?: boolean;
}>`
  background-color: ${({ active, theme }) =>
    active ? theme.colors.red[300] : "transparent"};
  color: ${({ active, theme }) =>
    active ? theme.colors.light[200] : theme.colors.dark[300]};
  padding: 0 0.5rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ active, theme }) =>
      active ? theme.colors.red[300] : theme.colors.red[500]};
  }
`;

export const PageSelect = styled.select`
  margin-left: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
`;
