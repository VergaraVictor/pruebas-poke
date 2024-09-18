<template>
    <div v-if="loading" class="loading">
        <p>Loading...</p>
        <img src="../../assets/pokeball.png" alt="Loading" />
    </div>

    <div v-if="!loading && pokemon" class="pokemon-detail">
        <h2 class="pokemon-name">{{ pokemon.name }}</h2>
        <img :src="pokemon.sprites.front_default" alt="Pokemon image" class="pokemon-image" />
        <p>Weight: {{ pokemon.weight }}</p>
        <p>Height: {{ pokemon.height }}</p>
    </div>
</template>

<script lang="ts" src="./PokemonDetail.ts"></script>

<style scoped>

.pokemon-detail {
  text-align: center;
  padding: 20px;
}

.pokemon-name {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 10px;
}

.pokemon-image {
  width: 200px;
  height: 200px;
  object-fit: contain;
  margin-bottom: 10px;
}

.loading {
  text-align: center;
  margin-top: 50px;
}

.loading img {
  width: 100px;
  animation: spin 2s linear infinite;
}

</style>