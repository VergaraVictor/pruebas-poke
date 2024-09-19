import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';


import HomePage from '@/views/HomePage.vue';
import PokemonList from '@/components/pokemonlist/PokemonList.vue'; 
import PokemonDetails from '@/components/pokemondetail/PokemonDetail.vue'; 

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,  
  },
  {
    path: '/pokemon',
    name: 'PokemonList',
    component: PokemonList
  },
  {
    path: '/pokemon/:name',
    name: 'PokemonDetails',
    component: PokemonDetails,    
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;