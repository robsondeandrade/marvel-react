import { IData } from "@/services/marvelCharacterServices/types";

export type HeroCharacter = {
  id: number;
  name: string;
};
export type TCharacterStore = {
  characters: IData | null;
  selectCharacter: IMarvelCharacter[];
  loading: boolean;
  error: boolean;
  currentPage: number;
  itemsPerPage: number;

  getCharactersByNameStartsWith: (
    nameStartsWith: string,
    offset: number,
    itemsPerPage: number
  ) => Promise<void>;
  getCharactersByName: (name: string) => Promise<void>;
  getAllCharacters: (offset: number, itemsPerPage: number) => Promise<void>;
  setCurrentPage: (page: number) => void;
  setItemsPerPage: (value: number) => void;
};
