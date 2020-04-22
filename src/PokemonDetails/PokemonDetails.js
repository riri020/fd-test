import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {requestPokemonDetails} from '../actions/pokemon';
import {useDispatch, useSelector} from 'react-redux';
import useStyles from './styles';

const PokemonDetails = ({selectedPokemon}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const details = useSelector(state => state.pokemon.details);
    const loading = useSelector(state => state.pokemon.loading);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        setExpanded(false);
        dispatch(requestPokemonDetails(selectedPokemon.url));
    }, [dispatch, selectedPokemon]);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            {loading && (
                <CircularProgress/>
            )}
            {details && !loading && (
                <>
                    <CardHeader
                        title={details.name}
                        subheader={`Base experiencie ${details.base_experience}`}
                    />
                    <CardMedia
                        className={classes.media}
                        image={details.sprites.front_default}
                        title="Paella dish"
                    />
                    <CardActions disableSpacing>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon/>
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography variant="h5">Stats</Typography>
                            {details.stats.map(stat => (
                                <Typography key={stat.stat.name}>
                                    {`${stat.stat.name} Base: ${stat.base_stat}, Effort:${stat.effort}`}
                                </Typography>
                            ))}
                            <Typography variant="h5">Moves</Typography>
                            {details.moves.map(move => (
                                <Typography key={move.move.name}>
                                    {move.move.name}
                                </Typography>
                            ))}
                        </CardContent>
                    </Collapse>
                </>
            )}
        </Card>
    );
};

PokemonDetails.propTypes = {
    selectedPokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }).isRequired
};

export {PokemonDetails};
