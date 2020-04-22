import {call, put} from 'redux-saga/effects';

import {handleError} from '../actions/error';
import {
    receivePokemonDetails,
    receivePokemonList
} from '../actions/pokemon';

import PokemonService from '../services/pokemon';

export function* fetchData() {
    try {
        const data = yield call(PokemonService.getList);
        yield put(receivePokemonList(data));
    } catch (err) {
        yield put(handleError(err));
    }
}

export function* fetchDetails({url}) {
    try {
        const data = yield call(PokemonService.getDetails, url);
        yield put(receivePokemonDetails(data));
    } catch (err) {
        yield put(handleError(err));
    }
}
