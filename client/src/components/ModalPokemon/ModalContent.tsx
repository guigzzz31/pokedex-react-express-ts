import React from 'react';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import PokemonAvatar from "../helpers/PokemonAvatar";
import PokemonNumber from "../helpers/PokemonNumber";
import PokemonName from "../helpers/PokemonName";
import TypeGenerator from "../generators/TypeGenerator";

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';
import PokemonProps from '../../types/Pokemon';
import DamageGenerator from '../generators/DamageGenerator';
import GraphGenerator from '../generators/GraphGenerator';

type DamageProps = {
  damages: {
    normal: string,
    fire: string,
    water: string,
    electric: string,
    grass: string,
    ice: string,
    fight: string,
    poison: string,
    ground: string,
    flying: string,
    psychic: string,
    bug: string,
    rock: string,
    ghost: string,
    dragon: string,
    dark: string,
    steel: string,
    stats: object,
  },
};


type ModalContentProps = { id: string, name: string, img: string, type: string[], damages: DamageProps, misc: object, stats: object, like: Boolean };

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      // boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);



export default function ModalContent({ id, name, img, type, damages, stats }: ModalContentProps): JSX.Element {
  const classes = useStyles();
  return (
    <Box>
      <Grid
        justify="center"
        alignItems="center"
        spacing={1}
        className={classes.paper}
        container
      >
        <Grid item>
          <PokemonAvatar img={img} />
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
        <Grid item>
          <GraphGenerator stats={stats} />
        </Grid>
        <Grid item >
          <DamageGenerator damages={damages} />
        </Grid>
      </Grid>
    </Box>
  );
}
