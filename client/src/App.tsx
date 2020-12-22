import React, { useReducer, useState, useEffect } from 'react';
import { Box, Input } from '@material-ui/core';
// import CircularProgress from '@material-ui/core/CircularProgress';
import PokemonGenerator from './components/generators/PokemonGenerator';

import appReducer from './appReducer';
import useFetchPokemons from './hooks/useFetchPokemons';
import PokemonProps from './types/Pokemon';

const initialState = {
  showAddForm: false,
  successMessage: "",
  isLoading: false,
  pokemons: [],
};


export default function App(): JSX.Element {

  const [state, dispatch] = useReducer(appReducer, initialState);
  const [searchName, setSearchName] = React.useState("");
  const [searchType, setSearchType] = React.useState("");
  const [searchNumber, setSearchNumber] = React.useState("");

  const handleChange = (event: any) => {
    setSearchName(event.target.value);
  };

  const handleChangeNumber = (event: any) => {
    setSearchNumber(event.target.value);
  };

  const handleChangeType = (event: any) => {
    setSearchType(event.target.value);
  };

  const { pokemons, isLoading } = state;
  useFetchPokemons(dispatch);

  const results = !searchName && !searchNumber
    ? pokemons
    : pokemons
      .filter((pokemon: PokemonProps) =>
        pokemon.name.toLowerCase().includes(searchName.toLocaleLowerCase())
      )
      .filter((pokemon: PokemonProps) =>
        pokemon.id.toLowerCase().includes(searchNumber.toLocaleLowerCase())
      )
  // .filter((pokemon: PokemonProps) =>
  //   pokemon.type.includes(searchType.toLocaleLowerCase())
  // )
  return (
    <Box bgcolor='primary'>
      <input
        type="text"
        placeholder="name"
        value={searchName}
        onChange={handleChange}
      />
      <Input
        type="number"
        placeholder="number"
        value={searchNumber}
        onChange={handleChangeNumber}
      />
      <Input
        type="text"
        placeholder="type"
        value={searchType}
        onChange={handleChangeType}
      />
      {/* <PokemonGenerator {...pokemons} /> */}
      <PokemonGenerator {...results} />
    </Box>
  )
};

