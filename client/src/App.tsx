import React, { useReducer } from 'react';
import { Box } from '@material-ui/core';

import PokemonGenerator from './components/generators/PokemonGenerator';

import data from './data.js'

import PokemonProps from './types/Pokemon';

import appReducer from './appReducer';
import useFetchPokemons from './hooks/useFetchPokemons';

const initialState = {
  showAddForm: false,
  successMessage: "",
  pokemons: [],
};


export default function App(): JSX.Element {
  // const pokemons: any = data;
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { pokemons, showAddForm } = state;
  useFetchPokemons(dispatch);
  return (
    <Box bgcolor='primary'>
      <div>Pokedex from scratch</div>
      <PokemonGenerator {...pokemons} />
      {/* <CardPokemon {...pokemon} /> */}
    </Box>
  )
};

