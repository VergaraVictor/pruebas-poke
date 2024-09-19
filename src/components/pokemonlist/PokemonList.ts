import { defineComponent, computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
    name: 'PokemonList', 
    setup() {
        const store =useStore();

        const pokemons = computed(() => {
            return store.getters['favoritePokemon/favoritePokemons'] || []; // Asegúrate de que no sea undefined
        });

        const loading = computed(() => {
            return store.getters['favoritePokemon/loading'] || false; // Asegúrate de que no sea undefined
        });

        onMounted(() => {
        store.dispatch('favoritePokemon/fetchPokemons');
        });

        return {
            pokemons,
            loading,
        };
    },
});
        // const selectedPokemon = ref(null);

        // Acceder  a los getters
        // const pokemons = computed(() => store.getters['favoritePokemon/favoritePokemons'].map((pokemon: { name: string, url: string }) => {
        //     const id = pokemon.url.split('/')[6];
        //     return {
        //       ...pokemon,
        //       image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
        //     };
        // }));
        // const loading = computed(() => store.getters['favoritePokemon/loading']);

        // const isFavorite = (pokemon: { name: string }) => store.getters['favoritePokemon/isFavorite'](pokemon);

        // onMounted(() => {
        //     store.dispatch('favoritePokemon/fetchPokemons');
        // });

        // console.log('Pokemons:', pokemons.value);

        // const toggleFavorite = (pokemon: { name: string }) => {
        //     if (isFavorite(pokemon)) {
        //         store.dispatch('favoritePokemon/removeFavorite', pokemon);
        //     }
        //     else {  
        //         store.dispatch('favoritePokemon/addFavorite', pokemon);
        //     }
        // };

        // const getDetails = (name: string) => {
        //     store.dispatch('favoritePokemon/fetchPokemonDetails', name).then((pokemonDetails) => {
        //         selectedPokemon.value = pokemonDetails;  // Asignar el Pokémon seleccionado
        //     });
        // };

        // const sharePokemon = (pokemon: { name: string }) => {
        //     const pokemonInfo = `${pokemon.name}, attributes...`;
        //     navigator.clipboard.writeText(pokemonInfo).then(() => {
        //         alert('Pokemon information copied!');
        //     });
        // };

        // return {
        //     pokemons,
        //     // loading,
        //     // toggleFavorite,
        //     // getDetails,
        //     // sharePokemon,
        //     // isFavorite,
        //     // selectedPokemon,
        // };
//     },
// });