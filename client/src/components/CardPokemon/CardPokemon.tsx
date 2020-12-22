import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import { Theme, makeStyles } from "@material-ui/core/styles";
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

// import AvatarGenerator from "../../generators/AvatarGenerator";
import PokemonNumber from "../helpers/PokemonNumber";
import PokemonName from "../helpers/PokemonName";
import TypeGenerator from "../generators/TypeGenerator";

import PokemonProps from "../../types/Pokemon";

export default function CardPokemon({ id, name, img, type }: PokemonProps): JSX.Element {
  // const classes = useStyles();
  const classes: PropsClasses = useStyles({} as StyleProps);
  console.log('img', img)
  return (
    <Box className={classes.container} boxShadow={3} m={2}>
      <Grid
        justify="center"
        alignItems="center"
        direction="row"
        spacing={1}
        container
      >
        <Grid item>
          <Box>
            <img alt={name} src={img} />
          </Box>
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
    </Box>
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
    borderRadius: 10,
    maxWidth: 800,
  },
}
const useStyles = makeStyles<Theme, StyleProps>(() => baseStyle as any);