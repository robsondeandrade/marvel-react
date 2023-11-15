import styled from "styled-components";
import { IIsOpen } from "./types";

export const ModalWrapper = styled.div<IIsOpen>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: relative;
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow: auto;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  background: linear-gradient(to bottom, darkred, darkred, #333);

  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: linear-gradient(to bottom, darkred, darkred, #333);
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 1.5rem;
  background: none;
  color: ${({ theme }) => theme.colors.light[200]};
  cursor: pointer;
`;

export const BoxCharacter = styled.div`
  gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.light[200]};

  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoxUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  gap: 1rem;
  width: 50%;
`;

export const List = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.4s;
  cursor: pointer;

  span {
    display: none;
  }
  &:hover {
    transform: scale(2.5);
    color: ${({ theme }) => theme.colors.dark[900]};

    span {
      display: flex;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 400px;
  border-radius: 10px;
  object-fit: cover;
`;

export const Img = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const Name = styled.span`
  font-weight: bold;
  font-size: 1.8rem;
  margin-top: 1rem;
`;

export const Description = styled.span`
  font-size: 1.2rem;
  line-height: 1.5;
  width: 100%;
  max-width: 500px;
`;

export const SpanName = styled.span`
  color: ${({ theme }) => theme.colors.light[300]};
  font-weight: bold;
  font-size: 0.5rem;
`;
