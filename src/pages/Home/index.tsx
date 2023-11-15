import { NavigationButton } from "@/components/NavigationButton";
import * as S from "./styles";

export const HomePage = () => {
  return (
    <S.BackgroundContainer>
      <NavigationButton to="/personagens" label="Ver todos os personagens" />
    </S.BackgroundContainer>
  );
};
