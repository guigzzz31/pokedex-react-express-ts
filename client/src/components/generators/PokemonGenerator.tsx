import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import CardPokemon from "../CardPokemon/CardPokemon";

import PokemonProps from '../../types/Pokemon';
import { Container } from "@material-ui/core";

type Pokemons = PokemonProps[];

export default function PokemonGenerator(pokemons: any) {
  console.log("pokemon", pokemons)
  let arr: Pokemons = Object.values(pokemons)
  console.log('arr', arr)
  return (
    <Container maxWidth="lg">
      <Grid container direction="row" spacing={5}>
        {arr
          ? arr.map((pokemon: PokemonProps) => {
            return (
              <Grid item>
                <CardPokemon {...pokemon} />
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