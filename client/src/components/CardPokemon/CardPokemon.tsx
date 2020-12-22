import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import { Theme, makeStyles } from "@material-ui/core/styles";
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

import PokemonAvatar from "../helpers/PokemonAvatar";
import PokemonNumber from "../helpers/PokemonNumber";
import PokemonName from "../helpers/PokemonName";
import TypeGenerator from "../generators/TypeGenerator";

import PokemonProps from "../../types/Pokemon";

export default function CardPokemon({ id, name, img, type }: PokemonProps): JSX.Element {
  // const classes = useStyles();
  const classes: PropsClasses = useStyles({} as StyleProps);
  console.log('img', img)
  return (
    <Box className={classes.container} boxShadow={3} p={3}>
      <Grid
        justify="center"
        alignItems="center"
        spacing={1}
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
      </Grid>
    </ Box>
  );
}

//style
interface StyleProps {
  container: BaseCSSProperties,
}

type PropsClasses = Record<keyof StyleProps, string>

let baseStyle: StyleProps = {
  container: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderRadius: 18,
    maxWidth: 307,
  },
}
const useStyles = makeStyles<Theme, StyleProps>(() => baseStyle as any);