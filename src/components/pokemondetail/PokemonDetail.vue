<template>
    <div v-if="loading" class="loading">
        <p>Loading...</p>
        <img src="../../assets/pokeball.png" alt="Loading" />
    </div>

    <div v-if="!loading && pokemon" class="pokemon-detail">
        <h2>{{ pokemon.name }}</h2>
        <img :src="pokemon.sprites.front_default" alt="Pokemon image" />
        <p>Weight: {{ pokemon.weight }}</p>
        <p>Height: {{ pokemon.height }}</p>
    </div>
</template>

<script lang="ts" src="./PokemonDetail.ts"></script>

<style scoped>

.pokemon-detail {
  text-align: center;
}

.pokemon-detail img {
  width: 150px;
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