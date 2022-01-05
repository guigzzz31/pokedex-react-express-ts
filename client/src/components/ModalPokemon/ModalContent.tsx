import {
  Box,
  Grid,
} from "@mui/material";

import useMediaQuery from '@mui/material/useMediaQuery';

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
  const matches = useMediaQuery('(min-width:700px)');
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: !matches ? "column" : "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: '100%',
          margin: 2,
          padding: [2, 3, 4]
        }}
      >
        <Box>
          <PokemonAvatarModale img={img} />
        </Box>
        <Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box>
              <Box mb={1}>
                <Box>
                  <Box>
                    <PokemonNumberModale id={id} />
                  </Box>
                  <Box>
                    <PokemonNameModale name={name} />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <TypeGenModale type={type} />
              <InfoModale misc={misc} />
            </Box>
          </Box>
        </Box>
        <Box>
          <GraphGenerator stats={stats} />
        </Box>
        <Box>
          <DamageGenerator damages={damages} />
        </Box>
      </Box>
    </Box>
  );
}
