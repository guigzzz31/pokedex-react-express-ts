import React from 'react';

import {
  Box,
  Button,
  Grid
} from "@mui/material";

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
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: 1,
          cursor: "pointer"
        }}
        onClick={handleOpen}
      >
        <Box>
          {img && <PokemonAvatar name={name} img={img} />}
        </Box>
        <Box>
          <Box p={1}>
            <Box mb={1}>
              <Box p={1}>
                <Box>
                  <PokemonNumber id={id} />
                </Box>
                <Box>
                  <PokemonName name={name} />
                </Box>
              </Box>
            </Box>
            <TypeGenerator type={type} />
          </Box>
        </Box>
      </Box>
      <ModalPokemon open={open} handleClose={handleClose} {...pokemon} />
    </Box>
  );
}
