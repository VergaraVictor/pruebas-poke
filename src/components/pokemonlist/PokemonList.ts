import { defineComponent, computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
    name: 'PokemonList', 
    setup() {
        const store =useStore();
        const search = ref('');

        const pokemons = computed(() => {
            return store.getters['favoritePokemon/favoritePokemons'] || []; 
        });

        const loading = computed(() => {
            return store.getters['favoritePokemon/loading'] || false; 
        });

        onMounted(() => {
        store.dispatch('favoritePokemon/fetchPokemons');
        });

        const searchPokemon = async () => {
            if (search.value) {
              await store.dispatch('favoritePokemon/searchPokemonByName', search.value);
            } else {
              await store.dispatch('favoritePokemon/fetchPokemons');
            }
        };

        return {
            pokemons,
            loading,
            search,
            searchPokemon,
        };
    },
});