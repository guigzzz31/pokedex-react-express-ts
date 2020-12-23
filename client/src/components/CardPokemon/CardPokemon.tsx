import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';

import { Theme, makeStyles } from "@material-ui/core/styles";
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

import InfoPokemon from "./InfoPokemon";

import PokemonProps from '../../types/Pokemon';


export default function CardPokemon({ id, name, img, type }: PokemonProps): JSX.Element {
  const classes: PropsClasses = useStyles({} as StyleProps);
  return (
    <Box className={classes.container} boxShadow={3}>
      <Box className={classes.info}>
        <InfoPokemon id={id} name={name} img={img} type={type} />
      </Box>
      <Grid justify="flex-end" container>
        <Button className={classes.likeButton}>
          <ThumbUpOutlinedIcon className={classes.likeIcon} />
        </Button>
      </Grid>
    </ Box>
  );
}

//style
interface StyleProps {
  container: BaseCSSProperties,
  likeButton: BaseCSSProperties,
  likeIcon: BaseCSSProperties,
  info: BaseCSSProperties
}

type PropsClasses = Record<keyof StyleProps, string>

let baseStyle: StyleProps = {
  container: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderRadius: 18,
    maxWidth: 350,
    minWidth: 350,
  },
  likeIcon: {
    color: "#E4E4E4",
  },
  likeButton: {
    borderWidth: 2,
    borderRadius: 90,
    borderColor: "#E4E4E4"
  },
  info: {
    paddingTop: 23,
  }
}
const useStyles = makeStyles<Theme, StyleProps>(() => baseStyle as any);