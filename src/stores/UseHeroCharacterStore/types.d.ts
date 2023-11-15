import { IMarvelCharacter } from "@/services/marvelCharacterServices/types";

export type HeroCharacter = {
  id: number;
  name: string;
};

export type TCharacterStore = {
  characters: IMarvelCharacter[];
  selectCharacter: IMarvelCharacter[];
  loading: boolean;
  error: boolean;
  isFetchingCharactersByNameStartsWith: boolean;
  isFetchingCharactersByName: boolean;
  isFetchingCharactersWithOffset: boolean; // Correção aqui
  isFetchingAllCharacters: boolean;
  isFetchingMoreCharacter: boolean;

  getCharactersByNameStartsWith: (nameStartsWith: string) => Promise<void>;
  getCharactersByName: (name: string) => Promise<void>;
  getCharactersWithOffset: (offset: number) => Promise<void>;
  getAllCharacters: () => Promise<void>;
  fetchMoreCharacterData: (hero: string, offset: number) => Promise<void>;
};
