import React from "react";
import { Box, Grid } from "@mui/material";

import CardPokemon from "../CardPokemon/CardPokemon";

import PokemonProps from '../../types/Pokemon';

type Pokemons = PokemonProps[];

export default function PokemonGenerator(pokemons: Pokemons) {
  let arr: Pokemons = Object.values(pokemons)
  return (
    <Box maxWidth="lg">
      <Box>
        {arr
          ? arr.map((pokemon: PokemonProps) => {
            return (
              <Box key={pokemon.id}>
                <CardPokemon key={pokemon.id} {...pokemon} />
              </Box>
            );
          })
          : null}
      </Box>
    </Box>
  );
}
