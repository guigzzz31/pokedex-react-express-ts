import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import CardPokemon from "../CardPokemon/CardPokemon";

import PokemonProps from '../../types/Pokemon';

type Pokemons = PokemonProps[];

export default function PokemonGenerator(pokemons: Pokemons) {
  let arr: Pokemons = Object.values(pokemons)
  return (
    <Container maxWidth="lg">
      <Grid container direction="row" justify="center" spacing={5}>
        {arr
          ? arr.map((pokemon: PokemonProps) => {
            return (
              <Grid key={pokemon.id} item>
                <CardPokemon key={pokemon.id} {...pokemon} />
              </Grid>
            );
          })
          : null}
      </Grid>
    </Container>
  );
}
