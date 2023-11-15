import { useNavigate } from "react-router-dom";
import { INavigationButtonProps } from "./types";
import * as S from "./styles";

export const NavigationButton = ({ label, to }: INavigationButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return <S.StyledButton onClick={handleClick}>{label}</S.StyledButton>;
};
