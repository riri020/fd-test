import {takeEvery, all} from 'redux-saga/effects';
import {
    ERROR_OCCURRED
} from '../actions/error';
import {
    POKEMON_DETAILS_REQUESTED,
    POKEMON_LIST_REQUESTED
} from '../actions/pokemon';
import {fetchData, fetchDetails} from './pokemon';
import handleError from './error';

export default function* root() {
    yield all([
        takeEvery(POKEMON_LIST_REQUESTED, fetchData),
        takeEvery(POKEMON_DETAILS_REQUESTED, fetchDetails),
        takeEvery(ERROR_OCCURRED, handleError)
    ]);
}
