export interface PokemonDetails {
    name: string;
    id: number;
    image?: string;
}

export interface FavoritePokemonState {
    favoritePokemons: PokemonDetails[];
    loading: boolean;
    selectedPokemon: PokemonDetails | null;
}

export const state: FavoritePokemonState = {
    favoritePokemons: [],
    loading: false,
    selectedPokemon: null,
};