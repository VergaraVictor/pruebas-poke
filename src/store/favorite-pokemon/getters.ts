import { GetterTree } from 'vuex';
import { RootState } from '@/store';
import { FavoritePokemonState, PokemonDetails } from './state';

export const getters: GetterTree<FavoritePokemonState, RootState> = {
  favoritePokemons: (state) => state.favoritePokemons,
  isFavorite: (state) => (pokemon: PokemonDetails) => state.favoritePokemons.some(fav => fav.name === pokemon.name),
  selectedPokemon: (state) => state.selectedPokemon,
  loading: (state) => state.loading,
};