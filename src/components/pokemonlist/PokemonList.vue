
<template>
  <div>
    <h2>Lista de Pokémon</h2>

    <input v-model="search" @input="searchPokemon" placeholder="Buscar Pokémon" />

    <div v-if="loading" class="loading">
      <img src="../../assets/pokeball.png" alt="Loading" />
    </div>

    <div v-if="pokemons.length" class="pokemon-cards">
      <div v-for="pokemon in pokemons" :key="pokemon.name" class="pokemon-card">
        <img :src="pokemon.image" :alt="pokemon.name" />
          <div class="pokemon-details">
            <span>{{ pokemon.name }}</span>
            <router-link :to="{ name: 'PokemonDetails', params: { name: pokemon.name } }">
              <button>Detalles</button>
            </router-link>
          </div>
      </div>
    </div>

    <div v-else>
      <p>No se encontraron Pokémon</p>
    </div>

  </div>
</template>

<script lang="ts" src="./PokemonList.ts"></script>

<style scoped>

.pokemon-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.pokemon-card {
  display: flex;
  flex-direction: column; 
  align-items: center; 
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  width: 150px; 
  text-align: center;
  transition: transform 0.3s;
}

.pokemon-card img {
  width: 100px;
  height: 100px;
}

.pokemon-card:hover {
  transform: scale(1.05);
}

.pokemon-details {
  display: flex;
  flex-direction: column; 
  text-align: center;
}

.pokemon-details span {
  margin-top: 5px; 
}

.loading img {
  width: 100px;
  animation: spin 2s linear infinite;
}


@media (max-width: 600px) {
  .pokemon-card {
    width: 100%; 
  }
}

</style>
