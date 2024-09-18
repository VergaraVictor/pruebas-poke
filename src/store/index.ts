import { createStore } from 'vuex';
import favoritePokemonModule from './favorite-pokemon';
import { FavoritePokemonState } from './favorite-pokemon/state';

export interface RootState {
  favoritePokemon: FavoritePokemonState;
}

export default createStore<RootState>({
  modules: {
    favoritePokemon: favoritePokemonModule
  },
});