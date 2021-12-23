import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { makeStyles, ThemeProvider } from "@mui/styles";

import Pokedex from './components/Pokedex';
import likedPokemons from './components/LikedPokemons';
import Header from './components/Header';
import theme, { ThemeCustom } from './theme'
import { TabContext } from './AppContext';
import { Box, useTheme } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignContent: "center",
    //backgroundColor: theme.palette.primary.main,
    borderWidth: 1,
    borderRadius: 30,
    boxShadow: "9px 9px 18px #c9c8c3, -9px -9px 18px #ffffff",
  },
}));


export default function App(): JSX.Element {
  const classes = useStyles();
  const [pageSelected, setPageSelected] = useState('yooo');

  function handlePage(event: any): any {
    setPageSelected(event.target.value)
    console.log(pageSelected)
  }

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <TabContext>
          <Box sx={{ backgroundColor: theme.palette.primary.main }}>
            <Router>
              <Header handlePage={handlePage} pageSelected={pageSelected} />
              <Switch>
                <Route exact path="/" component={Pokedex} />
                <Route exact path="/api/pokemons/liked" component={likedPokemons} />
              </Switch>

            </Router>
          </Box>
        </TabContext>
      </ThemeProvider>
    </Box>
  )
};

//style
// interface StyleProps {
//   container: BaseCSSProperties,
//   likeButton: BaseCSSProperties,
//   likeIcon: BaseCSSProperties,
//   info: BaseCSSProperties
// }

// type PropsClasses = Record<keyof StyleProps, string>

// let baseStyle: StyleProps = {
//   container: {
//     backgroundColor: "#F9F9F9",
//     borderWidth: 1,
//     borderRadius: 18,
//   },
//   likeIcon: {
//     color: "#E4E4E4",
//   },
//   likeButton: {
//     borderWidth: 2,
//     borderRadius: 90,
//     borderColor: "#E4E4E4"
//   },
//   info: {
//     paddingTop: 23,
//   }
// }
// const useStyles = makeStyles<Theme, StyleProps>(() => baseStyle as any);