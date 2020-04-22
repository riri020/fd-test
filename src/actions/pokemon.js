export const POKEMON_LIST_REQUESTED = 'POKEMON_LIST_REQUESTED';
export const POKEMON_LIST_SUCCEEDED = 'POKEMON_LIST_SUCCEEDED';
export const POKEMON_DETAILS_REQUESTED = 'POKEMON_DETAILS_REQUESTED';
export const POKEMON_DETAILS_SUCCEEDED = 'POKEMON_DETAILS_SUCCEEDED';

export const receivePokemonList = list => ({
    type: POKEMON_LIST_SUCCEEDED,
    list
});

export const requestPokemonList = () => ({
    type: POKEMON_LIST_REQUESTED
});

export const receivePokemonDetails = details => ({
    type: POKEMON_DETAILS_SUCCEEDED,
    details
});

export const requestPokemonDetails = url => ({
    type: POKEMON_DETAILS_REQUESTED,
    url
});
