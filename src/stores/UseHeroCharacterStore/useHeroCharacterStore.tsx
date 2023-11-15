import { create } from "zustand";
import { TCharacterStore } from "./types";
import { CharacterService } from "../../services/marvelCharacterServices";

const characterService = new CharacterService();

export const useHeroCharacterStore = create<TCharacterStore>((set) => ({
  error: false,
  loading: false,
  characters: [],
  selectCharacter: [],
  isFetchingMoreCharacter: false,
  isFetchingAllCharacters: false,
  isFetchingCharactersByName: false,
  isFetchingCharactersWithOffset: false,
  isFetchingCharactersByNameStartsWith: false,

  getCharactersByNameStartsWith: async (nameStartsWith: string) => {
    if (useHeroCharacterStore.getState().isFetchingCharactersByNameStartsWith) {
      return;
    }

    set({
      loading: true,
      error: false,
      isFetchingCharactersByNameStartsWith: true,
    });

    try {
      const response = await characterService.getCharactersByNameStartsWith(
        nameStartsWith
      );
      set({ characters: response.data.results });
      return response;
    } catch (error) {
      set({ error: true });
    } finally {
      set({
        loading: false,
        isFetchingCharactersByNameStartsWith: false,
      });
    }
  },

  getCharactersByName: async (name: string) => {
    if (useHeroCharacterStore.getState().isFetchingCharactersByName) {
      return;
    }

    set({ loading: true, error: false, isFetchingCharactersByName: true });

    try {
      const response = await characterService.getCharactersByName(name);
      set({ selectCharacter: response.data.results });
      return response;
    } catch (error) {
      set({ error: true });
    } finally {
      set({
        loading: false,
        isFetchingCharactersByName: false,
      });
    }
  },

  getCharactersWithOffset: async (offset: number) => {
    if (useHeroCharacterStore.getState().isFetchingCharactersWithOffset) {
      return;
    }

    set({ loading: true, error: false, isFetchingCharactersWithOffset: true });

    try {
      const response = await characterService.getCharactersWithOffset(offset);

      set((state) => ({
        characters: [...state.characters, ...response.data.results],
      }));
      return response;
    } catch (error) {
      set({ error: true });
    } finally {
      set({
        loading: false,
        isFetchingCharactersWithOffset: false,
      });
    }
  },

  getAllCharacters: async () => {
    if (useHeroCharacterStore.getState().isFetchingAllCharacters) {
      return;
    }

    set({ loading: true, error: false, isFetchingAllCharacters: true });

    try {
      const response = await characterService.getAllCharacters();
      set({ characters: response.data.results });
      return response;
    } catch (error) {
      set({ error: true });
    } finally {
      set({
        loading: false,
        isFetchingAllCharacters: false,
      });
    }
  },

  fetchMoreCharacterData: async (hero: string, offset: number) => {
    if (useHeroCharacterStore.getState().isFetchingMoreCharacter) {
      return;
    }

    set({ loading: true, error: false, isFetchingMoreCharacter: true });

    try {
      const response = await characterService.fetchMoreCharacterData(
        hero,
        offset
      );
      set({ characters: response.data.results });
      return response;
    } catch (error) {
      set({ error: true });
    } finally {
      set({
        loading: false,
        isFetchingMoreCharacter: false,
      });
    }
  },
}));
