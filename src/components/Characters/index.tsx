import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CardCharacters } from "../CardCharacters";
import ModalHero from "../ModalHero";
import { useHeroCharacterStore } from "@/stores/UseHeroCharacterStore/useHeroCharacterStore";
import { IMarvelCharacter } from "@/services/marvelCharacterServices/types";
import { LoadingOverlay } from "../Loading/LoadingOverlay";
import * as S from "./styles";

export const Characters = () => {
  const location = useLocation();
  const [openModals, setOpenModals] = useState<{ [key: number]: boolean }>({});
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");

  const {
    loading,
    characters,
    getAllCharacters,
    fetchMoreCharacterData,
    getCharactersByName,
    getCharactersWithOffset,
    getCharactersByNameStartsWith,
  } = useHeroCharacterStore();

  useEffect(() => {
    if (name) {
      getCharactersByNameStartsWith(`${name}`);
    } else {
      getAllCharacters();
    }
  }, [name]);

  const handleMoreCharacter = useCallback(async () => {
    const offset = characters.length;

    try {
      if (name) {
        await fetchMoreCharacterData(name, offset);
      } else {
        await getCharactersWithOffset(offset);
      }
    } catch (err) {
      console.error(err);
    }
  }, [characters, name]);

  const openModal = async (character: IMarvelCharacter) => {
    await getCharactersByName(character.name);
    setOpenModals({ ...openModals, [character.id]: true });
  };

  const closeModal = (characterId: number) => {
    setOpenModals({ ...openModals, [characterId]: false });
  };

  if (!characters.length && loading) {
    return <LoadingOverlay />;
  }

  return (
    <>
      <S.Container>
        <S.Ul>
          {characters?.length >= 1 ? (
            characters.map((character) => (
              <div key={character.id}>
                <CardCharacters
                  character={character}
                  openModal={() => openModal(character)}
                />
                {openModals[character.id] && (
                  <ModalHero
                    isOpen={openModals[character.id]}
                    onClose={() => closeModal(character.id)}
                  />
                )}
              </div>
            ))
          ) : (
            <S.H1> Personagem não encontrado </S.H1>
          )}
        </S.Ul>

        <S.Button onClick={handleMoreCharacter}>Mais</S.Button>
      </S.Container>
    </>
  );
};
