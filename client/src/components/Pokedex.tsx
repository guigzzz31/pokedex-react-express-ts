import React, { useReducer, useState } from 'react';
import { Box, Grid, CircularProgress, useMediaQuery, TextField } from "@mui/material";

import appReducer, { initialState } from '../appReducer';

import PokemonGenerator from './generators/PokemonGenerator';

import useFetchPokemons from '../hooks/useFetchPokemons';
import SearchBar from './SearchBar/SearchBar';


export default function Pokedex(): JSX.Element {

  const matches = useMediaQuery('(min-width:600px)');
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [searchName, setSearchName] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchNumber, setSearchNumber] = useState("");

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(event.target.value);
  };

  const handleChangeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 4,
      }}
    >
      <SearchBar
        searchName={searchName}
        searchNumber={searchNumber}
        searchType={searchType}
        handleChangeName={handleChangeName}
        handleChangeNumber={handleChangeNumber}
        handleChangeType={handleChangeType} />
      {isLoading ? <CircularProgress /> : result ? <PokemonGenerator {...result} /> : <TextField>no data</TextField>}
    </Box>
  )
};