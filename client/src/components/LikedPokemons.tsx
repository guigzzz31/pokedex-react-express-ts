import React, { useReducer } from 'react';
import { Box } from "@mui/material";

import appReducer, { initialState, TInitialState } from '../appReducer';
import PokemonGenerator from './generators/PokemonGenerator';

import useFetchPokemonsLiked from '../hooks/useFetchPokemonsLiked';


export default function LikedPokemons(): JSX.Element {
  const [state, dispatch] = useReducer(appReducer, initialState);
  useFetchPokemonsLiked(dispatch);
  const { likedPokemons } = state;
  return (
    <Box pt={16}>
      <PokemonGenerator {...likedPokemons} />
    </Box>
  )
};
