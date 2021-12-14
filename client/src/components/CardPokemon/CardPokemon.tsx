import React, { useState } from "react";
import {
  Box,
  Button,
  Grid
} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const axios = require('axios');

import InfoPokemon from "./InfoPokemon";

import PokemonProps from '../../types/Pokemon';

export default function CardPokemon(pokemon: PokemonProps): JSX.Element {
  const { id, like } = pokemon;

  const [isToggled, setToggled] = useState(like);


  function toggleTrueFalse(id: string) {
    setToggled(!isToggled);
    const likePokemon = async () => {
      try {

        let data = {
          "like": !isToggled
        }
        const result = await axios.put(`/api/pokemons/${id}`, data);
      } catch (error) {
        console.log(error);
      }
    };
    likePokemon();
  }

  return (
    <Box
      sx={{
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderRadius: 18,
        maxWidth: 350,
        minWidth: 350,
      }}
    >
      <Box pt={20}>
        <InfoPokemon {...pokemon} />
      </Box>
      <Box sx={{ justifySelf: "flex-end" }}>
        <Button
          id={id}
          onClick={() => toggleTrueFalse(id)}
          sx={{
            borderWidth: 2,
            borderRadius: 90,
            borderColor: "#E4E4E4"
          }}
        >
          {
            isToggled ? <FavoriteIcon sx={{ color: "#E4E4E4" }} /> : <FavoriteBorderIcon sx={{ color: "#E4E4E4" }} />
          }
        </Button>
      </Box>
    </ Box>
  );
}