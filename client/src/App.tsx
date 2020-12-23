import React, { useReducer, useState, useEffect } from 'react';
import { Box, Button, Grid, Input } from '@material-ui/core';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

// import CircularProgress from '@material-ui/core/CircularProgress';
import PokemonGenerator from './components/generators/PokemonGenerator';
import { Theme, makeStyles } from "@material-ui/core/styles";

import appReducer from './appReducer';
import useFetchPokemons from './hooks/useFetchPokemons';
import PokemonProps from './types/Pokemon';
import { TextField } from '@material-ui/core';
import SearchNav from './components/SearchNav/SearchNav';

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
  const classes: PropsClasses = useStyles({} as StyleProps);

  return (
    <Box bgcolor='primary'>
      <Grid direction="column" alignItems="center" justify="center" spacing={5} container>
        <Grid item>
          <Button>
            POKEDEX
          </Button>
          <Button>
            LIKED
          </Button>
        </Grid>
        <Grid item>
          <SearchNav searchName={searchName} handleChange={handleChange} searchNumber={searchNumber} handleChangeNumber={handleChangeNumber} />
        </Grid>
        <Grid item>
          <PokemonGenerator {...results} />
        </Grid>
      </Grid>

      {/* <PokemonGenerator {...pokemons} /> */}
    </Box>
  )
};

//style
interface StyleProps {
  textField: BaseCSSProperties,
  likeButton: BaseCSSProperties,
  likeIcon: BaseCSSProperties,
  info: BaseCSSProperties
}

type PropsClasses = Record<keyof StyleProps, string>

let baseStyle: StyleProps = {
  textField: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderRadius: 18,
  },
  likeIcon: {
    color: "#E4E4E4",
  },
  likeButton: {
    borderWidth: 2,
    borderRadius: 90,
    borderColor: "#E4E4E4"
  },
  info: {
    paddingTop: 23,
  }
}
const useStyles = makeStyles<Theme, StyleProps>(() => baseStyle as any);