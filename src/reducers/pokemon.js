import {
    POKEMON_DETAILS_REQUESTED,
    POKEMON_DETAILS_SUCCEEDED,
    POKEMON_LIST_REQUESTED,
    POKEMON_LIST_SUCCEEDED
} from '../actions/pokemon';

import {
    ERROR_OCCURRED
} from '../actions/error';

export default function pokemon(state = {loading: false, error: false}, action) {
    switch (action.type) {
        case POKEMON_DETAILS_REQUESTED:
            return {...state, loading: true};
        case POKEMON_DETAILS_SUCCEEDED:
            return {...state, details: action.details, loading: false, error: false};
        case POKEMON_LIST_REQUESTED:
            return {...state, loading: true};
        case POKEMON_LIST_SUCCEEDED:
            return {...state, list: action.list, loading: false, error: false};
        case ERROR_OCCURRED:
            return {...state, error: true, loading: false};
        default:
            return state;
    }
}
