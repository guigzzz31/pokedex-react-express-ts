import React from 'react';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import DamageGenerator from '../generators/DamageGenerator';
import GraphGenerator from '../generators/GraphGenerator';
import PokemonNumberModale from './PokemonNumberModale';
import PokemonNameModale from './PokemonNameModale';
import PokemonAvatarModale from './PokemonAvatarModale';
import TypeGenModale from './TypeGenModale';
import InfoModale from './InfoModale';

import { DamageProps } from '../../types/Damages';
import { Misc } from '../../types/Misc';


type ModalContentProps = { id: string, name: string, img: string, type: string[], damages: DamageProps, misc: Misc, stats: object, like: Boolean };

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

export default function ModalContent({ id, name, img, type, damages, stats, misc }: ModalContentProps): JSX.Element {
  const classes = useStyles();
  return (
    <Box maxWidth={1600}>
      <Grid
        justify="space-evenly"
        alignItems="center"
        spacing={3}
        className={classes.paper}
        container
      >
        <Grid item>
          <PokemonAvatarModale img={img} />
        </Grid>
        <Grid item>
          <Grid direction="column" container >
            <Grid item>
              <Box mb={1}>
                <Grid spacing={1} container>
                  <Grid item>
                    <PokemonNumberModale id={id} />
                  </Grid>
                  <Grid item>
                    <PokemonNameModale name={name} />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item>
              <TypeGenModale type={type} />
              <InfoModale misc={misc} />
            </Grid>
          </Grid>
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
