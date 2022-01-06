import React, { useContext } from 'react';

import {
  Box,
  Button,
  Grid
} from "@mui/material";

import PokemonAvatar from "../helpers/PokemonAvatar";
import PokemonNumber from "../helpers/PokemonNumber";
import PokemonName from "../helpers/PokemonName";
import TypeGenerator from "../generators/TypeGenerator";

import PokemonProps from '../../types/Pokemon';
import { Link } from 'react-router-dom';
import { ContextTypeCustom, TabContext } from '../../AppContext';

export default function InfoPokemon(pokemon: PokemonProps): JSX.Element {
  const { img, id, name, type } = pokemon;
  const { currentTab, handleChange } = useContext(TabContext)

  return (
    <Link style={{ textDecoration: 'none' }} to={`/api/pokemon/${id}`}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: 1,
          cursor: "pointer"
        }}
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
    </Link>
  );
}
