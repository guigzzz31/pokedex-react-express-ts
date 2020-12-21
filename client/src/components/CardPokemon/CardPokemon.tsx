import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";

// import AvatarGenerator from "../../generators/AvatarGenerator";
import TypeGenerator from "../generators/TypeGenerator";
// import CardName from "./CardName";
import PokemonProps from "../../types/Pokemon";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    borderWidth: 1,
    borderRadius: 10,
  },
}));


export default function CardPokemon({ id, name, img, type }: PokemonProps): JSX.Element {
  const classes = useStyles();
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
          <Box zIndex={3} p={1}>
            {/* <CardName title={name} /> */}
            <Typography>{id}</Typography>
            <Typography>{name}</Typography>
            <TypeGenerator type={type} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}