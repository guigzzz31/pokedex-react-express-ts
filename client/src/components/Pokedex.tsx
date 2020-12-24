import React, { useReducer } from 'react';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import CircularProgress from '@material-ui/core/CircularProgress';

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
  return (
    <Box bgcolor='primary'>
      <Grid direction="column" alignItems="center" justify="center" spacing={5} container>
        <Grid item>
          <SearchNav searchName={searchName} handleChange={handleChange} searchNumber={searchNumber} handleChangeNumber={handleChangeNumber} searchType={searchType} handleChangeType={handleChangeType} />
        </Grid>
        <Grid item>
          {isLoading ? <CircularProgress /> : <PokemonGenerator {...result} />}
        </Grid>
      </Grid>
    </Box>
  )
};