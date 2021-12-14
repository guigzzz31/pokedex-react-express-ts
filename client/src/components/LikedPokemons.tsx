import React, { useReducer } from 'react';
import { Box } from "@mui/material";

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
      <PokemonGenerator {...likedPokemons} />
    </Box>
  )
};
