import React, { useState } from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';

import axios from "axios";


import InfoPokemon from "./InfoPokemon";

import PokemonProps from '../../types/Pokemon';

export default function CardPokemon(pokemon: PokemonProps): JSX.Element {
  const { id, like } = pokemon;
  const classes: PropsClasses = useStyles({} as StyleProps);
  const [isToggled, setToggled] = useState(like);
  function toggleTrueFalse(id: string) {
    setToggled(!isToggled);
    const likePokemon = async () => {
      try {

        let data = {
          "like": !isToggled
        }
        const result = await axios.put(`/api/pokemons/${id}`, data);
      } catch (error) {
        console.log(error);
      }
    };
    likePokemon();
  }
  return (
    <Box className={classes.container} boxShadow={3}>
      <Box className={classes.info}>
        <InfoPokemon {...pokemon} />
      </Box>
      <Grid justify="flex-end" container>
        <Button onClick={() => toggleTrueFalse(id)} id={id} className={classes.likeButton}>
          {
            isToggled ? <ThumbUpIcon className={classes.likeIcon} /> : <ThumbUpOutlinedIcon className={classes.likeIcon} />
          }
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