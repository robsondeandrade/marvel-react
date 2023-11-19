import API from "@/config/axios";

export class CharacterService {
  async getCharactersByNameStartsWith(
    nameStartsWith: string,
    offset = 0,
    limit = 10
  ) {
    const params = {
      offset,
      limit,
    };
    return this.getData(`/characters?nameStartsWith=${nameStartsWith}`, {
      params,
    });
  }

  async getCharactersByName(name: string) {
    return this.getData(`/characters?name=${name}`);
  }

  async getAllCharacters(offset = 0, limit = 10) {
    const params = {
      offset,
      limit,
    };

    return this.getData(`/characters`, { params });
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
