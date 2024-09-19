<template>
  <div>
    <div v-if="loading" class="loading">
      <p>Loading...</p>
      <img src="../../assets/pokeball.png" alt="Loading" />
    </div>

    <div v-if="pokemon" class="pokemon-detail">
      <h2>{{ pokemon.name }}</h2>
      <img :src="pokemon.sprites.front_default" alt="Pokemon image" />
      <div class="details">
        <p><strong>Peso:</strong> {{ pokemon.weight }} kg</p>
        <p><strong>Altura:</strong> {{ pokemon.height }} m</p>
        <p><strong>Habilidades:</strong></p>
        <ul>
          <li v-for="ability in pokemon.abilities" :key="ability.ability.name">{{ ability.ability.name }}</li>
        </ul>
        <audio controls v-if="pokemon.cries">
          <source :src="pokemon.cries.latest" type="audio/ogg">
          Tu navegador no soporta el elemento de audio.
        </audio>
      </div>
    </div>
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