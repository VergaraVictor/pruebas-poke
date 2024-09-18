<template>
  <div id="app">
    <h1>My Pokémon Favorites</h1>
    <PokemonList />
    <PokemonDetail />
  </div>
</template>

<script>
import PokemonList from '@/components/pokemonlist/PokemonList.vue';
import PokemonDetail from '@/components/pokemondetail/PokemonDetail.vue';

export default {
  components: {
    PokemonList,
    PokemonDetail
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
