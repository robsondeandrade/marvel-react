import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const {
    loading,
    characters,
    getAllCharacters,
    getCharactersByName,
    getCharactersByNameStartsWith,
  } = useHeroCharacterStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await (name ? getCharactersByNameStartsWith(name) : getAllCharacters());
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [name, getCharactersByNameStartsWith, getAllCharacters]);

  const handleMoreCharacter = useCallback(async () => {
    try {
      if (name) {
        navigate(`/personagens`);
      } else {
        await getAllCharacters(characters.length);
      }
    } catch (err) {
      console.error(err);
    }
  }, [characters.length, getAllCharacters, name]);

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

        <S.Button onClick={handleMoreCharacter}>{name ? "Voltar" : "Mais"}</S.Button>
      </S.Container>
    </>
  );
};
