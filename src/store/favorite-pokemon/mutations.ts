import { MutationTree } from 'vuex';
import { FavoritePokemonState, PokemonDetails } from './state';

export const mutations: MutationTree<FavoritePokemonState> = {
  SET_FAVORITE_POKEMONS(state, pokemons: PokemonDetails[]) {
    state.favoritePokemons = pokemons;
  },
  SET_LOADING(state, isLoading: boolean) {
    state.loading = isLoading;
  },
  ADD_FAVORITE(state, pokemon: PokemonDetails) {
    if (!state.favoritePokemons.some(fav => fav.name === pokemon.name)) {
      state.favoritePokemons.push(pokemon);
    }
  },
  REMOVE_FAVORITE(state, pokemon: PokemonDetails) {
    state.favoritePokemons = state.favoritePokemons.filter(fav => fav.name !== pokemon.name);
  },
  SET_SELECTED_POKEMON(state, pokemon: any) { // Asegúrate de que el tipo sea correcto
    state.selectedPokemon = pokemon;
  }
};