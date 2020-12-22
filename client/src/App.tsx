import React, { useReducer, useState, useEffect } from 'react';
import { Box, Input } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import PokemonGenerator from './components/generators/PokemonGenerator';

import appReducer from './appReducer';
import useFetchPokemons from './hooks/useFetchPokemons';

const initialState = {
  showAddForm: false,
  successMessage: "",
  isLoading: false,
  pokemons: [],
  query: "",
};


export default function App(): JSX.Element {

  const [state, dispatch] = useReducer(appReducer, initialState);
  const [query, setQuery] = useReducer(appReducer, initialState);

  const { pokemons, isLoading } = state;
  console.log("isLoading", isLoading)
  useFetchPokemons(dispatch);
  return (
    <Box bgcolor='primary'>
      <Input
        type="text"
      />
      {isLoading ? <CircularProgress color="secondary" /> : <PokemonGenerator {...pokemons} />}
    </Box>
  )
};

