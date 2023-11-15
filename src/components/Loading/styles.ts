import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark[900]};
  backdrop-filter: blur(2px);
  z-index: 1000;
`;

export const Spinner = styled.div`
  border: 5px solid rgba(255, 255, 255, 0.1);
  border-top: 5px solid #fff;
  border-radius: 50%;
  width: 180px;
  height: 180px;
  animation: ${spin} 1.3s linear infinite;
`;