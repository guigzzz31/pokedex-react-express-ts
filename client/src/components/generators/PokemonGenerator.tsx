import React from "react";
import { Box, Grid, useTheme } from "@mui/material";

import CardPokemon from "../CardPokemon/CardPokemon";

import PokemonProps from '../../types/Pokemon';

type Pokemons = PokemonProps[];

export default function PokemonGenerator(pokemons: Pokemons) {
  let arr: Pokemons = Object.values(pokemons)
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: "40px",
        }}
      >
        {arr
          ? arr.map((pokemon: PokemonProps) => <CardPokemon key={pokemon.id} {...pokemon} />)
          : null}
      </Box>
    </Box>
  );
}
