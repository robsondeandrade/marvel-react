import API from "@/config/axios";

export class CharacterService {
  async getCharactersByNameStartsWith(nameStartsWith: string) {
    return this.getData(`/characters?nameStartsWith=${nameStartsWith}`);
  }

  async getCharactersByName(name: string) {
    return this.getData(`/characters?name=${name}`);
  }

  async getCharactersWithOffset(offset: number) {
    return this.getData(`/characters`, {
      params: { offset },
    });
  }

  async getAllCharacters() {
    return this.getData(`/characters`);
  }

  async getData(endpoint: string, config = {}) {
    try {
      const response = await API.get(endpoint, config);
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
}
