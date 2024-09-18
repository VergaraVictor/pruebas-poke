import { Module } from 'vuex';
import { RootState } from '@/store';
import { FavoritePokemonState, state } from './state';
import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';

const favoritePokemonModule: Module<FavoritePokemonState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default favoritePokemonModule;