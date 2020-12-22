import React from "react";
import Grid from "@material-ui/core/Grid";


import CardPokemon from "../CardPokemon/CardPokemon";

import PokemonProps from '../../types/Pokemon';
import { Container } from "@material-ui/core";

type Pokemons = PokemonProps[];

export default function PokemonGenerator(pokemons: Pokemons) {
  let arr: Pokemons = Object.values(pokemons)
  return (
    <Container maxWidth="lg">
      <Grid container direction="row" spacing={5}>
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

//style
// interface StyleProps {
//   typeBox: BaseCSSProperties,
//   typeText: BaseCSSProperties,
// }

// type PropsClasses = Record<keyof StyleProps, string>

// let baseStyle: StyleProps = {
//   typeText: {
//     color: "#FFF",
//     fontWeight: 900,
//     fontSize: 9,
//   },
//   typeBox: {
//     borderRadius: 9,
//     width: 77,
//   }
// }
// const useStyles = makeStyles<Theme, StyleProps>(() => baseStyle as any);