export type Pokemon = {
    thumbnail: string;
    name: string;
    id: number;
    types: string[];
}

export type PokemonResponse = {
    id: number;
    name: string;
    thumbnail: string;
    url: string;
}