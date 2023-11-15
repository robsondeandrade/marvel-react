import * as S from "./styles";
import { ICardCharactersProps } from "./types";

export const CardCharacters = ({
  character,
  openModal,
}: ICardCharactersProps) => {
  return (
    <S.Container onClick={openModal}>
      <S.Image
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
      />
      <S.Span>{character.name}</S.Span>
    </S.Container>
  );
};
