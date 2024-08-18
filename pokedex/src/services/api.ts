import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export default api;

export interface PokemonListResponse {
  result: { name: string; url: string }[];
}

export const getPokemons = async (
  limit = 10,
  offset = 0
): Promise<PokemonListResponse> => {
  const response = await api.get<PokemonListResponse>(
    `/pokemon?limit=${limit}&offset=${offset}`
  );
  return response.data;
};

export const getPokemonsDetails = async ( name: string ): Promise<any> => {
  const response = await api.get(`/pokemon/${name}`);
  return response.data;
};

