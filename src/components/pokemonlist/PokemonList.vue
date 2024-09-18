<template>
    <div>
      <h2>Pokémon List</h2>
      <div v-if="loading" class="loading">
        <img src="../../assets/pokeball.png" alt="Loading" />
      </div>
      <ul v-else>
        <li v-for="pokemon in pokemons" :key="pokemon.name" class="pokemon-card">
          <img :src="pokemon.image" :alt="pokemon.name" />
          <span>{{ pokemon.name }}</span>
          <button @click="toggleFavorite(pokemon)">
            {{ isFavorite(pokemon) ? 'Remove from Favorites' : 'Add to Favorites' }}
          </button>
          <button @click="getDetails(pokemon.name)">View Details</button>
          <button @click="sharePokemon(pokemon)">Share</button>
        </li>
      </ul>
    </div>
  </template>

<script lang="ts" src="./PokemonList.ts"></script>

<style scoped>

.pokemon-list {
  display: flex;
  flex-wrap: wrap;
}

.pokemon-card {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  width: 200px;
  text-align: center;
}

.loading {
  text-align: center;
  margin-top: 50px;
}

</style>