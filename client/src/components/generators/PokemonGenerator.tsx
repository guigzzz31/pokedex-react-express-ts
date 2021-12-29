import React from "react";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";

import CardPokemon from "../CardPokemon/CardPokemon";

import PokemonProps from '../../types/Pokemon';

type Pokemons = PokemonProps[];

export default function PokemonGenerator(pokemons: Pokemons) {
  let arr: Pokemons = Object.values(pokemons)
  const theme = useTheme();
  const matches = useMediaQuery('(max-width:700px)');

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
          flexDirection: matches ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: 4,
        }}
      >
        {arr
          ? arr.map((pokemon: PokemonProps) => {
            return (
              <CardPokemon key={pokemon.id} {...pokemon} />
            )
          }
          )
          : null}
      </Box>
    </Box >
  );
}
