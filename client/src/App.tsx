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
import Header from './components/Header';
import theme from './theme'
import { TabContext } from './AppContext';
import { Box } from '@mui/material';



export default function App(): JSX.Element {
  const [pageSelected, setPageSelected] = useState('pokedex');

  const handlePage = (tab: string, event: React.FormEvent<HTMLInputElement>): void => {
    setPageSelected(tab)
    console.log("coucoui")
  }

  console.log("state app", pageSelected)
  return (
    <>
      <ThemeProvider theme={theme}>
        <TabContext>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              width: "100%",
              height: "100%",
            }}
          >
            <Router>
              <Header handlePage={handlePage} pageSelected={pageSelected} />
              <Switch>
                <Route exact path="/" component={Pokedex} />
                <Route path="/api/pokemons/liked" component={likedPokemons} />
              </Switch>
            </Router>
          </Box>
        </TabContext>
      </ThemeProvider>
    </>
  )
};
