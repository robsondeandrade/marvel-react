import styled, { keyframes } from "styled-components";

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const StyledButton = styled.button`
  border: none;
  outline: none;
  font-size: 16px;
  padding: 20px 30px;
  background-color: ${({ theme }) => theme.colors.red[500]};
  transition: transform 0.3s ease;
  animation: ${pulseAnimation} 2s infinite;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.light[200]};

  &:hover {
    transform: scale(1.1);
    animation: none;
  }

  &:focus {
    outline: none;
  }
`;
