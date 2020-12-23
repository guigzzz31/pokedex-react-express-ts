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

  // const handleChangeType = (event: any, options: any) => {
  //   // const { options } = event.target.value;
  //   console.log("options", options.selected)
  //   const value: string[] | any = [];
  //   for (let i = 0, l = options.length; i < l; i += 1) {
  //     if (options[i].selected) {
  //       value.push(options[i].value);
  //     }
  //   }
  //   console.log("value", value)
  //   setSearchType(value);
  // };

  const { pokemons, isLoading } = state;
  useFetchPokemons(dispatch);


  function filterArray(array: [], filters: any) {
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

  const resultv1 = filterArray(pokemons, filters);

  console.log("filert", filters)


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
          <SearchNav searchName={searchName} handleChange={handleChange} searchNumber={searchNumber} handleChangeNumber={handleChangeNumber} searchType={searchType} handleChangeType={handleChangeType} />
        </Grid>
        <Grid item>
          <PokemonGenerator {...resultv1} />
        </Grid>
      </Grid>
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