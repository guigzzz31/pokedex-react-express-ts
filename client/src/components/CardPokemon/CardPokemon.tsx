import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  useMediaQuery
} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const axios = require('axios');

import InfoPokemon from "./InfoPokemon";

import PokemonProps from '../../types/Pokemon';
import { makeStyles } from "@mui/styles";
import { ThemeCustom } from "../../theme";

const useStyles = makeStyles((theme: ThemeCustom) => ({
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: theme.palette.primary.light,
    borderWidth: 1,
    borderRadius: 30,
    boxShadow: "20px 20px 60px #bd394e, -20px -20px 60px #ff4d6a",
    margin: "16px",
    padding: "12px",
  },
}));


export default function CardPokemon(pokemon: PokemonProps): JSX.Element {
  const classes = useStyles();
  const { id, like } = pokemon;

  const [isToggled, setToggled] = useState(like);


  function toggleTrueFalse(id: string) {
    setToggled(!isToggled);
    const likePokemon = async () => {
      try {

        let data = {
          "like": !isToggled
        }
        await axios.put(`/api/pokemons/${id}`, data);
      } catch (error) {
        console.log(error);
      }
    };
    likePokemon();
  }

  return (
    <Box
      width={["300px", "320px", "330px", "400px", "500px"]}
      className={classes.container}
    >
      <Box>
        <InfoPokemon {...pokemon} />
      </Box>
      <Box
        sx={{
          alignSelf: "flex-end",
          justifySelf: "flex-end"
        }}
      >
        <Button
          id={id}
          onClick={() => toggleTrueFalse(id)}
          sx={{
            position: "absolute",
            borderColor: "#FFF",
            bottom: 12,
            right: 0,
            padding: 0,
            margin: 0
          }}
        >
          {
            isToggled ? <FavoriteIcon sx={{ color: "#FFF" }} /> : <FavoriteBorderIcon sx={{ color: "#FFF" }} />
          }
        </Button>
      </Box>
    </ Box>
  );
}