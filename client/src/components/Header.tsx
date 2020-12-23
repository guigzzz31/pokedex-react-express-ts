import React, { useReducer } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';
import { Theme, makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Typography } from '@material-ui/core';





export default function Header(): JSX.Element {
  return (
    <Grid direction="row" alignItems="center" justify="center" spacing={5} container>
      <Grid item>
        <Link to="/">
          Pokedex
      </Link>
      </Grid>
      {/* <Grid item>
        <Box>
          <Typography>
            POKEDEX
          </Typography>
        </Box>
      </Grid> */}
      <Grid item>
        <Link to="/api/pokemons/liked">
          Liked
      </Link>
      </Grid>
    </Grid>
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