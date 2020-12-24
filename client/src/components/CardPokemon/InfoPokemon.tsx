import React from 'react';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import PokemonAvatar from "../helpers/PokemonAvatar";
import PokemonNumber from "../helpers/PokemonNumber";
import PokemonName from "../helpers/PokemonName";
import TypeGenerator from "../generators/TypeGenerator";
import ModalPokemon from '../ModalPokemon/ModalPokemon';

import PokemonProps from '../../types/Pokemon';

export default function InfoPokemon(pokemon: PokemonProps): JSX.Element {
  const { img, id, name, type } = pokemon;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Grid
        justify="center"
        alignItems="center"
        spacing={1}
        container
      >
        <Grid item>
          <Button onClick={handleOpen}>
            <PokemonAvatar img={img} />
          </Button>
        </Grid>
        <Grid item>
          <Box p={1}>
            <Box mb={1}>
              <Grid spacing={1} container>
                <Grid item>
                  <PokemonNumber id={id} />
                </Grid>
                <Grid item>
                  <PokemonName name={name} />
                </Grid>
              </Grid>
            </Box>
            <TypeGenerator type={type} />
          </Box>
        </Grid>
      </Grid>
      <ModalPokemon open={open} handleClose={handleClose} {...pokemon} />
    </Box>
  );
}
