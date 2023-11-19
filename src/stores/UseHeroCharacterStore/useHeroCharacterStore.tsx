import { create } from "zustand";
import { TCharacterStore } from "./types";
import { CharacterService } from "../../services/marvelCharacterServices";

const characterService = new CharacterService();

export const useHeroCharacterStore = create<TCharacterStore>((set) => ({
  error: false,
  loading: false,
  characters: null,
  selectCharacter: [],
  currentPage: 1,
  itemsPerPage: 20,

  getCharactersByNameStartsWith: async (
    nameStartsWith,
    offset,
    itemsPerPage
  ) => {
    if (useHeroCharacterStore.getState().loading) {
      return;
    }

    set({ loading: true, error: false });

    try {
      const response = await characterService.getCharactersByNameStartsWith(
        nameStartsWith,
        offset,
        itemsPerPage
      );
      set({ characters: response.data, loading: false });
      return response;
    } catch (error) {
      set({ error: true, loading: false });
    }
  },

  getCharactersByName: async (name: string) => {
    if (useHeroCharacterStore.getState().loading) {
      return;
    }

    set({ loading: true, error: false });

    try {
      const response = await characterService.getCharactersByName(name);
      set({ selectCharacter: response.data.results, loading: false });

      return response;
    } catch (error) {
      set({ error: true, loading: false });
    }
  },

  getAllCharacters: async (offset, itemsPerPage) => {
    if (useHeroCharacterStore.getState().loading) {
      return;
    }

    set({ loading: true, error: false });

    try {
      const response = await characterService.getAllCharacters(
        offset,
        itemsPerPage
      );

      set(() => ({
        characters: response.data,
        loading: false,
      }));

      return response;
    } catch (error) {
      set({ error: true, loading: false });
    }
  },

  setCurrentPage: (page: number) => set({ currentPage: page }),
  setItemsPerPage: (value: number) => set({ itemsPerPage: value }),
}));
