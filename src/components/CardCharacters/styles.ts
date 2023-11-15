import styled from "styled-components";

export const Container = styled.li`
  min-width: 300px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  border: 1px solid #541b1b;
  border-radius: 8px;
  transition: transform 0.3s;
  z-index: 1;

  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.light[500]};
  font-size: 18px;
  font-weight: bold;
  margin-top: 12px;
`;
