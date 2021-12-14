import {
  Box,
  Grid,
} from "@mui/material";


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

export default function ModalContent({ id, name, img, type, damages, stats, misc }: ModalContentProps): JSX.Element {
  return (
    <Box maxWidth={1600}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          margin: 2,
          padding: [2, 3, 4]
        }}
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
      </Box>
    </Box>
  );
}
