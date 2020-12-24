import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { Theme, makeStyles } from "@material-ui/core/styles";
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

import CustomToUpperCase from "../../hooks/CustomToUpperCase";
import ParseColorType from "../../hooks/ParseColorType";
import ParseColorDamage from "../../hooks/ParseColorDamage";
import ParseColorDamageValue from "../helpers/ParseColorDamageValue";

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
  },
};


export default function DamageGenerator(damages: any) {
  const classes: PropsClasses = useStyles({} as StyleProps);
  const keys = Object.keys(damages.damages);
  const values = Object.values(damages.damages);
  return (
    <Box>
      <Grid direction="row" spacing={1} container>
        {keys
          ? keys.map((key: string) => {
            return (
              <Grid key={key} item>
                <Box key={key} className={classes.typeBox} bgcolor={ParseColorDamage(key)}>
                  <Typography align="center" className={classes.typeText} key={key}>{CustomToUpperCase(key)}</Typography>
                </Box>
              </Grid>
            );
          })
          : null}
      </Grid>
      <Grid direction="row" spacing={1} container>
        {values
          ? values.map((value: any) => {
            return (
              <Grid key={value} item>
                <Box key={value} className={classes.typeBox} style={{ borderColor: ParseColorDamageValue(value) }}>
                  <Typography align="center" style={{ color: ParseColorDamageValue(value) }} className={classes.typeValue} key={value}>{CustomToUpperCase(value)}</Typography>
                </Box>
              </Grid>
            );
          })
          : null}
      </Grid>
    </Box>
  );
}

//style
interface StyleProps {
  typeBox: BaseCSSProperties,
  typeText: BaseCSSProperties,
  typeValue: BaseCSSProperties,
}

type PropsClasses = Record<keyof StyleProps, string>

let baseStyle: StyleProps = {
  typeBox: {
    borderRadius: 9,
    border: 1,
    borderWidth: 2,
    borderColor: "#000",
    width: 80,
  },
  typeText: {
    color: "#FFF",
    fontWeight: 900,
    fontSize: 16,
  },
  typeValue: {
    color: "#FFF",
    fontWeight: 800,
    fontSize: 16,
  }
}
const useStyles = makeStyles<Theme, StyleProps>(() => baseStyle as any);