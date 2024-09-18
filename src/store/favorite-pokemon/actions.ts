import { ActionTree } from 'vuex';
import { RootState } from '@/store';
import { FavoritePokemonState, PokemonDetails } from './state';
import axios from 'axios';

export const actions: ActionTree<FavoritePokemonState, RootState> = {
  async fetchPokemons({ commit }) {
    commit('SET_LOADING', true);
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20'); // Asegúrate de limitar la cantidad de resultados si es necesario
      console.log('Fetched pokemons:', response.data.results);
      const pokemons = response.data.results.map((pokemon: any) => ({
        ...pokemon,
        id: pokemon.url.split('/')[6],
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split('/')[6]}.png`
      }));
      commit('SET_FAVORITE_POKEMONS', pokemons);
    } finally {
      commit('SET_LOADING', false);
    }
  },
  async fetchPokemonDetails({ commit }, name: string) {
    commit('SET_LOADING', true);
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      console.log('fetchPokemonDetails:', response.data);
      commit('SET_SELECTED_POKEMON', response.data);
    } finally {
      commit('SET_LOADING', false);
    }
  },
  addFavorite({ commit }, pokemon) {
    commit('ADD_FAVORITE', pokemon);
  },
  removeFavorite({ commit }, pokemon) {
    commit('REMOVE_FAVORITE', pokemon);
  },
};