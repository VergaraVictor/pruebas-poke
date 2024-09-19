import { defineComponent, ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from "vuex";

export default defineComponent({
    name: 'PokemonDetail',
    setup() {
      const route = useRoute();
      const store = useStore();
      const pokemon = ref(null);
      const loading = computed(() => store.getters['favoritePokemon/loading']);

      onMounted(async () => {
        const name = route.params.name as string;
        console.log('Fetching Pokemon with name:', name);
        if (name) {
          await store.dispatch('favoritePokemon/fetchPokemonDetails', name);
          pokemon.value = store.getters['favoritePokemon/selectedPokemon'];
        } else {
          console.warn('No Pokémon name provided, skipping fetch.');
        }
      });

      return {
        pokemon,
        loading,
      };
    },
});