import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {requestPokemonList} from './actions/pokemon';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useStyles from './styles';
import {PokemonDetails} from './PokemonDetails/index';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const list = useSelector(state => state.pokemon.list);
    const [selectedPokemon, setSelectedPokemon] = useState();

    useEffect(() => {
        dispatch(requestPokemonList());
    }, [dispatch]);

    function onchange(value) {
        setSelectedPokemon(value);
    }

    return (
        <div className={classes.root}>
            <Container maxWidth="lg" className={classes.container}>
                {list && (
                    <Autocomplete
                        options={list.results}
                        getOptionLabel={(option) => option.name}
                        id="auto-complete"
                        onChange={(event, value) => onchange(value)}
                        autoComplete
                        includeInputInList
                        renderInput={(params) => <TextField {...params} label="Find a Pokemon" margin="normal"/>}
                    />
                )}
                {selectedPokemon && (
                    <PokemonDetails
                        selectedPokemon={selectedPokemon}
                    />
                )}
            </Container>
        </div>
    );
};

export default App;
