import React, { useReducer } from 'react';
import { Box, Grid, CircularProgress, useMediaQuery } from "@mui/material";

import appReducer from '../appReducer';

import SearchNav from './SearchNav/SearchNav';
import PokemonGenerator from './generators/PokemonGenerator';

import useFetchPokemons from '../hooks/useFetchPokemons';

const initialState = {
  showAddForm: false,
  successMessage: "",
  isLoading: false,
  pokemons: [],
};

export default function Pokedex(): JSX.Element {

  const matches = useMediaQuery('(min-width:600px)');
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

  function filterPokemons(array: [], filters: any) {
    const filterKeys = Object.keys(filters);
    return array.filter(item => {
      return filterKeys.every(key => {
        if (typeof filters[key] !== 'function') return true;
        return filters[key](item[key]);
      });
    });
  }

  const filters = {
    name: searchName ? (name: string) => name.toLowerCase().includes(searchName.toLocaleLowerCase()) : '',
    id: searchNumber ? (id: string) => id.includes(searchNumber) : '',
    type: searchType ? (type: string) => type.includes(searchType) : '',
  }

  const result = filterPokemons(pokemons, filters);
  console.log('isLoading', isLoading)
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", paddingTop: 4 }}>
      <SearchNav
        searchName={searchName}
        searchNumber={searchNumber}
        searchType={searchType}
        handleChange={handleChange}
        handleChangeNumber={handleChangeNumber}
        handleChangeType={handleChangeType} />
      {isLoading ? <CircularProgress /> : <PokemonGenerator {...result} />}
    </Box>
  )
};