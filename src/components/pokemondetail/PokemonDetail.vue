<template>
  <div>
    <div v-if="loading" class="loading">
      <p>Loading...</p>
      <img src="../../assets/pokeball.png" alt="Loading" />
    </div>

    <div v-if="pokemon" class="pokemon-detail">
      <h2>{{ pokemon.name }}</h2>
      <img :src="pokemon.sprites.other['official-artwork'].front_default" alt="Pokemon image" class="pokemon-image" />
      <div class="details">
        <p><strong>Peso:</strong> {{ pokemon.weight }} kg</p>
        <p><strong>Altura:</strong> {{ pokemon.height }} m</p>
        <p><strong>Habilidades:</strong></p>
        <ul class="abilities">
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
  background-color: #f8f8f8; 
  border-radius: 10px; 
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); 
  padding: 20px;
  text-align: center;
  max-width: 400px; 
  margin: auto; 
}

.pokemon-name {
  font-size: 2.5em; 
  font-weight: bold;
  color: #333; 
  margin-bottom: 10px;
}

.pokemon-image {
  width: 100%; 
  height: auto; 
  max-width: 300px; 
  object-fit: contain;
  margin-bottom: 20px; 
}

.details {
  background-color: #ffffff; 
  border-radius: 8px; 
  padding: 15px;
  margin-top: 15px; 
  text-align: left; 
}

.details p {
  margin: 5px 0; 
}

.abilities {
  list-style-type: none; 
  padding: 0; 
}

.abilities li {
  background-color: #e0e0e0; 
  border-radius: 5px; 
  padding: 5px;
  margin: 5px 0; 
}

.loading {
  text-align: center;
  margin-top: 50px;
}

.loading img {
  width: 100px;
  animation: spin 2s linear infinite;
}

@media (max-width: 600px) {
  .pokemon-detail {
    width: 95%; 
  }
}

</style>