import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CardCharacters } from "../CardCharacters";
import ModalHero from "../ModalHero";
import { useHeroCharacterStore } from "@/stores/UseHeroCharacterStore/useHeroCharacterStore";
import { IMarvelCharacter } from "@/services/marvelCharacterServices/types";
import { LoadingOverlay } from "../Loading/LoadingOverlay";
import { CustomPagination } from "../pagination";
import { calculateTotalPages } from "@/utils/pagination";
import * as S from "./styles";

export const Characters = () => {
  const location = useLocation();
  const [openModals, setOpenModals] = useState<{ [key: number]: boolean }>({});
  const searchParams = new URLSearchParams(location.search);
  const searchedName = searchParams.get("name");

  const {
    loading,
    characters,
    currentPage,
    itemsPerPage,
    setCurrentPage,
    setItemsPerPage,
    getAllCharacters,
    getCharactersByName,
    getCharactersByNameStartsWith,
  } = useHeroCharacterStore();

  const totalPages = calculateTotalPages(characters?.total, characters?.limit);

  useEffect(() => {
    fetchCharacters();
  }, [currentPage, itemsPerPage, searchedName]);

  const fetchCharacters = useCallback(async () => {
    try {
      const offset = (currentPage - 1) * itemsPerPage;

      await (searchedName
        ? getCharactersByNameStartsWith(searchedName, offset, itemsPerPage)
        : getAllCharacters(offset, itemsPerPage));
    } catch (error) {
      console.error(error);
    }
  }, [currentPage, itemsPerPage, getAllCharacters, searchedName]);

  const openModal = async (character: IMarvelCharacter) => {
    await getCharactersByName(character.name);
    setOpenModals((prev) => ({ ...prev, [character.id]: true }));
  };

  const closeModal = (characterId: number) => {
    setOpenModals((prev) => ({ ...prev, [characterId]: false }));
  };

  const handleSelectPerPage = (value: number) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      {loading && <LoadingOverlay />}
      <S.Container>
        <S.Ul>
          {characters && characters.results?.length >= 1 ? (
            characters.results.map((character) => (
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

        {characters && characters.results?.length && (
          <CustomPagination
            currentPage={currentPage}
            selected={itemsPerPage}
            handlePageChange={handlePageChange}
            handleSelectPerPage={handleSelectPerPage}
            totalPages={totalPages}
          />
        )}
      </S.Container>
    </>
  );
};
