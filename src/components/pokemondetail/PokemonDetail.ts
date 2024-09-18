import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
    name: 'PokemonDetail',
    setup() {
        const store = useStore();

        const loading = computed(() => store.getters['favoritePokemon/loading']);
        const pokemon = computed(() => store.getters['favoritePokemon/selectedPkemon']);

        return {
            loading,
            pokemon,
        };
    },
});