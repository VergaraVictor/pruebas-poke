<template>
    <div class="home">
        <h1>Pokémon App</h1>
        <PokemonList />
        <PokemonDetail />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

import PokemonList from '@/components/pokemonlist/PokemonList.vue';
import PokemonDetail from '@/components/pokemondetail/PokemonDetail.vue';

export default defineComponent({
    name:'HomeView',
    components: {
        PokemonList,
        PokemonDetail,
    },
    setup() {
        const store = useStore();
    
        return {
            
        };
    },

});
</script>

<style scoped>
.home {
  text-align: center;
}
</style>