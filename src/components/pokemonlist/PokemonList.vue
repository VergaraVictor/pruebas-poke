<!-- <template>
    <div>
      <h2>Pokémon List</h2>
      <div v-if="loading" class="loading">
        <img src="../../assets/pokeball.png" alt="Loading" />
      </div>
      <div v-else class="pokemon-cards">
      <div v-for="pokemon in pokemons" :key="pokemon.name" class="pokemon-card">
        <img :src="pokemon.image" :alt="pokemon.name" />
        <span>{{ pokemon.name }}</span>
        <button @click="getDetails(pokemon.name)">Detalles</button>
      </div>
    </div>

    <div v-if="selectedPokemon" class="pokemon-detail">
        <h2>{{ selectedPokemon.name }}</h2>
        <img :src="selectedPokemon.sprites.front_default" alt="Pokemon image" />
        <div class="details">
          <p><strong>Peso:</strong> {{ selectedPokemon.weight }} kg</p>
          <p><strong>Altura:</strong> {{ selectedPokemon.height }} m</p>
          <p><strong>Habilidades:</strong></p>
          <ul>
            <li v-for="ability in selectedPokemon.abilities" :key="ability.ability.name">
              {{ ability.ability.name }}
            </li>
          </ul>
          <audio controls v-if="selectedPokemon.cries">
            <source :src="selectedPokemon.cries.latest" type="audio/ogg">
            Tu navegador no soporta el elemento de audio.
          </audio>
        </div>
      </div>
  </div>
  </template> -->

  <template>
    <div>
      <h2>Lista de Pokémon</h2>
      <div v-if="loading" class="loading">
        <img src="../../assets/pokeball.png" alt="Loading" />
      </div>
      <div v-else class="pokemon-cards">
        <div v-for="pokemon in pokemons" :key="pokemon.name" class="pokemon-card">
          <img :src="pokemon.image" :alt="pokemon.name" />
          <span>{{ pokemon.name }}</span>
          <router-link :to="{ name: 'PokemonDetails', params: { name: pokemon.name } }">
            <button>Detalles</button>
          </router-link>
        </div>
      </div>
    </div>
  </template>

<script lang="ts" src="./PokemonList.ts"></script>

<style scoped>

.pokemon-list {
  text-align: center;
}

.pokemon-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.pokemon-card {
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

.loading img {
  width: 100px;
  animation: spin 2s linear infinite;
}

.pokemon-detail {
  background-color: #f8f8f8;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.pokemon-detail img {
  width: 150px;
  height: 150px;
  object-fit: contain;
}

.pokemon-detail ul {
  list-style: none;
  padding: 0;
}

.pokemon-detail li {
  padding: 5px 0;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
