import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { Theme, makeStyles } from "@material-ui/core/styles";
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';
import MenuItem from '@material-ui/core/MenuItem';


import CustomToUpperCase from "../../hooks/CustomToUpperCase";
import ParseColorType from "../../hooks/ParseColorType";
import SearchProps from "../../types/Search";

const type: string[] = ['None', 'Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice', 'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dragon', 'Dark', 'Steel']

export default function MenuTypeGenerator(searchType: any) {
  const classes: PropsClasses = useStyles({} as StyleProps);
  return (
    <Box m={1}>
      <Grid direction="row" spacing={1} container>
        {type
          ? type.map((item: string) => {
            return (
              <Box key={item} className={classes.typeBox} bgcolor={ParseColorType(item)}>
                {
                  // item === 'None' ?
                  //   <Grid key={item} item>
                  //     <MenuItem value="">
                  //       <em>None</em>
                  //     </MenuItem>
                  //   </Grid> :
                  <Grid key={item} item>
                    <MenuItem alignItems="center" key={item} value={item} className={classes.typeText} >{CustomToUpperCase(item)}</MenuItem>
                  </Grid>}
              </Box>
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
}

type PropsClasses = Record<keyof StyleProps, string>

let baseStyle: StyleProps = {
  typeText: {
    color: "#FFF",
    fontWeight: 900,
    fontSize: 9,
  },
  typeBox: {
    borderRadius: 9,
    margin: 2,
  }
}
const useStyles = makeStyles<Theme, StyleProps>(() => baseStyle as any);