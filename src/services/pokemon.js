import Http from './http';
const {REACT_APP_ENDPOINT} = process.env;

export default class PokemonService {
    static getList() {
        return Http.get(`${REACT_APP_ENDPOINT}pokemon?limit=1000`, {cache: true});
    }

    static getDetails(url) {
        return Http.get(url);
    }
}
