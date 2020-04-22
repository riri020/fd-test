import {POKEMON_DETAILS_SUCCEEDED, POKEMON_LIST_SUCCEEDED} from './actions/pokemon';
import pokemonReducer from './reducers';

describe('Pokemon Reducer', () => {

    it('Should return default state', () => {
        const newState = pokemonReducer(undefined, {});
        expect(newState).toEqual({"pokemon": {"error": false, "loading": false}});
    });

    it('Should return new state if receiving list action', () => {

        const list = [{name: 'pokemon 1', url: 'https://polemon/1'}, {
            name: 'pokemon 2',
            url: 'https://polemon/2'
        }, {name: 'pokemon 3', url: 'https://polemon/3'}];

        const newState = pokemonReducer(undefined, {
            type: POKEMON_LIST_SUCCEEDED,
            list
        });
        expect(newState).toEqual({"pokemon": {"error": false, "loading": false, list}});

    });

    it('Should return new state if receiving details action', () => {

        const details = {name: 'charmeleon', base_experience: 142};

        const newState = pokemonReducer(undefined, {
            type: POKEMON_DETAILS_SUCCEEDED,
            details
        });
        expect(newState).toEqual({"pokemon": {"error": false, "loading": false, details}});

    });
});
