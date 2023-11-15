import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const Container = styled.div`
  height: 4rem;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  height: 4rem;
  width: 100%;
  top: 0;
  z-index: 999;
  box-shadow: 4px 4px 6px 4px rgba(0, 0, 0, 0.5);
  background: linear-gradient(90deg, #f22a2a 15%, #851111 50%, #3d0404 85%);

  img {
    cursor: pointer;
    padding-left: 10px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5em;
  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const Input = styled.input`
  max-width: 15rem;
  height: 2.5rem;
  padding-left: 8px;
  padding-right: 30px;
  background-color: ${({ theme }) => theme.colors.dark[900]};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.light[200]};
  border: 1px solid transparent;
  box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.2);

  ::placeholder {
    padding: 0.5rem;
  }

  &::-webkit-search-cancel-button,
  &::-webkit-search-clear-button {
    display: none;
  }

  &::-ms-clear {
    display: none;
  }

  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color: ${({ theme }) => theme.colors.light[200]};
`;
