import React, { useReducer } from 'react';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';
import { Theme, makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import appReducer from '../appReducer';
import PokemonGenerator from './generators/PokemonGenerator';

import useFetchPokemonsLiked from '../hooks/useFetchPokemonsLiked';

const initialState = {
  showAddForm: false,
  successMessage: "",
  likedPokemons: [],
};

export default function LikedPokemons(): JSX.Element {
  const [state, dispatch] = useReducer(appReducer, initialState);
  useFetchPokemonsLiked(dispatch);
  const { likedPokemons } = state;
  console.log("likedPokemons", likedPokemons)
  const classes: PropsClasses = useStyles({} as StyleProps);
  return (
    <Box bgcolor='primary'>
      <Grid direction="column" alignItems="center" justify="center" spacing={5} container>
        <Grid item>
        </Grid>
        <Grid item>
          <PokemonGenerator {...likedPokemons} />
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