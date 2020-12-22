import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

// import AvatarGenerator from "../../generators/AvatarGenerator";
import TypeGenerator from "../generators/TypeGenerator";
// import CardName from "./CardName";
import PokemonProps from "../../types/Pokemon";

import CustomToUpperCase from "../../hooks/CustomToUpperCase";

interface StyleProps {
  container: BaseCSSProperties,
}

type PropsClasses = Record<keyof StyleProps, string>

let baseStyle: StyleProps = {
  container: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderRadius: 10,
  },
}
const useStyles = makeStyles<Theme, StyleProps>(() => baseStyle as any);

// const useStyles = createStyles(({ palette }: Theme) => ({
//   container: {
//     backgroundColor: palette.primary.main,
//     borderWidth: 1,
//     borderRadius: 10,
//   },
// }));


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
            {/* <CardName title={name} /> */}
            <Grid spacing={1} container>
              <Grid item>
                <Typography variant="h5">{id}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5">{CustomToUpperCase(name)}</Typography>
              </Grid>
            </Grid>
            <TypeGenerator type={type} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}