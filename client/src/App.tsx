import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { makeStyles, ThemeProvider } from "@mui/styles";

import Pokedex from './components/Pokedex';
import likedPokemons from './components/LikedPokemons';
import Header from './components/Header/Header';
import theme from './theme'
import AppContext from './AppContext';
import { Box } from '@mui/material';
import DetailsPokemon from './components/DetailsPokemon/DetailsPokemon';



export default function App(): JSX.Element {
  const [pageSelected, setPageSelected] = useState('pokedex');

  const handlePage = (tab: string, event: React.FormEvent<HTMLInputElement>): void => {
    setPageSelected(tab)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppContext>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              width: "100%",
              height: "100%",
            }}
          >
            <Router>
              <Header />
              <Switch>
                <Route exact path="/" component={Pokedex} />
                <Route path="/api/pokemons/liked" component={likedPokemons} />
                <Route path="/api/pokemon/:id" component={DetailsPokemon} />
              </Switch>
            </Router>
          </Box>
        </AppContext>
      </ThemeProvider>
    </>
  )
};
