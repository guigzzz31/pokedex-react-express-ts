import React, { useReducer } from 'react';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import appReducer from '../appReducer';
import PokemonGenerator from './generators/PokemonGenerator';

import useFetchPokemonsLiked from '../hooks/useFetchPokemonsLiked';

const initialState = {
  showAddForm: false,
  likedPokemons: [],
};

export default function LikedPokemons(): JSX.Element {
  const [state, dispatch] = useReducer(appReducer, initialState);
  useFetchPokemonsLiked(dispatch);
  const { likedPokemons } = state;
  return (
    <Box bgcolor='primary'>
      <Grid direction="column" alignItems="center" justify="center" spacing={5} container>
        <Grid item>
        </Grid>
        <Grid item>
          <PokemonGenerator {...likedPokemons} />
        </Grid>
      </Grid>
    </Box>
  )
};
