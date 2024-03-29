import { useHeroCharacterStore } from "@/stores/UseHeroCharacterStore/useHeroCharacterStore";
import { IParamsComponent } from "./types";
import { FaTimes } from "react-icons/fa";
import * as S from "./styles";

export default function ModalHero({ isOpen, onClose }: IParamsComponent) {
  const { selectCharacter } = useHeroCharacterStore();

  const character = selectCharacter[0];

  const handleWrapperClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const targetElement = event.target as Element;

    if (!targetElement.closest(`${S.ModalContent}`)) {
      onClose();
    }
  };

  return (
    <S.ModalWrapper isOpen={isOpen} onClick={handleWrapperClick}>
      <S.ModalContent>
        <S.CloseButton onClick={onClose}>
          <FaTimes />
        </S.CloseButton>{" "}
        {character && (
          <S.BoxCharacter>
            <S.Image
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            />
            <S.Box>
              <S.Name>{character.name}</S.Name>
              <S.Description>
                {character.description || (
                  <>
                    Desculpe, não temos uma descrição para{" "}
                    <strong>{character.name}</strong>.
                  </>
                )}
              </S.Description>
            </S.Box>
          </S.BoxCharacter>
        )}
      </S.ModalContent>
    </S.ModalWrapper>
  );
}
