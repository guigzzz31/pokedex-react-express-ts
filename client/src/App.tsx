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
// import Link from '@material-ui/core/Link';
import Pokedex from './components/Pokedex';
import likedPokemons from './components/LikedPokemons';


export default function App(): JSX.Element {
  return (
    <Router>
      <Grid direction="row" alignItems="center" justify="center" spacing={5} container>
        <Grid item>
          <Link to="/">
            Pokedex
      </Link>
        </Grid>
        <Grid item>
          <Link to="/api/pokemons/liked">
            Liked
      </Link>
        </Grid>
      </Grid>
      <Switch>
        <Route exact path="/" component={Pokedex} />
        <Route exact path="/api/pokemons/liked" component={likedPokemons} />
      </Switch>
    </Router>
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