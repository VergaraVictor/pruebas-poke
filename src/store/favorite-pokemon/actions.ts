import { ActionTree, Module } from 'vuex';
import { RootState } from '@/store';
import { FavoritePokemonState, PokemonDetails } from './state';
import axios from 'axios';

export const actions: ActionTree<FavoritePokemonState, RootState> = {
  async fetchPokemons({ commit }) {
    commit('SET_LOADING', true);
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40');
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
      commit('SET_SELECTED_POKEMON', response.data);
    } catch (error) {
      console.error('Error fetching Pokemon details:', error);
    } finally {
      commit('SET_LOADING', false);
    }
  },

  async searchPokemonByName({ commit }, name: string) {
    commit('SET_LOADING', true);
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
      
      const pokemon = {
        id: response.data.id,
        name: response.data.name,
        image: response.data.sprites.other['official-artwork'].front_default
      };
      
      commit('SET_FAVORITE_POKEMONS', [pokemon]);
    } catch (error) {
      console.error('Error searching for Pokemon:', error);
    } finally {
      commit('SET_LOADING', false);
    }
  },

};
