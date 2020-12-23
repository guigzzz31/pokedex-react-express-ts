import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';
import { Theme, makeStyles } from "@material-ui/core/styles";

import Pokedex from './components/Pokedex';
import likedPokemons from './components/LikedPokemons';
import Header from './components/Header';


export default function App(): JSX.Element {
  const classes: PropsClasses = useStyles({} as StyleProps);
  const [pageSelected, setPageSelected] = useState('yooo');

  function handlePage(event: any): any {
    console.log("event", event)
    setPageSelected(event.target.value)
    console.log(pageSelected)
  }

  return (
    <div className={classes.container}>

      <Router>
        <Header handlePage={handlePage} pageSelected={pageSelected} />
        <Switch>
          <Route exact path="/" component={Pokedex} />
          <Route exact path="/api/pokemons/liked" component={likedPokemons} />
        </Switch>
      </Router>
    </div>
  )
};

//style
interface StyleProps {
  container: BaseCSSProperties,
  likeButton: BaseCSSProperties,
  likeIcon: BaseCSSProperties,
  info: BaseCSSProperties
}

type PropsClasses = Record<keyof StyleProps, string>

let baseStyle: StyleProps = {
  container: {
    backgroundColor: "#F9F9F9",
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