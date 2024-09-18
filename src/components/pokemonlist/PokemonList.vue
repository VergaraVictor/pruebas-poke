<template>
    <div>
      <h2>Pokémon List</h2>
      <div v-if="loading" class="loading">
        <img src="../../assets/pokeball.png" alt="Loading" />
      </div>
      <ul v-else class="pokemon-list">
        <li v-for="pokemon in pokemons" :key="pokemon.name" class="pokemon-card">
          <img :src="pokemon.image" :alt="pokemon.name" class="pokemon-image"/>
          <div class="pokemon-info">
              <span class="pokemon-name">{{ pokemon.name }}</span>
              <button @click="toggleFavorite(pokemon)">
                  {{ isFavorite(pokemon) ? 'Remove from Favorites' : 'Add to Favorites' }}
              </button>
              <button @click="getDetails(pokemon.name)">View Details</button>
              <button @click="sharePokemon(pokemon)">Share</button>
          </div>
        </li>
      </ul>
    </div>
  </template>

<script lang="ts" src="./PokemonList.ts"></script>

<style scoped>

.pokemon-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Centra los elementos */
}

.pokemon-card {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  width: 200px;
  text-align: center;
  border-radius: 8px; /* Bordes redondeados */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra sutil */
  background-color: #fff; /* Fondo blanco */
}

.pokemon-image {
  width: 100px;
  height: 100px;
  object-fit: contain; /* Ajusta la imagen para que no se distorsione */
}

.pokemon-info {
  margin-top: 10px;
}

.pokemon-name {
  font-size: 1.2em;
  font-weight: bold;
}

.loading {
  text-align: center;
  margin-top: 50px;
}

.loading img {
  width: 100px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
